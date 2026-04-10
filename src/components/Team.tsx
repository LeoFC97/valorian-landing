import teamBg from '../assets/images/team-bg.png';

const members = [
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
        <p className="text-[#a89060]" style={{ fontFamily: "'Fontin', 'Georgia', serif", fontSize: size === 'lg' ? '0.8vw' : '0.65vw' }}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 900' }}>
      {/* Background from Figma */}
      <img
        src={teamBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center h-full" style={{ paddingTop: '6%' }}>
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

        {/* Members in diamond formation — all same size */}
        <div className="relative" style={{ width: '50vw', height: '30vw', marginTop: '3%' }}>
          {/* Top — 2 members */}
          <div className="absolute flex justify-center" style={{ top: '0%', left: '15%', right: '15%', gap: '8vw' }}>
            <MemberCard name={members[0].name} role={members[0].role} />
            <MemberCard name={members[1].name} role={members[1].role} />
          </div>
          {/* Center */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '38%' }}>
            <MemberCard name={members[2].name} role={members[2].role} />
          </div>
          {/* Bottom — 2 members */}
          <div className="absolute flex justify-center" style={{ top: '70%', left: '15%', right: '15%', gap: '8vw' }}>
            <MemberCard name={members[3].name} role={members[3].role} />
            <MemberCard name={members[4].name} role={members[4].role} />
          </div>
        </div>
      </div>
    </section>
  );
}
