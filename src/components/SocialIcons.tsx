import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";

const socialLinks = [
  { href: "https://instagram.com/lohraspkansara/", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com/lohraspkansaraofficial", icon: FaFacebookF, label: "Facebook" },
  { href: "https://youtube.com/user/THEDJLEXPERIENCE", icon: FaYoutube, label: "YouTube" },
  { href: "https://open.spotify.com/artist/33puj2nZF4OKSccBLaf1oy", icon: FaSpotify, label: "Spotify" },
  { href: "https://soundcloud.com/lohraspkansara", icon: FaSoundcloud, label: "SoundCloud" },
  { href: "https://www.beatport.com/artist/lohrasp-kansara/691498", icon: SiBeatport, label: "Beatport" },
];

export default function SocialIcons({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label={social.label}
        >
          <social.icon size={size} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
