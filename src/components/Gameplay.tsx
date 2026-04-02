import gameplaySectionFull from '../assets/images/gameplay-section-full.png';

export default function Gameplay() {
  return (
    <section className="relative w-full">
      <img
        src={gameplaySectionFull}
        alt="Gameplay - Craft, Lifeskills, PvP, Global"
        className="w-full h-auto block"
      />
    </section>
  );
}
