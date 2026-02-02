import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 requests per window

// In-memory store for rate limiting (resets on server restart)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries periodically
function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Get client IP from headers
async function getClientIP(): Promise<string> {
  const headersList = await headers();
  // Check various headers for IP (works with Vercel, Cloudflare, etc.)
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIP = headersList.get('x-real-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  return 'unknown';
}

// Check rate limit for an IP
function checkRateLimit(ip: string): { allowed: boolean; remainingRequests: number; resetInSeconds: number } {
  cleanupExpiredEntries();

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // First request or window expired - create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remainingRequests: MAX_REQUESTS_PER_WINDOW - 1, resetInSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remainingRequests: 0, resetInSeconds };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);
  const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
  return { allowed: true, remainingRequests: MAX_REQUESTS_PER_WINDOW - record.count, resetInSeconds };
}

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const clientIP = await getClientIP();
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfterSeconds: rateLimit.resetInSeconds
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimit.resetInSeconds.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetInSeconds.toString()
          }
        }
      );
    }

    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['viniciuslimadoc@gmail.com'],
      subject: `Novo contato: ${name}`,
      replyTo: email,
      html: `
        <p ><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}