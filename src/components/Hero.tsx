import heroCityBg from '../assets/images/hero-city-bg.png';
import heroPaladin from '../assets/images/hero-paladin-new.png';
import logoWithOrnament from '../assets/images/logo-with-ornament.png';
import playNowFrame from '../assets/images/play-now-frame.png';
import timelineNew from '../assets/images/timeline-new.png';
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

      {/* Paladin character */}
      <img
        src={heroPaladin}
        alt="Paladin"
        className="absolute pointer-events-none"
        style={{ right: '0%', top: '42%', width: '53.5%', height: 'auto' }}
      />

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 w-full flex items-center justify-end"
        style={{ height: '6.3%', paddingRight: '3.5%' }}
      >
        <div className="flex items-center" style={{ gap: '1vw' }}>
          <a
            href="#signin"
            className="text-[#d4c5a0] hover:text-white transition-colors flex items-center"
            style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1vw', gap: '0.5vw' }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-[1.2vw] h-[1.2vw] text-[#c5944a]">
              <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM3 18a7 7 0 0114 0H3z" />
            </svg>
            SIGN IN
          </a>
          <span className="text-[#d4c5a070]" style={{ fontSize: '1vw' }}>|</span>
          <a
            href="#create"
            className="text-[#8a7b5a] hover:text-white transition-colors"
            style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1vw' }}
          >
            CREATE ACCOUNT
          </a>
          <span className="text-[#d4c5a070]" style={{ fontSize: '1vw' }}>|</span>
          <div className="flex items-center" style={{ gap: '0.3vw' }}>
            <span style={{ fontSize: '1.2vw' }}>🇧🇷</span>
            <span className="text-[#e4e2bf]" style={{ fontSize: '0.7vw' }}>▼</span>
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
          className="gold-title"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2.4vw',
            fontWeight: 400,
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            textShadow: '0 0 30px rgba(197,148,74,0.4)',
          }}
        >
          PLAY DEMO 15/02, Join us!
        </span>
      </div>

      {/* Play Now Button — Figma ornate frame + real text */}
      <a
        href="#play"
        className="absolute left-1/2 -translate-x-1/2 group"
        style={{ top: '53.7%', width: '32.6%' }}
      >
        <div className="relative flex items-center justify-center group-hover:brightness-125 group-active:scale-[0.98] transition-all">
          <img
            src={playNowFrame}
            alt=""
            className="w-full h-auto pointer-events-none"
          />
          <span
            className="absolute text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.8vw',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textShadow: '0 0 10px rgba(100,180,255,0.4)',
            }}
          >
            PLAY NOW
          </span>
        </div>
      </a>

      {/* Timeline — Figma asset + real text labels */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '77%', width: '35%' }}>
        <img src={timelineNew} alt="" className="w-full h-auto pointer-events-none" />
        {/* Phase labels positioned above timeline markers */}
        <div className="absolute inset-0 flex items-start justify-between" style={{ paddingLeft: '2%', paddingRight: '0%' }}>
          <div className="flex flex-col items-center" style={{ width: '18%' }}>
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1vw', fontWeight: 600 }}>Phase 1</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw' }}>2026/1</span>
          </div>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw', marginTop: '2%' }}>Phase 2</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw', marginTop: '2%' }}>Phase 3</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw', marginTop: '2%' }}>Phase 4</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65vw', marginTop: '2%' }}>Beta</span>
          <div className="flex flex-col items-center" style={{ width: '18%' }}>
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.95vw', fontWeight: 600 }}>LAUNCH</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw' }}>2027/2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
