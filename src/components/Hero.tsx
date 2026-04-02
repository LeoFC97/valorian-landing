import logo from "../assets/images/logo.png";
import heroPaladin from "../assets/images/hero-paladin.png";
import playButtonBg from "../assets/images/play-button-bg.png";
import timelineOrnament from "../assets/images/timeline-ornament.png";
import heroBg from "../assets/images/team-bg.png";

const navLinks = ["Home", "Lore", "Gameplay", "Classes", "Founder"];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Medieval city background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        {/* Darken and vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 70%)',
        }} />
      </div>

      {/* Top-right auth nav */}
      <nav className="absolute top-0 right-0 z-30 flex items-center gap-4 px-12 py-5">
        <span className="text-[#d2cd87]/70 text-sm">&#9816;</span>
        <a href="#" className="gold-text text-[14px] uppercase tracking-wider font-['Cinzel',serif] hover:brightness-125 transition">
          Sign In
        </a>
        <span className="h-5 w-px bg-[#d2cd87]/40" />
        <a href="#" className="gold-text text-[14px] uppercase tracking-wider font-['Cinzel',serif] hover:brightness-125 transition">
          Create Account
        </a>
        <span className="h-5 w-px bg-[#d2cd87]/40" />
        <span className="text-sm">🇧🇷 <span className="text-[#d2cd87]/60 text-xs">&#9660;</span></span>
      </nav>

      {/* Centered logo - smaller like Figma */}
      <div className="relative z-20 flex flex-col items-center pt-2">
        <img src={logo} alt="Valorian Online" className="h-[130px] w-auto object-contain" />
      </div>

      {/* Ornamental nav bar - elaborate gold frame */}
      <div className="relative z-20 -mt-2 flex justify-center">
        <div className="relative w-[700px]">
          {/* Top ornamental border */}
          <div className="absolute -top-[5px] left-[5%] right-[5%] h-[2px]" style={{
            background: 'linear-gradient(90deg, transparent, #c9a84c 15%, #f0d060 50%, #c9a84c 85%, transparent)',
          }} />
          {/* Bottom ornamental border */}
          <div className="absolute -bottom-[5px] left-[5%] right-[5%] h-[2px]" style={{
            background: 'linear-gradient(90deg, transparent, #c9a84c 15%, #f0d060 50%, #c9a84c 85%, transparent)',
          }} />

          {/* Left corner ornament */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-14 h-14">
            <div className="absolute inset-1 border border-[#c9a84c]/60 rotate-45" />
            <div className="absolute inset-3 border border-[#c9a84c]/40 rotate-45" />
            <div className="absolute inset-[18px] bg-[#c9a84c]/20 rotate-45" />
          </div>
          {/* Right corner ornament */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-14 h-14">
            <div className="absolute inset-1 border border-[#c9a84c]/60 rotate-45" />
            <div className="absolute inset-3 border border-[#c9a84c]/40 rotate-45" />
            <div className="absolute inset-[18px] bg-[#c9a84c]/20 rotate-45" />
          </div>

          {/* Inner bar */}
          <div className="relative border-l-2 border-r-2 border-[#c9a84c]/50"
            style={{
              background: 'linear-gradient(180deg, rgba(20,15,5,0.85) 0%, rgba(10,8,3,0.95) 100%)',
              boxShadow: 'inset 0 0 30px rgba(201,168,76,0.05)',
            }}
          >
            <div className="absolute top-[2px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
            <div className="absolute bottom-[2px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

            <ul className="flex items-center justify-center gap-[32px] py-[10px]">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`gold-text text-[16px] uppercase tracking-[0.1em] font-['Cinzel',serif] hover:brightness-125 transition ${i === 0 ? 'drop-shadow-[0_0_3px_#d2cd87]' : ''}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Play Demo banner */}
      <div className="relative z-20 mt-20 flex justify-center">
        <div
          className="flex items-center justify-center px-16 py-3"
          style={{
            background: 'linear-gradient(90deg, rgba(28,23,1,0) 0%, rgba(28,23,1,0.5) 20%, rgba(28,23,1,0.5) 80%, rgba(28,23,1,0) 100%)',
          }}
        >
          <p className="gold-title text-[32px] font-['Cinzel',serif] tracking-[0.05em] whitespace-nowrap uppercase">
            Play Demo 15/02, Join us!
          </p>
        </div>
      </div>

      {/* Play Now button - ornamental frame with blue glow */}
      <div className="relative z-20 mt-8 flex justify-center">
        <button className="group relative flex items-center justify-center cursor-pointer">
          {/* Ornamental frame background */}
          <div className="relative">
            <img src={playButtonBg} alt="" className="h-[80px] min-w-[350px] object-contain transition-transform group-hover:scale-105" />
          </div>
          <span className="absolute gold-text text-[22px] font-['Cinzel',serif] uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] whitespace-nowrap">
            PLAY NOW
          </span>
        </button>
      </div>

      {/* Timeline / Roadmap - centered with ornamental design */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-20 w-[500px]">
        {/* Ornamental timeline line */}
        <div className="relative">
          {/* Decorative scrollwork line */}
          <img src={timelineOrnament} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-[100px] object-contain opacity-40" />
          <img src={timelineOrnament} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[100px] object-contain opacity-40 scale-x-[-1]" />

          {/* Diamond markers */}
          <div className="relative flex items-end justify-between px-2">
            {/* Phase 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[30px] h-[30px] rotate-45 border-2 border-[#4a90d9] bg-[#1a3a6a]/60 shadow-[0_0_12px_rgba(74,144,217,0.5)]">
                <div className="absolute inset-[4px] rotate-0 bg-[#4a90d9]/30 border border-[#6ab0ff]/50" />
              </div>
              <span className="gold-text text-[20px] font-['Cinzel',serif] mt-2 uppercase tracking-wider">Phase 1</span>
              <span className="gold-text text-[14px] font-['Cinzel',serif] opacity-70">2026/1</span>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-[18px] h-[18px] rotate-45 border border-[#d9d9d9]/50 bg-[#d9d9d9]/20" />
              <span className="gold-text text-[12px] font-['Cinzel',serif] mt-2 uppercase">Phase 2</span>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-[18px] h-[18px] rotate-45 border border-[#d9d9d9]/50 bg-[#d9d9d9]/20" />
              <span className="gold-text text-[12px] font-['Cinzel',serif] mt-2 uppercase">Phase 3</span>
            </div>

            {/* Phase 4 */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-[18px] h-[18px] rotate-45 border border-[#d9d9d9]/50 bg-[#d9d9d9]/20" />
              <span className="gold-text text-[12px] font-['Cinzel',serif] mt-2 uppercase">Phase 4</span>
            </div>

            {/* Beta */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-[18px] h-[18px] rotate-45 border border-[#d9d9d9]/50 bg-[#d9d9d9]/20" />
              <span className="gold-text text-[12px] font-['Cinzel',serif] mt-2 uppercase">Beta</span>
            </div>

            {/* LAUNCH */}
            <div className="flex flex-col items-center">
              <div className="w-[38px] h-[38px] rotate-45 border-2 border-[#d9d9d9]/40 bg-[#d9d9d9]/10">
                <div className="absolute inset-[6px] rotate-0 border border-[#d9d9d9]/30" />
              </div>
              <span className="gold-text text-[18px] font-['Cinzel',serif] mt-2 uppercase tracking-wider">LAUNCH</span>
              <span className="gold-text text-[14px] font-['Cinzel',serif] opacity-70">2027/2</span>
            </div>
          </div>

          {/* Connecting line through diamonds */}
          <div className="absolute top-[15px] left-[30px] right-[30px] h-px bg-gradient-to-r from-[#4a90d9]/40 via-[#d9d9d9]/30 to-[#d9d9d9]/20" />
        </div>
      </div>

      {/* Paladin character - positioned to the right like Figma */}
      <div className="absolute right-0 top-0 bottom-0 z-10 w-[55%] pointer-events-none">
        <img
          src={heroPaladin}
          alt=""
          className="absolute right-[-5%] top-[15%] h-[90%] w-auto object-contain"
        />
        {/* Left fade to blend into background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, black 0%, transparent 35%)',
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{
          background: 'linear-gradient(to top, black 0%, transparent 100%)',
        }} />
      </div>

      {/* Global bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[5]" />
    </section>
  );
}
