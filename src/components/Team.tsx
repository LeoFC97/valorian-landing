const leaders = [
  { name: 'Matheus Sodre', role: 'CEO & Founder' },
  { name: 'Jorge Sampaio', role: 'Creative Director' },
];

const members = [
  { name: 'Roberto Vasco', role: 'Art Director' },
  { name: 'Andre Luiz', role: 'Lead Developer' },
  { name: 'Adelaide Silva', role: 'Game Designer' },
  { name: 'Aguiar Nobrega', role: 'Administrator' },
  { name: 'Patricia Dias', role: 'UI/UX Designer' },
  { name: 'Julia Morais', role: 'Community Manager' },
  { name: 'Cristian Por', role: 'Backend Developer' },
  { name: 'Marcus Campos', role: 'Sound Designer' },
];

const membersRow3 = [
  { name: 'Marcos Vinícius', role: 'Artist' },
  { name: 'Marcelo Vinícius', role: 'Level Designer' },
  { name: 'Lázaro Renê', role: 'Programmer' },
  { name: 'Benjamin Borges', role: 'Game Designer' },
  { name: 'Natan Ganum', role: 'Streamer / Marketing' },
];

function Avatar({ size, name }: { size: 'lg' | 'sm'; name: string }) {
  const px = size === 'lg' ? 'w-[7vw] h-[7vw]' : 'w-[5vw] h-[5vw]';
  const initials = name.split(' ').map(w => w[0]).join('');
  return (
    <div
      className={`${px} rounded-full border-2 border-[#c5944a] bg-[#1a1408] flex items-center justify-center shrink-0`}
      style={{ boxShadow: '0 0 12px rgba(197,148,74,0.3)' }}
    >
      <span className="text-[#c5ae7d] font-bold" style={{ fontFamily: 'Cinzel, serif', fontSize: size === 'lg' ? '1.6vw' : '1.1vw' }}>
        {initials}
      </span>
    </div>
  );
}

function MemberCard({ name, role, size = 'sm' }: { name: string; role: string; size?: 'lg' | 'sm' }) {
  return (
    <div className="flex flex-col items-center gap-[0.5vw]">
      <Avatar size={size} name={name} />
      <div className="text-center">
        <p
          className="gold-title"
          style={{ fontFamily: 'Cinzel, serif', fontSize: size === 'lg' ? '1.1vw' : '0.85vw', fontWeight: 700 }}
        >
          {name}
        </p>
        <p className="text-[#a89060]" style={{ fontFamily: 'Georgia, serif', fontSize: size === 'lg' ? '0.8vw' : '0.65vw' }}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 900' }}>
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(80,50,10,0.25) 0%, transparent 60%), linear-gradient(to bottom, #000 0%, #0a0600 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center h-full" style={{ paddingTop: '4%' }}>
        {/* Title */}
        <div className="flex flex-col items-center gap-[0.3vw]">
          <div className="w-[8vw] h-[1px] bg-gradient-to-r from-transparent via-[#c5944a] to-transparent" />
          <h2
            className="gold-title section-title"
            style={{ fontSize: '2.2vw' }}
          >
            TEAM
          </h2>
          <div className="w-[8vw] h-[1px] bg-gradient-to-r from-transparent via-[#c5944a] to-transparent" />
        </div>

        {/* Leaders row */}
        <div className="flex justify-center gap-[6vw]" style={{ marginTop: '4%' }}>
          {leaders.map(l => (
            <MemberCard key={l.name} name={l.name} role={l.role} size="lg" />
          ))}
        </div>

        {/* Row 1 */}
        <div className="flex justify-center gap-[4vw]" style={{ marginTop: '3.5%' }}>
          {members.slice(0, 4).map(m => (
            <MemberCard key={m.name} name={m.name} role={m.role} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-[4vw]" style={{ marginTop: '3%' }}>
          {members.slice(4).map(m => (
            <MemberCard key={m.name} name={m.name} role={m.role} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-[4vw]" style={{ marginTop: '3%' }}>
          {membersRow3.map(m => (
            <MemberCard key={m.name} name={m.name} role={m.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
