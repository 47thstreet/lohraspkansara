import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About - Lohrasp Kansara",
  description: "Lohrasp Kansara is an international DJ and producer. Born in Geneva, Switzerland, and rooted in New York City.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] bg-[url('/images/bg/lohrasp-djing.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="min-h-screen bg-black/80">
        <Header />

        <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 pb-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Bio Text - Left */}
            <div className="flex-1 space-y-5">
              <div className="space-y-5 text-gray-300 text-[15px] leading-relaxed font-light">
                <p>
                  Lohrasp Kansara is an international DJ and producer.
                </p>
                <p>
                  Born in Geneva, Switzerland, and rooted in New York City, Lohrasp is constantly traveling the world.
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

              <div className="pt-6">
                <SocialIcons size={22} />
              </div>
            </div>

            {/* Photo - Right */}
            <div className="w-full md:w-[45%] flex-shrink-0">
              <Image
                src="/images/bg/about-lohrasp.jpg"
                alt="Lohrasp Kansara"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
