import { useState } from 'react';
import SectionTitle from './SectionTitle';

import bgHunter from '../assets/images/class-bg-hunter.png';
import bgBeastmaster from '../assets/images/class-bg-beastmaster.png';
import bgPaladin from '../assets/images/class-bg-paladin.png';
import bgTemplar from '../assets/images/class-bg-templar.png';
import bgHerbalist from '../assets/images/class-bg-herbalist.png';
import bgFeral from '../assets/images/class-bg-feral.png';
import bgArcticus from '../assets/images/class-bg-arcticus.png';
import bgPyromancer from '../assets/images/class-bg-pyromancer.png';

import sceneHunter from '../assets/images/class-scene-hunter.png';
import sceneBeastmaster from '../assets/images/class-scene-beastmaster.png';
import scenePaladin from '../assets/images/class-scene-paladin.png';
import sceneTemplar from '../assets/images/class-scene-templar.png';
import sceneHerbalist from '../assets/images/class-scene-herbalist.png';
import sceneFeral from '../assets/images/class-scene-feral.png';
import sceneArcticus from '../assets/images/class-scene-arcticus.png';
import scenePyromancer from '../assets/images/class-scene-pyromancer.png';

import iconHunter from '../assets/images/icon-hunter.png';
import iconBeastmaster from '../assets/images/icon-beastmaster.png';
import iconPaladin from '../assets/images/icon-paladin.png';
import iconTemplar from '../assets/images/icon-templar.png';
import iconHerbalist from '../assets/images/icon-herbalist.png';
import iconFeral from '../assets/images/icon-feral.png';
import iconArcticus from '../assets/images/icon-arcticus.png';
import iconPyromancer from '../assets/images/icon-pyromancer.png';

interface ClassInfo {
  id: string;
  name: string;
  category: string;
  bg: string;
  scene: string;
  icon: string;
  description: string;
  stats: { dps: number; mobility: number; burst: number; utility: number; sustain: number };
}

const classData: ClassInfo[] = [
  {
    id: 'hunter', name: 'Hunter', category: 'Archery', bg: bgHunter, scene: sceneHunter, icon: iconHunter,
    description: 'Masters of ranged combat, Hunters strike with deadly precision from afar. Their arrows find weakness in any armor, and their traps control the battlefield.',
    stats: { dps: 80, mobility: 70, burst: 60, utility: 40, sustain: 30 },
  },
  {
    id: 'beastmaster', name: 'Beastmaster', category: 'Archery', bg: bgBeastmaster, scene: sceneBeastmaster, icon: iconBeastmaster,
    description: 'Beastmasters forge unbreakable bonds with wild creatures. Together with their companions, they overwhelm foes with coordinated strikes.',
    stats: { dps: 60, mobility: 60, burst: 40, utility: 70, sustain: 50 },
  },
  {
    id: 'paladin', name: 'Paladin', category: 'Knight', bg: bgPaladin, scene: scenePaladin, icon: iconPaladin,
    description: 'Holy warriors clad in blessed armor, Paladins stand as bulwarks against darkness. Their divine power heals allies and smites the wicked.',
    stats: { dps: 50, mobility: 30, burst: 40, utility: 60, sustain: 90 },
  },
  {
    id: 'templar', name: 'Templar', category: 'Knight', bg: bgTemplar, scene: sceneTemplar, icon: iconTemplar,
    description: 'Templars wield faith as both sword and shield. Their righteous fury devastates enemies while divine blessings protect their comrades.',
    stats: { dps: 70, mobility: 30, burst: 70, utility: 50, sustain: 60 },
  },
  {
    id: 'herbalist', name: 'Herbalist', category: 'Druid', bg: bgHerbalist, scene: sceneHerbalist, icon: iconHerbalist,
    description: 'Herbalists channel the essence of nature to mend wounds and cure ailments. Their knowledge of ancient flora makes them invaluable healers.',
    stats: { dps: 20, mobility: 50, burst: 10, utility: 90, sustain: 80 },
  },
  {
    id: 'feral', name: 'Feral', category: 'Druid', bg: bgFeral, scene: sceneFeral, icon: iconFeral,
    description: 'Ferals embrace the primal rage of nature, shapeshifting into savage beasts. In combat, their ferocity is unmatched.',
    stats: { dps: 75, mobility: 80, burst: 70, utility: 20, sustain: 40 },
  },
  {
    id: 'arcticus', name: 'Arcticus', category: 'Mage', bg: bgArcticus, scene: sceneArcticus, icon: iconArcticus,
    description: 'Arcticus mages command the frozen elements, encasing foes in ice and unleashing blizzards that slow and shatter all resistance.',
    stats: { dps: 60, mobility: 40, burst: 80, utility: 60, sustain: 30 },
  },
  {
    id: 'pyromancer', name: 'Pyromancer', category: 'Mage', bg: bgPyromancer, scene: scenePyromancer, icon: iconPyromancer,
    description: 'Pyromancers unleash devastating fire magic, engulfing the battlefield in flames. Their raw destructive power is unrivaled among all classes.',
    stats: { dps: 90, mobility: 40, burst: 95, utility: 20, sustain: 20 },
  },
];

const categories = ['Archery', 'Knight', 'Druid', 'Mage'];

/* ---------- Stats Pentagon ---------- */
function StatsPentagon({ stats }: { stats: ClassInfo['stats'] }) {
  const labels = ['DPS', 'Mobility', 'Burst', 'Utility', 'Sustain'] as const;
  const values = [stats.dps, stats.mobility, stats.burst, stats.utility, stats.sustain];
  const cx = 100, cy = 100, R = 70;

  const angle = (i: number) => (Math.PI / 2 + (2 * Math.PI * i) / 5) * -1;
  const px = (i: number, r: number) => cx + r * Math.cos(angle(i));
  const py = (i: number, r: number) => cy - r * Math.sin(angle(i));

  const ringPoints = (r: number) =>
    Array.from({ length: 5 }, (_, i) => `${px(i, r)},${py(i, r)}`).join(' ');

  const statPoints = values
    .map((v, i) => `${px(i, (v / 100) * R)},${py(i, (v / 100) * R)}`)
    .join(' ');

  const labelOffset = R + 24;

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Grid rings */}
      {[0.2, 0.4, 0.6, 0.8, 1].map(s => (
        <polygon
          key={s}
          points={ringPoints(R * s)}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
        />
      ))}
      {/* Axis lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <line key={i} x1={cx} y1={cy} x2={px(i, R)} y2={py(i, R)} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      ))}
      {/* Filled stat area */}
      <polygon points={statPoints} fill="rgba(229,183,35,0.35)" stroke="#e5b723" strokeWidth="1.5" />
      {/* Stat dots */}
      {values.map((v, i) => (
        <circle key={i} cx={px(i, (v / 100) * R)} cy={py(i, (v / 100) * R)} r="3" fill="#e5b723" />
      ))}
      {/* Labels */}
      {labels.map((label, i) => (
        <text
          key={label}
          x={px(i, labelOffset)}
          y={py(i, labelOffset)}
          fill="#ffffff"
          fontSize="10"
          fontFamily="Cinzel, serif"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

/* ---------- Main Component ---------- */
export default function Classes() {
  const [activeId, setActiveId] = useState('hunter');
  const active = classData.find(c => c.id === activeId)!;

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1080' }}>
      {/* Scene background + character art layered */}
      {classData.map(cls => (
        <div
          key={cls.id}
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: cls.id === activeId ? 1 : 0 }}
        >
          {/* Scene backdrop */}
          <img
            src={cls.scene}
            alt=""
            className="absolute w-full object-cover"
            style={{ top: '13%', left: 0, height: '74%' }}
          />
          {/* Character overlay */}
          <img
            src={cls.bg}
            alt={cls.name}
            className="absolute w-full object-cover"
            style={{ top: '13%', left: 0, height: '74%' }}
          />
        </div>
      ))}

      {/* Dark vignette overlays for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 20%, transparent 55%, rgba(0,0,0,0.85) 75%, #000 100%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 40%)',
      }} />

      {/* Section title */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: '5%' }}>
        <SectionTitle title="8 CHARACTER CLASSES" />
      </div>

      {/* Stats Pentagon */}
      <div className="absolute z-10" style={{ left: '7%', top: '25%', width: '14vw', height: '14vw' }}>
        <StatsPentagon stats={active.stats} />
      </div>

      {/* Class name */}
      <h3
        className="absolute z-10 gold-title"
        style={{
          left: '6%',
          top: '52%',
          fontFamily: "'Cinzel', serif",
          fontSize: '3.8vw',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}
      >
        {active.name}
      </h3>

      {/* Description box */}
      <div
        className="absolute z-10"
        style={{
          left: '6.5%',
          top: '59%',
          width: '30%',
        }}
      >
        <div
          className="relative px-[1.2vw] py-[1vw]"
          style={{
            background: 'linear-gradient(135deg, rgba(8,12,22,0.78), rgba(12,18,30,0.82))',
            borderRadius: '2px',
          }}
        >
          {/* Top gold line with diamond on left */}
          <div className="absolute top-0 left-0 right-0 flex items-center">
            <svg viewBox="0 0 12 12" style={{ width: '0.6vw', height: '0.6vw', marginTop: '-0.3vw', flexShrink: 0 }}>
              <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)" fill="#c5944a" />
            </svg>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #c5944a, transparent)' }} />
          </div>
          {/* Bottom gold line with diamond on right */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, #c5944a, transparent)' }} />
            <svg viewBox="0 0 12 12" style={{ width: '0.6vw', height: '0.6vw', marginBottom: '-0.3vw', flexShrink: 0 }}>
              <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)" fill="#c5944a" />
            </svg>
          </div>
          <p
            style={{
              fontFamily: "'Fontin', 'Georgia', serif",
              fontSize: '0.85vw',
              lineHeight: 1.5,
              color: '#edca87',
              textAlign: 'justify',
            }}
          >
            {active.description}
          </p>
        </div>
      </div>

      {/* Class selector bar */}
      <div
        className="absolute z-10 left-1/2 -translate-x-1/2 flex items-start justify-center"
        style={{ top: '76%', gap: '3vw' }}
      >
        {categories.map(cat => {
          const specs = classData.filter(c => c.category === cat);
          return (
            <div key={cat} className="flex flex-col items-center" style={{ gap: '0.6vw' }}>
              <span
                className="text-[#d4c5a0]"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.2vw',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {cat}
              </span>
              <div className="flex" style={{ gap: '0.15vw' }}>
                {specs.map(cls => (
                  <button
                    key={cls.id}
                    type="button"
                    onClick={() => setActiveId(cls.id)}
                    className="cursor-pointer transition-all hover:scale-110 hover:brightness-125"
                    style={{
                      width: '5.2vw',
                      height: '5.2vw',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      filter: cls.id === activeId ? 'brightness(1.2)' : 'brightness(0.7)',
                    }}
                  >
                    <img src={cls.icon} alt={cls.name} className="w-full h-full object-cover" />
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
