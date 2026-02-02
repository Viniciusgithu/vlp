import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vinicius Lima Pazos | Software Developer",
    template: "%s | Vinicius Lima Portfolio",
  },
  description:
    "Portfolio of Vinicius Lima Pazos - A passionate Software Developer and technology enthusiast. Explore my projects, skills, and get in touch for collaborations.",
  keywords: [
    "Vinicius Lima Pazos",
    "VLP",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Brazil",
    "World"
  ],
  authors: [{ name: "Vinicius Lima", url: "https://github.com/viniciuslimadoc" }],
  creator: "Vinicius Lima",
  publisher: "Vinicius Lima",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vlp-portf.vercel.app", 
    siteName: "Vinicius Lima Portfolio",
    title: "Vinicius Lima | Full Stack Developer & Tech Enthusiast",
    description:
      "Portfolio of Vinicius Lima - A passionate Full Stack Developer and technology enthusiast. Explore my projects, skills, and get in touch for collaborations.",
    images: [
      {
        url: "/portf.png",
        width: 1200,
        height: 630,
        alt: "VLP - Portfolio",
      },
    ],
  },
  metadataBase: new URL("https://vlp-portf.vercel.app"), 
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <section className="fixed inset-0 w-full h-full z-10">
          <video autoPlay muted loop className="w-full h-full object-cover object-center"><source src="/bg-light.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 backdrop-blur-md"></div>
        </section>
        {children}
      </body>
    </html>
  );
}
