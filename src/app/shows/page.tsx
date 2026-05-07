import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shows - Lohrasp Kansara",
  description: "Upcoming shows and events for Lohrasp Kansara.",
};

const shows = [
  { date: "02/07", event: "TBA", venue: "", city: "New York" },
  { date: "02/08", event: "Loco Carnaval", venue: "Somewhere Nowhere", city: "New York" },
  { date: "02/13", event: "Mynt", venue: "", city: "Miami" },
  { date: "02/14", event: "Gekko", venue: "", city: "Miami" },
  { date: "02/15", event: "Loco Carnaval", venue: "Somewhere Nowhere", city: "New York" },
  { date: "03/01", event: "Loco Carnaval", venue: "Somewhere Nowhere", city: "New York" },
  { date: "03/15", event: "Loco Carnaval", venue: "Somewhere Nowhere", city: "New York" },
  { date: "03/20", event: "Members", venue: "", city: "Los Angeles" },
  { date: "03/21", event: "TBA", venue: "", city: "Los Angeles" },
  { date: "03/29", event: "Loco Carnaval", venue: "Somewhere Nowhere", city: "New York" },
];

export default function ShowsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-12 text-center">
          Upcoming shows &amp; events
        </h1>

        <div className="space-y-0">
          {shows.map((show, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-5 border-b border-gray-800 hover:bg-white/5 transition-colors px-4"
            >
              <Image
                src="/images/americanflag.jpg"
                alt="US"
                width={30}
                height={20}
                className="w-7 h-5 object-cover rounded-sm flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <span className="text-white font-medium">
                      {show.event}
                      {show.venue && (
                        <span className="text-gray-400 font-light"> @ {show.venue}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{show.city}</span>
                    <span className="text-gray-600">2026</span>
                    <span className="font-mono">{show.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
