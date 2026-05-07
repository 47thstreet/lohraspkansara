import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full viewport */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black relative">
        <div className="fade-in flex flex-col items-center gap-8">
          <Image
            src="/images/logo-white.png"
            alt="Lohrasp Kansara"
            width={600}
            height={172}
            className="w-[80vw] max-w-[600px] h-auto"
            priority
          />
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light">
            World Renowned DJ and Producer
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section Links */}
      <section className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { href: "/about", label: "About" },
            { href: "/music", label: "Music" },
            { href: "/shows", label: "Shows" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-gray-700 p-8 text-center uppercase tracking-[0.2em] text-sm text-gray-300 hover:border-white hover:text-white transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
