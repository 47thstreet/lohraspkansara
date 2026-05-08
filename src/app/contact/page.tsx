"use client";

import Image from "next/image";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111] relative">
      <Header />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 pb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Form - Left */}
          <div className="flex-1 w-full">
            {/* Booking email */}
            <p className="text-[#c9a84c] text-[15px] mb-6 font-light">
              For Bookings:{" "}
              <a
                href="mailto:Rick@TheNoiseGroupNY.com"
                className="hover:text-[#e0c06a] transition-colors"
              >
                Rick@TheNoiseGroupNY.com
              </a>
            </p>

            {/* EPK Download */}
            <a
              href="/files/Lohrasp-Kansara-2026-EPK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-500 px-6 py-2 text-[12px] uppercase tracking-[0.2em] text-gray-300 hover:bg-white hover:text-black transition-all duration-300 mb-8"
            >
              Download EPK
            </a>

            {/* Contact Form */}
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:Rick@TheNoiseGroupNY.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}`;
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gray-500 hover:bg-gray-400 text-white py-2.5 text-sm uppercase tracking-wider transition-colors"
              >
                Send
              </button>
            </form>

            <div className="pt-8">
              <SocialIcons size={22} />
            </div>
          </div>

          {/* Photo - Right */}
          <div className="w-full md:w-[45%] flex-shrink-0 hidden md:block">
            <Image
              src="/images/bg/contact-lohrasp.jpg"
              alt="Lohrasp Kansara"
              width={700}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-gray-500 space-y-1">
        <p>&copy; {new Date().getFullYear()} Lohrasp Kansara</p>
        <p>Powered by Zisko</p>
      </div>
    </main>
  );
}
