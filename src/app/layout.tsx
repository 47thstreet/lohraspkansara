import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lohrasp Kansara - World Renowned DJ and Producer",
  description: "Lohrasp Kansara is an international DJ and producer. Born in Geneva, Switzerland, and rooted in New York City. 6000+ shows in 60+ countries.",
  metadataBase: new URL("https://lohraspkansara.vercel.app"),
  openGraph: {
    title: "Lohrasp Kansara - World Renowned DJ and Producer",
    description: "International DJ and producer. Born in Geneva, Switzerland. 6000+ shows in 60+ countries. Afro House & Tech House.",
    url: "https://lohraspkansara.vercel.app",
    siteName: "Lohrasp Kansara",
    images: [
      {
        url: "/images/bg/lohrasp-djing.jpg",
        width: 1200,
        height: 630,
        alt: "Lohrasp Kansara DJing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohrasp Kansara - World Renowned DJ and Producer",
    description: "International DJ and producer. 6000+ shows in 60+ countries.",
    images: ["/images/bg/lohrasp-djing.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <link rel="preload" href="/images/bg/lohrasp-djing.jpg" as="image" />
        <link rel="preload" href="/images/logo-white.png" as="image" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white font-[Montserrat,Arial,Helvetica,sans-serif]">
        {children}
      </body>
    </html>
  );
}
