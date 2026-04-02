import heroBgFull from "../assets/images/hero-bg-full.png";
import navBarFull from "../assets/images/nav-bar-full.png";
import playNowBtn from "../assets/images/play-now-btn.png";
import timelineFull from "../assets/images/timeline-full.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[1015px] overflow-hidden bg-black">
      {/* Full hero background from Figma */}
      <img
        src={heroBgFull}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top-right auth nav */}
      <nav className="absolute top-[20px] right-[50px] z-30 flex items-center gap-4">
        <span className="text-[#d2cd87]/70 text-sm">&#9816;</span>
        <a href="#" className="gold-text text-[16px] font-['Cinzel',serif] hover:brightness-125 transition">
          Sign In
        </a>
        <span className="h-5 w-px bg-[#ffffff]/30" />
        <a href="#" className="gold-text text-[16px] font-['Cinzel',serif] hover:brightness-125 transition">
          Create Account
        </a>
        <span className="h-5 w-px bg-[#ffffff]/30" />
        <span className="text-sm">🇧🇷 <span className="text-[#e4e2bf] text-xs">&#9660;</span></span>
      </nav>

      {/* Logo + Nav bar (exported from Figma) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <img
          src={navBarFull}
          alt="Valorian Navigation"
          className="w-[800px] h-auto"
          useMap="#nav-links"
        />
        {/* Clickable nav overlay */}
        <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-[25px]">
          {["home", "lore", "gameplay", "classes", "team", "founder"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-transparent hover:brightness-125 transition px-2 py-1"
              style={{ fontSize: 17 }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Play Demo banner */}
      <div className="absolute top-[431px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-[647px] h-[70px]"
        style={{
          background: 'linear-gradient(90deg, rgba(28,23,1,0) 0%, rgba(28,23,1,0.5) 20%, rgba(28,23,1,0.5) 80%, rgba(28,23,1,0) 100%)',
          borderTop: '4px solid rgba(255,205,96,0)',
          borderBottom: '4px solid rgba(255,205,96,0)',
        }}
      >
        <p className="gold-title text-[35px] font-['Cinzel',serif] whitespace-nowrap">
          PLAY DEMO 15/02, Join us!
        </p>
      </div>

      {/* Play Now button (exported from Figma) */}
      <div className="absolute top-[545px] left-1/2 -translate-x-1/2 z-20">
        <button className="group cursor-pointer relative">
          <img
            src={playNowBtn}
            alt="Play Now"
            className="w-[470px] h-auto transition-transform group-hover:scale-105 group-hover:brightness-110"
          />
        </button>
      </div>

      {/* Timeline (exported from Figma) */}
      <div className="absolute top-[781px] left-[469px] z-20">
        <img src={timelineFull} alt="" className="w-[503px] h-auto" />
      </div>

      {/* Timeline labels */}
      <p className="absolute top-[878px] left-[480px] z-20 gold-text text-[24px] font-['Cinzel',serif]">Phase 1</p>
      <p className="absolute top-[905px] left-[499px] z-20 gold-text text-[16px] font-['Cinzel',serif] opacity-70">2026/1</p>
      <p className="absolute top-[859px] left-[580px] z-20 gold-text text-[14px] font-['Cinzel',serif]">Phase 2</p>
      <p className="absolute top-[859px] left-[657px] z-20 gold-text text-[14px] font-['Cinzel',serif]">Phase 3</p>
      <p className="absolute top-[859px] left-[733px] z-20 gold-text text-[14px] font-['Cinzel',serif]">Phase 4</p>
      <p className="absolute top-[859px] left-[818px] z-20 gold-text text-[14px] font-['Cinzel',serif]">Beta</p>
      <p className="absolute top-[880px] left-[877px] z-20 gold-text text-[20px] font-['Cinzel',serif]">LAUNCH</p>
      <p className="absolute top-[905px] left-[898px] z-20 gold-text text-[16px] font-['Cinzel',serif] opacity-70">2027/2</p>
    </section>
  );
}
