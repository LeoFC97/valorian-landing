import sectionOrnament from '../assets/images/section-ornament.png';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-16 overflow-hidden">
      {/* Top ornament */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <img src={sectionOrnament} alt="" className="w-[169px] h-[10px] drop-shadow-[0_0_5px_#ffe95e]" />
        <h2 className="section-title gold-title">Valorian Online</h2>
        <img src={sectionOrnament} alt="" className="w-[169px] h-[10px] rotate-180 drop-shadow-[0_0_5px_#ffe95e]" />
      </div>

      {/* Links */}
      <div className="flex justify-center gap-12 mb-8 font-['Cinzel',serif] text-sm">
        <a href="#home" className="gold-text hover:opacity-80 transition-opacity">Home</a>
        <a href="#lore" className="gold-text hover:opacity-80 transition-opacity">Lore</a>
        <a href="#gameplay" className="gold-text hover:opacity-80 transition-opacity">Gameplay</a>
        <a href="#classes" className="gold-text hover:opacity-80 transition-opacity">Classes</a>
        <a href="#team" className="gold-text hover:opacity-80 transition-opacity">Team</a>
      </div>

      {/* Social links placeholder */}
      <div className="flex justify-center gap-6 mb-8">
        {['Discord', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
          <a key={social} href="#" className="text-[#d2cd87] text-xs font-['Cinzel',serif] hover:text-[#fcff98] transition-colors">
            {social}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-[#edca87] text-xs opacity-50">
        <p>&copy; 2026 Valorian Online. All rights reserved.</p>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d2cd87] to-transparent opacity-30" />
    </footer>
  );
}
