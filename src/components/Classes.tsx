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
  { id: 'hunter', label: 'Hunter', category: 'Archery', image: classHunter },
  { id: 'beastmaster', label: 'Beastmaster', category: 'Archery', image: classBeastmaster },
  { id: 'paladin', label: 'Paladin', category: 'Knight', image: classPaladin },
  { id: 'templar', label: 'Templar', category: 'Knight', image: classTemplar },
  { id: 'herbalist', label: 'Herbalist', category: 'Druid', image: classHerbalist },
  { id: 'feral', label: 'Feral', category: 'Druid', image: classFeral },
  { id: 'arcticus', label: 'Arcticus', category: 'Mage', image: classArcticus },
  { id: 'pyromancer', label: 'Pyromancer', category: 'Mage', image: classPyromancer },
];

const categories = ['Archery', 'Knight', 'Druid', 'Mage'];

export default function Classes() {
  const [activeClass, setActiveClass] = useState('hunter');

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1080' }}>
      {/* All class images stacked */}
      {classes.map(cls => (
        <img
          key={cls.id}
          src={cls.image}
          alt={cls.label}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
          style={{ opacity: cls.id === activeClass ? 1 : 0 }}
        />
      ))}

      {/* Class selector — invisible click targets over baked-in icons */}
      <div className="absolute top-[75.5%] left-1/2 -translate-x-1/2 z-50 flex" style={{ gap: '2.9vw' }}>
        {categories.map(cat => {
          const specs = classes.filter(c => c.category === cat);
          return (
            <div key={cat} className="flex flex-col items-center" style={{ gap: '1.7vw' }}>
              {/* Invisible spacer for category label */}
              <span className="text-transparent text-[1.2vw] select-none pointer-events-none">{cat}</span>
              <div className="flex">
                {specs.map(spec => (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setActiveClass(spec.id)}
                    className="w-[5.3vw] h-[5.3vw] cursor-pointer transition-all hover:scale-105"
                    style={{ opacity: 0 }}
                    title={spec.label}
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
