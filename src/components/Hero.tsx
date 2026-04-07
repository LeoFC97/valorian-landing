import heroCityBg from '../assets/images/hero-city-bg.png';
import heroPaladin from '../assets/images/hero-paladin-new.png';
import logoWithOrnament from '../assets/images/logo-with-ornament.png';
import playNowBtn from '../assets/images/play-now-btn-new.png';
import playDemoFrame from '../assets/images/play-demo-frame.png';
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

      {/* Play Demo Banner */}
      <div className="absolute" style={{ left: '27.6%', top: '42.5%', width: '44.9%' }}>
        <img src={playDemoFrame} alt="Play Demo 15/02, Join us!" className="w-full h-auto" />
      </div>

      {/* Play Now Button */}
      <a
        href="#play"
        className="absolute group"
        style={{ left: '33.7%', top: '53.7%', width: '32.6%' }}
      >
        <img
          src={playNowBtn}
          alt="Play Now"
          className="w-full h-auto group-hover:brightness-125 transition-all"
        />
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
