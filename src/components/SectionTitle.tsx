interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center" style={{ gap: '0.5vw' }}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c5944a] to-transparent" style={{ width: '12vw' }} />
      <h2
        className="gold-title"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '2.2vw',
          fontWeight: 400,
          textAlign: 'center',
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </h2>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c5944a] to-transparent" style={{ width: '12vw' }} />
    </div>
  );
}
