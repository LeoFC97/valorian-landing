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

      {/* Left arrow — tall click zone on left edge */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-0 top-[30%] h-[40%] w-[8%] z-50 cursor-pointer flex items-center justify-center group"
      >
        <span className="text-[2vw] text-[#c5944a] opacity-0 group-hover:opacity-80 transition-opacity select-none">&#10094;</span>
      </button>

      {/* Right arrow — tall click zone on right edge */}
      <button
        type="button"
        onClick={next}
        className="absolute right-0 top-[30%] h-[40%] w-[8%] z-50 cursor-pointer flex items-center justify-center group"
      >
        <span className="text-[2vw] text-[#c5944a] opacity-0 group-hover:opacity-80 transition-opacity select-none">&#10095;</span>
      </button>

      {/* Dot indicators at bottom */}
      <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 z-50 flex gap-[0.5vw]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="cursor-pointer rounded-full transition-all"
            style={{
              width: '0.5vw',
              height: '0.5vw',
              backgroundColor: i === active ? '#c5944a' : '#4a3a20',
              boxShadow: i === active ? '0 0 6px rgba(197,148,74,0.6)' : 'none',
            }}
          />
        ))}
      </div>
    </section>
  );
}
