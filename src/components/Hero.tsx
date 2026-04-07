import heroCityBg from '../assets/images/hero-city-bg.png';
import heroPaladin from '../assets/images/hero-paladin-new.png';
import logoWithOrnament from '../assets/images/logo-with-ornament.png';
import timelineBar from '../assets/images/timeline-bar.png';
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
        style={{
          right: '0%',
          top: '42%',
          width: '53.5%',
          height: 'auto',
        }}
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

      {/* Play Demo Banner — componentized */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{ top: '42.5%', width: '44.9%', height: '6.9%' }}
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(10,6,2,0.85) 15%, rgba(10,6,2,0.9) 50%, rgba(10,6,2,0.85) 85%, transparent 100%)',
            borderTop: '1px solid rgba(197,148,74,0.4)',
            borderBottom: '1px solid rgba(197,148,74,0.4)',
          }}
        >
          <span
            className="gold-title"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '2.4vw',
              fontWeight: 400,
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}
          >
            PLAY DEMO 15/02, Join us!
          </span>
        </div>
      </div>

      {/* Play Now Button — componentized */}
      <a
        href="#play"
        className="absolute left-1/2 -translate-x-1/2 group flex items-center justify-center"
        style={{ top: '53.7%', width: '32.6%', height: '10%' }}
      >
        <div
          className="w-full h-full flex items-center justify-center group-hover:brightness-125 transition-all"
          style={{
            background: 'linear-gradient(180deg, #2a1f0a 0%, #1a1408 40%, #0d0b06 100%)',
            border: '2px solid #c5944a',
            borderRadius: '6px',
            boxShadow: '0 0 20px rgba(197,148,74,0.3), inset 0 1px 0 rgba(255,220,120,0.15)',
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-[-1px] left-[10%] right-[10%] h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #e5b723, transparent)' }} />
          <div className="absolute bottom-[-1px] left-[10%] right-[10%] h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #e5b723, transparent)' }} />
          <span
            className="gold-title"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.8vw',
              fontWeight: 600,
              letterSpacing: '0.15em',
            }}
          >
            PLAY NOW
          </span>
        </div>
      </a>

      {/* Timeline */}
      <div className="absolute" style={{ left: '32.5%', top: '77%', width: '35%' }}>
        <img src={timelineBar} alt="" className="w-full h-auto pointer-events-none" />
        {/* Phase labels overlaid on timeline */}
        <div className="absolute inset-0 flex items-start justify-between" style={{ paddingTop: '2%', paddingLeft: '3%', paddingRight: '3%' }}>
          <div className="flex flex-col items-center">
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2vw', fontWeight: 600 }}>Phase 1</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8vw' }}>2026/1</span>
          </div>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw', marginTop: '3%' }}>Phase 2</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw', marginTop: '3%' }}>Phase 3</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw', marginTop: '3%' }}>Phase 4</span>
          <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7vw', marginTop: '3%' }}>Beta</span>
          <div className="flex flex-col items-center">
            <span className="text-[#d4c5a0]" style={{ fontFamily: "'Cinzel', serif", fontSize: '1vw', fontWeight: 600 }}>LAUNCH</span>
            <span className="text-[#8a7b5a]" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8vw' }}>2027/2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
