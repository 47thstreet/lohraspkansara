"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Rick@TheNoiseGroupNY.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-12 text-center">
          Contact
        </h1>

        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Booking</p>
          <a
            href="mailto:Rick@TheNoiseGroupNY.com"
            className="text-white text-lg hover:text-gray-300 transition-colors"
          >
            Rick@TheNoiseGroupNY.com
          </a>
        </div>

        <div className="text-center mb-12">
          <a
            href="/files/Lohrasp-Kansara-2026-EPK.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Download EPK
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black px-10 py-3 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gray-200 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
