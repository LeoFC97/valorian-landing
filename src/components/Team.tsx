import teamBg from '../assets/images/team-bg.png';
// avatar-frame.png is a sprite sheet, using CSS borders instead
import avatarMatheus from '../assets/images/avatar-matheus.png';
import avatarJorge from '../assets/images/avatar-jorge.png';
import avatarRoberto from '../assets/images/avatar-roberto.png';
import avatarAndre from '../assets/images/avatar-andre.png';
import avatarAdelaide from '../assets/images/avatar-adelaide.png';
import avatarAguiar from '../assets/images/avatar-aguiar.png';
import avatarPatricia from '../assets/images/avatar-patricia.png';
import avatarJulia from '../assets/images/avatar-julia.png';
import avatarCristian from '../assets/images/avatar-cristian.png';
import avatarMarcus from '../assets/images/avatar-marcus.png';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const founders: TeamMember[] = [
  { name: 'Matheus Sodre', role: 'CEO, Founder', avatar: avatarMatheus },
  { name: 'Jorge Sampaio', role: 'Creative Director', avatar: avatarJorge },
];

const row2: TeamMember[] = [
  { name: 'Roberto Vasco', role: 'Art Director', avatar: avatarRoberto },
  { name: 'Andre Luiz', role: 'Lead World Designer', avatar: avatarAndre },
  { name: 'Adelaide Silva', role: 'Chief Communication', avatar: avatarAdelaide },
  { name: 'Aguiar Nobrega', role: 'Administrator', avatar: avatarAguiar },
];

const row3: TeamMember[] = [
  { name: 'Patricia Dias', role: 'Illustrator', avatar: avatarPatricia },
  { name: 'Julia Moraes', role: 'Software Developer', avatar: avatarJulia },
  { name: 'Cristian Pior', role: 'Software Developer', avatar: avatarCristian },
  { name: 'Marcus Campos', role: 'Lead UX/UI', avatar: avatarMarcus },
];

function GoldOrnamentLine({ className = '' }: { className?: string }) {
  return <div className={`h-[2px] bg-gradient-to-r from-transparent via-[#e4b623] to-transparent shadow-[0_0_5px_#ffe95e] ${className}`} />;
}

function MemberCard({ member, size }: { member: TeamMember; size: 'lg' | 'md' }) {
  const frameSize = size === 'lg' ? 94 : 71;
  const photoSize = size === 'lg' ? 76 : 57;
  const nameSize = size === 'lg' ? 25 : 17;
  const roleSize = size === 'lg' ? 16 : 11;
  const cardWidth = size === 'lg' ? 205 : 155;

  return (
    <div className="flex flex-col items-center" style={{ width: cardWidth }}>
      {/* Avatar */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: frameSize,
          height: frameSize,
          padding: 3,
          background: 'linear-gradient(to bottom, #e4b623, #84680f)',
          boxShadow: '0 0 10px rgba(228,182,35,0.3)',
        }}
      >
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <p
        className="font-['Cinzel',serif] font-bold tracking-wide text-center mt-2 w-full"
        style={{
          fontSize: nameSize,
          color: '#fcff98',
          textShadow: '0 1px 5px black',
        }}
      >
        {member.name}
      </p>

      {/* Role */}
      <p
        className="font-['Cinzel',serif] tracking-wide text-center w-full"
        style={{
          fontSize: roleSize,
          color: 'rgba(252, 255, 152, 0.5)',
        }}
      >
        {member.role}
      </p>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative w-full h-[900px] bg-black overflow-hidden">
      {/* Background */}
      <img src={teamBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center h-full">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 pt-[90px]">
          <GoldOrnamentLine className="w-[169px]" />
          <h2 className="gold-title section-title tracking-widest">Team</h2>
          <GoldOrnamentLine className="w-[169px]" />
        </div>

        {/* Row 1 - Founders */}
        <div className="flex justify-center gap-4 mt-14">
          {founders.map((m) => (
            <MemberCard key={m.name} member={m} size="lg" />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-[14px] mt-14">
          {row2.map((m) => (
            <MemberCard key={m.name} member={m} size="md" />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-[14px] mt-12">
          {row3.map((m) => (
            <MemberCard key={m.name} member={m} size="md" />
          ))}
        </div>
      </div>
    </section>
  );
}
