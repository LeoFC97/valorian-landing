import sectionTitleOrnament from '../assets/images/section-title-ornament.png';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: '12vw', height: '5vw' }}>
      <img
        src={sectionTitleOrnament}
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      <h2
        className="relative z-10 gold-title"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '2.2vw',
          fontWeight: 400,
          textAlign: 'center',
          letterSpacing: '0.05em',
        }}
      >
        {title}
      </h2>
    </div>
  );
}
