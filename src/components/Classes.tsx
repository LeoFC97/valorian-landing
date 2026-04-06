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
  { id: 'hunter', category: 'Archery', image: classHunter },
  { id: 'beastmaster', category: 'Archery', image: classBeastmaster },
  { id: 'paladin', category: 'Knight', image: classPaladin },
  { id: 'templar', category: 'Knight', image: classTemplar },
  { id: 'herbalist', category: 'Druid', image: classHerbalist },
  { id: 'feral', category: 'Druid', image: classFeral },
  { id: 'arcticus', category: 'Mage', image: classArcticus },
  { id: 'pyromancer', category: 'Mage', image: classPyromancer },
];

const categories = ['Archery', 'Knight', 'Druid', 'Mage'];

export default function Classes() {
  const [activeClass, setActiveClass] = useState('hunter');

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1080', zIndex: 10 }}>
      {/* All class images stacked absolutely */}
      {classes.map(cls => (
        <img
          key={cls.id}
          src={cls.image}
          alt={cls.id}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
          style={{ opacity: cls.id === activeClass ? 1 : 0 }}
        />
      ))}

      {/* Clickable buttons on top of everything */}
      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-50 flex gap-[3vw]">
        {categories.map(cat => {
          const specs = classes.filter(c => c.category === cat);
          return (
            <div key={cat} className="flex flex-col items-center gap-[0.3vw]">
              <span className="text-transparent text-[1.2vw] select-none pointer-events-none">{cat}</span>
              <div className="flex">
                {specs.map(spec => (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setActiveClass(spec.id)}
                    className={`w-[5.3vw] h-[5.3vw] cursor-pointer transition-all ${
                      spec.id === activeClass
                        ? 'brightness-125 scale-110 drop-shadow-[0_0_10px_rgba(214,181,100,0.8)]'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    title={spec.id}
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
