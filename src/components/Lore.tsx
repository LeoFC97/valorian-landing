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
        className="absolute cursor-pointer hover:bg-white/5 transition rounded z-50"
        style={{ left: '30.4%', top: '77.4%', width: '3.6%', height: '4.6%' }}
        aria-label="Previous lore"
      />

      {/* Right arrow button */}
      <button
        type="button"
        onClick={next}
        className="absolute cursor-pointer hover:bg-white/5 transition rounded z-50"
        style={{ left: '69.6%', top: '77.4%', width: '3.6%', height: '4.6%' }}
        aria-label="Next lore"
      />

      {/* Dot navigation */}
      <div
        className="absolute z-50 flex items-center"
        style={{ left: '47%', top: '86.5%', gap: '0.28%' }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="cursor-pointer rounded-full z-50"
            style={{ width: '0.4vw', height: '0.4vw' }}
            aria-label={`Go to lore ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
