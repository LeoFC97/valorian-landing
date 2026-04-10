import cardBasics from '../assets/images/gameplay-card-basics.png';
import cardLifeskills from '../assets/images/gameplay-card-lifeskills.png';
import cardPvp from '../assets/images/gameplay-card-pvp.png';
import cardGlobal from '../assets/images/gameplay-card-global.png';
import titleOrnament from '../assets/images/gameplay-title-ornament.png';
import gameplayBg from '../assets/images/gameplay-bg.png';

const cards = [
  { image: cardBasics, title: 'Basics of Game' },
  { image: cardLifeskills, title: 'Lifeskills' },
  { image: cardPvp, title: 'Player vs Player' },
  { image: cardGlobal, title: 'Global' },
];

export default function Gameplay() {
  return (
    <section
      className="relative w-full flex flex-col items-center"
      style={{
        backgroundImage: `url(${gameplayBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        paddingTop: '5.2vw',
        paddingBottom: '5.2vw',
      }}
    >
      {/* Title ornament from Figma */}
      <div style={{ width: '12.1vw', marginBottom: '3.5vw' }}>
        <img
          src={titleOrnament}
          alt="Gameplay"
          className="w-full h-auto pointer-events-none"
        />
      </div>

      {/* Cards — 62.5% width, 4.86vw gap matching Figma 70px/1440 */}
      <div className="flex flex-col items-center" style={{ gap: '4.86vw', width: '100%' }}>
        {cards.map(card => (
          <div key={card.title} style={{ width: '62.5%', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto block pointer-events-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
