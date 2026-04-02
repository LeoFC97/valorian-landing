import { useState } from 'react';

import classHunter from '../assets/images/class-hunter.png';
import classBeastmaster from '../assets/images/class-beastmaster.png';
import classPaladin from '../assets/images/class-paladin.png';
import classTemplar from '../assets/images/class-templar.png';
import classHerbalist from '../assets/images/class-herbalist.png';
import classFeral from '../assets/images/class-feral.png';
import classArcticus from '../assets/images/class-arcticus.png';
import classPyromancer from '../assets/images/class-pyromancer.png';

const classes = [
  { id: 'hunter', name: 'Hunter', category: 'Archery', specIndex: 0, image: classHunter },
  { id: 'beastmaster', name: 'Beastmaster', category: 'Archery', specIndex: 1, image: classBeastmaster },
  { id: 'paladin', name: 'Paladin', category: 'Knight', specIndex: 0, image: classPaladin },
  { id: 'templar', name: 'Templar', category: 'Knight', specIndex: 1, image: classTemplar },
  { id: 'herbalist', name: 'Herbalist', category: 'Druid', specIndex: 0, image: classHerbalist },
  { id: 'feral', name: 'Feral', category: 'Druid', specIndex: 1, image: classFeral },
  { id: 'arcticus', name: 'Arcticus', category: 'Mage', specIndex: 0, image: classArcticus },
  { id: 'pyromancer', name: 'Pyromancer', category: 'Mage', specIndex: 1, image: classPyromancer },
];

// Icon positions relative to the image (bottom of the section)
// 4 categories, 2 specs each, positioned at the bottom
const categories = ['Archery', 'Knight', 'Druid', 'Mage'];

export default function Classes() {
  const [activeClass, setActiveClass] = useState('hunter');

  return (
    <section className="relative w-full bg-black">
      {/* All class images preloaded, only active one visible */}
      <div className="relative w-full">
        {classes.map(cls => (
          <img
            key={cls.id}
            src={cls.image}
            alt={cls.name}
            className={`w-full h-auto block transition-opacity duration-500 ${
              cls.id === activeClass ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
      </div>

      {/* Clickable icon overlays at bottom */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-[3vw]">
        {categories.map(cat => {
          const specs = classes.filter(c => c.category === cat);
          return (
            <div key={cat} className="flex flex-col items-center gap-[0.3vw]">
              {/* Category name */}
              <span className="text-transparent text-[1.2vw] select-none">{cat}</span>
              {/* Spec icons */}
              <div className="flex">
                {specs.map(spec => (
                  <button
                    key={spec.id}
                    onClick={() => setActiveClass(spec.id)}
                    className={`w-[5.3vw] h-[5.3vw] cursor-pointer transition-all ${
                      spec.id === activeClass
                        ? 'brightness-125 scale-110 drop-shadow-[0_0_10px_rgba(214,181,100,0.8)]'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    title={spec.name}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
