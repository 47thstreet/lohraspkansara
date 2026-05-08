import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Shows - Lohrasp Kansara",
  description: "Upcoming shows and events for Lohrasp Kansara.",
};

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with stage photo */}
      <div className="relative h-[55vh] md:h-[65vh]">
        <Image
          src="/images/bg/lohrasp-kansara-dj-background.jpg"
          alt="Lohrasp Kansara performing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <Header />
      </div>

      {/* Upcoming Shows heading */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-xl md:text-2xl uppercase tracking-[0.25em] font-light mb-8">
          Upcoming Shows &amp; Events
        </h1>
      </div>

      {/* Subscribe form */}
      <SubscribeForm />
      <Footer />
    </main>
  );
}
