import heroCityBg from '../assets/images/hero-city-bg.png';
import heroPaladin from '../assets/images/hero-paladin-with-effect.png';
import logoWithOrnament from '../assets/images/logo-with-ornament.png';
import playNowBtn from '../assets/images/play-now-btn.png';
import timelineNew from '../assets/images/timeline-new.png';
import iconKnightGold from '../assets/images/icon-knight-gold.png';
import flagBrazil from '../assets/images/flag-brazil.png';
import NavBar from './NavBar';

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1015' }}>
      {/* Background */}
      <img
        src={heroCityBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Paladin character — exported from Figma with built-in fade effect */}
      <img
        src={heroPaladin}
        alt="Paladin"
        className="absolute pointer-events-none"
        style={{ right: '-18%', top: '43%', width: '53.5%', height: 'auto' }}
      />

      {/* Top bar — matches Figma Frame 71 (1440×64, padding 20/50) */}
      <div
        className="absolute top-0 left-0 w-full z-50 flex items-center justify-end"
        style={{ height: '4.4%', paddingRight: '3.5%', paddingTop: '1.4%' }}
      >
        <div className="flex items-center" style={{ gap: '1vw' }}>
          {/* SIGN IN — knight icon + Goldeen gradient text */}
          <a
            href="#signin"
            className="flex items-center hover:brightness-125 transition-all"
            style={{ gap: '0.7vw' }}
          >
            <img
              src={iconKnightGold}
              alt=""
              className="pointer-events-none"
              style={{ width: '1.4vw', height: '1.4vw' }}
            />
            <span
              style={{
                fontFamily: "'OptimusPrincepsSemiBold', 'Cinzel', serif",
                fontSize: '1.1vw',
                fontWeight: 600,
                letterSpacing: '0.02em',
                background: 'linear-gradient(to bottom, #f7f7f7, #d2cd87)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sign In
            </span>
          </a>

          {/* Vertical separator — white stroke like Figma */}
          <div style={{ width: '1px', height: '1.4vw', background: 'rgba(255,255,255,0.6)' }} />

          {/* CREATE ACCOUNT */}
          <a
            href="#create"
            className="hover:brightness-125 transition-all"
          >
            <span
              style={{
                fontFamily: "'OptimusPrincepsSemiBold', 'Cinzel', serif",
                fontSize: '1.1vw',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: '#ffffff',
              }}
            >
              Create Account
            </span>
          </a>

          {/* Vertical separator */}
          <div style={{ width: '1px', height: '1.4vw', background: 'rgba(255,255,255,0.6)' }} />

          {/* Language selector — Brazil flag from Figma + dropdown */}
          <div className="flex items-center cursor-pointer hover:brightness-125 transition-all" style={{ gap: '0.3vw' }}>
            <img
              src={flagBrazil}
              alt="Português"
              className="pointer-events-none"
              style={{ width: '1.7vw', height: '1.7vw', borderRadius: '2px' }}
            />
            <svg viewBox="0 0 13 13" style={{ width: '0.6vw', height: '0.6vw' }}>
              <polygon points="6.5,13 0,0 13,0" fill="#e4e2bf" />
            </svg>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '0%', width: '13%' }}>
        <img src={logoWithOrnament} alt="Valorian Online" className="w-full h-auto" />
      </div>

      {/* Nav Bar */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '18%', width: '55.5%' }}>
        <NavBar />
      </div>

      {/* Play Demo Banner — gold text with subtle glow lines */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{ top: '42.5%', width: '44.9%', height: '6.9%' }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2.4vw',
            fontWeight: 400,
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            color: '#ffffff',
            textShadow: '0 0 30px rgba(197,148,74,0.4)',
          }}
        >
          PLAY DEMO 15/02, Join us!
        </span>
      </div>

      {/* Play Now Button — from componente total (text baked in) */}
      <a
        href="#play"
        className="absolute left-1/2 -translate-x-1/2 hover:brightness-125 active:scale-[0.98] transition-all"
        style={{ top: '55%', width: '19.2%' }}
      >
        <img
          src={playNowBtn}
          alt="Play Now"
          className="w-full h-auto pointer-events-none"
        />
      </a>

      {/* Timeline — Figma asset + real text labels */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '77%', width: '35%' }}>
        <img src={timelineNew} alt="" className="w-full h-auto pointer-events-none" />
        {/* Phase labels positioned below timeline crystals */}
        <div className="absolute left-0 right-0 flex items-start justify-between" style={{ top: '100%', paddingTop: '0.3vw', paddingLeft: '2%', paddingRight: '0%' }}>
          <div className="flex flex-col items-center" style={{ width: '18%' }}>
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1vw', fontWeight: 600 }}>Phase 1</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw' }}>2026/1</span>
          </div>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw' }}>Phase 2</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw' }}>Phase 3</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw' }}>Phase 4</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw' }}>Beta</span>
          <div className="flex flex-col items-center" style={{ width: '18%' }}>
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.95vw', fontWeight: 600 }}>LAUNCH</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw' }}>2027/2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
