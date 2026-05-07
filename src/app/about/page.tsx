import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Lohrasp Kansara",
  description: "Lohrasp Kansara is an international DJ and producer. Born in Geneva, Switzerland, and rooted in New York City.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-12 text-center">
          About
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg font-light">
          <p>
            Lohrasp Kansara is an international DJ and producer. Born in Geneva, Switzerland, and rooted in New York City, Lohrasp is constantly traveling the world.
          </p>
          <p>
            As a DJ, he has performed more than 6000 shows in over 60 countries at many world renowned nightclubs and venues.
          </p>
          <p>
            Lohrasp kicked off 2025 with a world tour that included some of the largest &amp; most notable clubs in the world.
          </p>
          <p>
            Lohrasp has played alongside some of the world&apos;s biggest DJ&apos;s such as Kaskade, Afrojack, MORTEN, Sunnery James &amp; Ryan Marciano, Pablo Fierro, Erick Morillo, Kryder, and many more.
          </p>
          <p>
            Although he loves to play all sorts of electronic music, his preference is to play Afro House &amp; Tech House.
          </p>
        </div>
      </div>
    </div>
  );
}
