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
  title: "VLP - Portfolio",
  description: "Portfolio Website of VLP, studant and enthusiast technology",
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
