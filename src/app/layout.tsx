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
  description: "Lohrasp Kansara is an international DJ and producer. Born in Geneva, Switzerland, and rooted in New York City.",
  icons: {
    icon: "/images/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white font-[Montserrat,Arial,Helvetica,sans-serif]">
        {children}
      </body>
    </html>
  );
}
