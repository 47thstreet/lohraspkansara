import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Music - Lohrasp Kansara",
  description: "New releases and discography from Lohrasp Kansara.",
};

const releases = [
  { title: "Me Quemo", image: "/images/releases/me-quemo.jpg", link: "" },
  { title: "Choose to Lie", image: "/images/releases/choose-to-lie.jpg", link: "https://www.beatport.com/release/choose-to-lie/5362077" },
  { title: "Pra Nao Dizer Que Nao Falei Das Flores", image: "/images/releases/pra-nao-dizer.jpg", link: "https://www.beatport.com/release/pra-nao-dizer-que-nao-falei-das-flores/5827808" },
  { title: "I Follow Rivers", image: "/images/releases/i-follow-rivers.jpg", link: "https://open.spotify.com/album/51uoBR9gpOGzuuH8Rho3as" },
  { title: "Sandstorm", image: "/images/releases/sandstorm.jpg", link: "https://open.spotify.com/track/2LUQfArRMj1bqrVW1bSJw8" },
  { title: "Dance With The Wolves", image: "/images/releases/dance-with-the-wolves.jpg", link: "https://open.spotify.com/track/3A8gHF3BMXE6wYwWV8TTd5" },
  { title: "Ancestors", image: "/images/releases/ancestors.jpg", link: "https://open.spotify.com/track/5hHFKyQsqv50dvzyquairK" },
  { title: "Rest of Your Life Remix", image: "/images/releases/rest-of-your-life.jpg", link: "https://open.spotify.com/album/49bxgGiGLw9IfCAg1L6gik" },
  { title: "Candela", image: "/images/releases/candela.png", link: "https://xelon.ffm.to/mslkhaunted" },
  { title: "Haunted Remixes", image: "/images/releases/haunted-remixes.jpg", link: "https://xelon.ffm.to/mslkhaunted" },
  { title: "Haunted (feat. Marcus Santoro)", image: "/images/releases/haunted.jpg", link: "https://open.spotify.com/track/2zXfQmq8yxsC8OrD17SvAC" },
  { title: "Indera", image: "/images/releases/indera.jpg", link: "https://open.spotify.com/track/0iWYngN4rbHX4FhBjYzTKn" },
  { title: "Mother Soul", image: "/images/releases/mother-soul.jpg", link: "https://open.spotify.com/track/2n8yOaDVFqtuUIzUzNHeKC" },
  { title: "New Day", image: "/images/releases/new-day.jpg", link: "https://open.spotify.com/track/2M1xU3aMcF5FAnH0YwGJL2" },
  { title: "A Ri Funane", image: "/images/releases/a-ri-funane.jpg", link: "https://open.spotify.com/track/0fJMRXG21NegMRAR2D4dBz" },
  { title: "Carnaval", image: "/images/releases/carnaval.jpg", link: "https://open.spotify.com/track/4mhjNsmsBovoOX9Juw3Svv" },
  { title: "La Revolucion", image: "/images/releases/la-revolucion.jpg", link: "https://open.spotify.com/track/6fM6OpFZHCfVm3D1dlctIv" },
  { title: "Follow Me", image: "/images/releases/follow-me.jpg", link: "https://open.spotify.com/track/5D8gCNYs8gMUDROy8qGUeL" },
  { title: "In The Music", image: "/images/releases/in-the-music.jpg", link: "https://open.spotify.com/track/5IqtFy4lQqUcM6Fr5gdd43" },
  { title: "Ring The Alarm", image: "/images/releases/ring-the-alarm.jpg", link: "https://open.spotify.com/track/4zt5uTeVvIby37PvBCg1xZ" },
  { title: "Curura", image: "/images/releases/curura.jpg", link: "https://open.spotify.com/track/3nZWoSnFiBI6cJMfvNhyTy" },
  { title: "Crowd Control", image: "/images/releases/crowd-control.jpg", link: "https://open.spotify.com/track/3tquMzZwKUhICknT533pJ5" },
  { title: "Ndau", image: "/images/releases/ndau.jpg", link: "https://open.spotify.com/track/6v4vY5P5XvWTUl1Pv6SXfs" },
  { title: "248", image: "/images/releases/248.jpg", link: "https://open.spotify.com/track/7JIKpd02V3Cgqucfa2fi5J" },
  { title: "Forever", image: "/images/releases/forever.jpg", link: "https://open.spotify.com/track/2QQ17XIFff6us3lEEbUqfy" },
  { title: "Pandemonium", image: "/images/releases/pandemonium.jpg", link: "https://open.spotify.com/track/2UHDoyxHnEDdyPfSGjlCvO" },
  { title: "Underworld", image: "/images/releases/underworld.jpg", link: "https://open.spotify.com/track/7266HbEObcNsVDH1sk4NCs" },
  { title: "Vuelvo A Nacer", image: "/images/releases/vuelvo-a-nacer.jpg", link: "https://open.spotify.com/track/7oJSMGQwacphYIR3Rq7iHA" },
  { title: "Neshama", image: "/images/releases/neshama.jpg", link: "https://open.spotify.com/track/6eVK1XTYbaPj9axnvnTo4q" },
  { title: "Solamente Tu", image: "/images/releases/solamente-tu.jpg", link: "https://open.spotify.com/track/1J1GYKcXJHj3aUoCIweNp5" },
  { title: "Take Me Home", image: "/images/releases/take-me-home.jpg", link: "https://open.spotify.com/track/43GpynIGUSk1HRKgF16uCV" },
  { title: "Final Night", image: "/images/releases/final-night.jpg", link: "https://open.spotify.com/track/0gVa6ck1aDolrIIGB7JfFe" },
  { title: "Get Down", image: "/images/releases/get-down.jpg", link: "https://open.spotify.com/track/2na0npmdmvRCDawKwBurpv" },
  { title: "Thinking", image: "/images/releases/thinking.jpg", link: "https://open.spotify.com/track/0xHEN5Zs8BMnl9qIMkGy4v" },
  { title: "I Can't Tell You", image: "/images/releases/i-cant-tell-you.jpg", link: "https://open.spotify.com/track/2lJtp0e3IXJyiFyjA9sCXg" },
  { title: "Feel The Love", image: "/images/releases/feel-the-love.jpg", link: "" },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-4 text-center">
          Music
        </h1>
        <h2 className="text-lg text-gray-400 uppercase tracking-[0.2em] mb-12 text-center font-light">
          New Releases
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {releases.map((release, i) => {
            const Wrapper = release.link ? "a" : "div";
            const linkProps = release.link
              ? { href: release.link, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper key={i} {...linkProps} className="album-card block group">
                <div className="aspect-square relative overflow-hidden bg-gray-900">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-400 text-center group-hover:text-white transition-colors truncate">
                  {release.title}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
