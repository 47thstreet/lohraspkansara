import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
        <SocialIcons size={24} />
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>&copy; {new Date().getFullYear()} Lohrasp Kansara</p>
          <p>Powered by Zisko</p>
        </div>
      </div>
    </footer>
  );
}
