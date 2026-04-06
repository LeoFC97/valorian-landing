import { useState } from 'react';

import lore1 from '../assets/images/lore-1.png';
import lore2 from '../assets/images/lore-2.png';
import lore3 from '../assets/images/lore-3.png';
import lore4 from '../assets/images/lore-4.png';
import lore5 from '../assets/images/lore-5.png';
import lore6 from '../assets/images/lore-6.png';
import lore7 from '../assets/images/lore-7.png';
import lore8 from '../assets/images/lore-8.png';
import lore9 from '../assets/images/lore-9.png';

const slides = [lore1, lore2, lore3, lore4, lore5, lore6, lore7, lore8, lore9];

export default function Lore() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i - 1 + slides.length) % slides.length);
  const next = () => setActive(i => (i + 1) % slides.length);

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1080' }}>
      {/* All lore images stacked */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Lore ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}

      {/* Left arrow button */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-[2%] top-1/2 -translate-y-1/2 z-50 cursor-pointer
          w-[3.5vw] h-[3.5vw] rounded-full
          bg-black/50 border border-[#c5944a]/60
          flex items-center justify-center
          hover:bg-black/70 hover:border-[#c5944a] hover:scale-110
          active:scale-95 transition-all"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#c5944a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.5vw] h-[1.5vw]">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow button */}
      <button
        type="button"
        onClick={next}
        className="absolute right-[2%] top-1/2 -translate-y-1/2 z-50 cursor-pointer
          w-[3.5vw] h-[3.5vw] rounded-full
          bg-black/50 border border-[#c5944a]/60
          flex items-center justify-center
          hover:bg-black/70 hover:border-[#c5944a] hover:scale-110
          active:scale-95 transition-all"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#c5944a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.5vw] h-[1.5vw]">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-50 flex gap-[0.8vw] bg-black/40 px-[1.2vw] py-[0.6vw] rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="cursor-pointer rounded-full transition-all hover:scale-125"
            style={{
              width: '0.7vw',
              height: '0.7vw',
              backgroundColor: i === active ? '#c5944a' : '#5a4a30',
              boxShadow: i === active ? '0 0 8px rgba(197,148,74,0.7)' : 'none',
              transform: i === active ? 'scale(1.3)' : undefined,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-[3%] right-[3%] z-50 bg-black/50 px-[1vw] py-[0.3vw] rounded-full">
        <span className="text-[#c5944a] text-[0.9vw]" style={{ fontFamily: 'Cinzel, serif' }}>
          {active + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
}
