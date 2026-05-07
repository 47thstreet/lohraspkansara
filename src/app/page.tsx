"use client";

import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video - Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        poster="/images/bg/lohrasp-djing.jpg"
      >
        <source src="/videos/lohrasp-kansara.mp4" type="video/mp4" />
      </video>

      {/* Background Video - Mobile (highlight reel) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        poster="/images/bg/lk-reel-cover.png"
      >
        <source src="/videos/highlight-reel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Mobile: Logo top-left + hamburger placeholder */}
        <div className="md:hidden px-5 pt-5">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Lohrasp Kansara"
              width={180}
              height={52}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center: Logo (desktop only) */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="hidden md:block">
            <Image
              src="/images/logo-white.png"
              alt="Lohrasp Kansara"
              width={500}
              height={143}
              className="w-[400px] h-auto mb-12"
              priority
            />
          </div>

          {/* Desktop Nav - below logo */}
          <nav className="hidden md:flex items-center gap-16">
            {[
              { href: "/about", label: "About" },
              { href: "/music", label: "Music" },
              { href: "/shows", label: "Shows" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] uppercase tracking-[0.25em] text-white hover:text-gray-300 transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Icons - bottom left on desktop, bottom center on mobile */}
        <div className="pb-8 px-6 md:px-10">
          <SocialIcons size={22} className="md:justify-start justify-center" />
        </div>
      </div>
    </div>
  );
}
