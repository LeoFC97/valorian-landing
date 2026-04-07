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

      {/* Gold 4-pointed star navigation buttons */}
      <button
        type="button"
        onClick={prev}
        className="absolute z-50 cursor-pointer group"
        style={{ left: '30.3%', top: '75.5%', transform: 'translate(-50%, -50%)' }}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 40 40" className="w-[3vw] h-[3vw] drop-shadow-[0_0_8px_rgba(197,148,74,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(197,148,74,0.9)] group-hover:scale-110 group-active:scale-95 transition-all">
          <defs>
            <linearGradient id="starGoldL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c45a" />
              <stop offset="50%" stopColor="#c5944a" />
              <stop offset="100%" stopColor="#a07030" />
            </linearGradient>
          </defs>
          <path d="M20 2 L26 14 L38 20 L26 26 L20 38 L14 26 L2 20 L14 14 Z" fill="url(#starGoldL)" stroke="#f0d080" strokeWidth="0.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute z-50 cursor-pointer group"
        style={{ left: '69.7%', top: '75.5%', transform: 'translate(-50%, -50%)' }}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 40 40" className="w-[3vw] h-[3vw] drop-shadow-[0_0_8px_rgba(197,148,74,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(197,148,74,0.9)] group-hover:scale-110 group-active:scale-95 transition-all">
          <defs>
            <linearGradient id="starGoldR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c45a" />
              <stop offset="50%" stopColor="#c5944a" />
              <stop offset="100%" stopColor="#a07030" />
            </linearGradient>
          </defs>
          <path d="M20 2 L26 14 L38 20 L26 26 L20 38 L14 26 L2 20 L14 14 Z" fill="url(#starGoldR)" stroke="#f0d080" strokeWidth="0.5" />
        </svg>
      </button>

      {/* Diamond dot indicators */}
      <div className="absolute z-50 left-1/2 -translate-x-1/2 flex items-center" style={{ top: '82%', gap: '0.4vw' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="cursor-pointer transition-all hover:scale-125"
            style={{ width: '1vw', height: '1vw' }}
          >
            <svg viewBox="0 0 16 16" className="w-full h-full">
              <rect
                x="3" y="3" width="10" height="10"
                transform="rotate(45 8 8)"
                fill={i === active ? '#c5944a' : '#5a4a30'}
                stroke={i === active ? '#f0d080' : 'none'}
                strokeWidth="0.5"
              />
            </svg>
          </button>
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
