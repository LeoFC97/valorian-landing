import { useState } from 'react';
import SectionTitle from './SectionTitle';

import classHunter from '../assets/images/class-hunter.png';
import classBeastmaster from '../assets/images/class-beastmaster.png';
import classPaladin from '../assets/images/class-paladin.png';
import classTemplar from '../assets/images/class-templar.png';
import classHerbalist from '../assets/images/class-herbalist.png';
import classFeral from '../assets/images/class-feral.png';
import classArcticus from '../assets/images/class-arcticus.png';
import classPyromancer from '../assets/images/class-pyromancer.png';

import iconArchery from '../assets/images/icon-archery.png';
import iconEye from '../assets/images/icon-eye.png';
import iconHammer from '../assets/images/icon-hammer.png';
import iconShield from '../assets/images/icon-shield.png';
import iconDruidStaff from '../assets/images/icon-druid-staff.png';
import iconBear from '../assets/images/icon-bear.png';
import iconFrost from '../assets/images/icon-frost.png';
import iconFire from '../assets/images/icon-fire.png';

const classes = [
  { id: 'hunter', label: 'Hunter', category: 'Archery', image: classHunter, icon: iconArchery },
  { id: 'beastmaster', label: 'Beastmaster', category: 'Archery', image: classBeastmaster, icon: iconEye },
  { id: 'paladin', label: 'Paladin', category: 'Knight', image: classPaladin, icon: iconHammer },
  { id: 'templar', label: 'Templar', category: 'Knight', image: classTemplar, icon: iconShield },
  { id: 'herbalist', label: 'Herbalist', category: 'Druid', image: classHerbalist, icon: iconDruidStaff },
  { id: 'feral', label: 'Feral', category: 'Druid', image: classFeral, icon: iconBear },
  { id: 'arcticus', label: 'Arcticus', category: 'Mage', image: classArcticus, icon: iconFrost },
  { id: 'pyromancer', label: 'Pyromancer', category: 'Mage', image: classPyromancer, icon: iconFire },
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

      {/* Title overlay */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-20">
        <SectionTitle title="8 CHARACTER CLASSES" />
      </div>

      {/* Class selector — real buttons with icons and labels */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-50 flex" style={{ gap: '2.5vw' }}>
        {categories.map(cat => {
          const specs = classes.filter(c => c.category === cat);
          return (
            <div key={cat} className="flex flex-col items-center" style={{ gap: '0.4vw' }}>
              <span
                className="gold-title"
                style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2vw', fontWeight: 400 }}
              >
                {cat}
              </span>
              <div className="flex" style={{ gap: '0.3vw' }}>
                {specs.map(spec => (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setActiveClass(spec.id)}
                    className={`rounded-lg cursor-pointer transition-all flex items-center justify-center ${
                      spec.id === activeClass
                        ? 'scale-110 ring-2 ring-[#c5944a] shadow-[0_0_15px_rgba(214,181,100,0.5)]'
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{
                      width: '5.3vw',
                      height: '5.3vw',
                      background: spec.id === activeClass
                        ? 'radial-gradient(circle, rgba(197,148,74,0.15) 0%, rgba(0,0,0,0.6) 70%)'
                        : 'rgba(0,0,0,0.4)',
                    }}
                    title={spec.label}
                  >
                    <img
                      src={spec.icon}
                      alt={spec.label}
                      className="pointer-events-none"
                      style={{ width: '75%', height: '75%', objectFit: 'contain' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
