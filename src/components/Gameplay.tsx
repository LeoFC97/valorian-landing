import SectionTitle from './SectionTitle';

import cardBasics from '../assets/images/gameplay-card-basics.png';
import cardLifeskills from '../assets/images/gameplay-card-lifeskills.png';
import cardPvp from '../assets/images/gameplay-card-pvp.png';
import cardGlobal from '../assets/images/gameplay-card-global.png';

const cards = [
  { image: cardBasics, alt: 'Basics of Game — Craft & Essências' },
  { image: cardLifeskills, alt: 'Lifeskills — Reputação & Coleta' },
  { image: cardPvp, alt: 'Player vs Player — Cerco de Fortalezas & Arena' },
  { image: cardGlobal, alt: 'Global — Front & Política' },
];

export default function Gameplay() {
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000 0%, #050a10 50%, #000 100%)',
        paddingTop: '4vw',
        paddingBottom: '4vw',
        gap: '2vw',
      }}
    >
      <SectionTitle title="GAMEPLAY" />

      {cards.map(card => (
        <img
          key={card.alt}
          src={card.image}
          alt={card.alt}
          className="rounded-lg"
          style={{ width: '62.5%', height: 'auto' }}
        />
      ))}
    </section>
  );
}
