"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaSoundcloud } from "react-icons/fa";

const socialLinks = [
  { href: "https://instagram.com/lohraspkansara/", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com/lohraspkansaraofficial", icon: FaFacebookF, label: "Facebook" },
  { href: "https://youtube.com/user/THEDJLEXPERIENCE", icon: FaYoutube, label: "YouTube" },
  { href: "https://open.spotify.com/artist/33puj2nZF4OKSccBLaf1oy", icon: FaSpotify, label: "Spotify" },
  { href: "https://soundcloud.com/lohraspkansara", icon: FaSoundcloud, label: "SoundCloud" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h3 className="text-lg font-light tracking-wide mb-4">
          Subscribe to get notified of new releases, upcoming shows, news &amp; more
        </h3>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-gray-200 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social + Logo */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col items-center gap-6">
        <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="Lohrasp Kansara"
            width={180}
            height={52}
            className="h-8 w-auto opacity-70"
          />
        </Link>
        <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">World Renowned DJ and Producer</p>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} Lohrasp Kansara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
