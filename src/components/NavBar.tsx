import navOrnamentFrame from '../assets/images/nav-ornament-frame.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Lore', href: '#lore' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Classes', href: '#classes' },
  { label: 'Team', href: '#team' },
  { label: 'Founder', href: '#founder' },
];

export default function NavBar() {
  return (
    <nav className="relative flex items-center justify-center" style={{ height: '4.2vw' }}>
      {/* Ornamental frame behind links */}
      <img
        src={navOrnamentFrame}
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      {/* Dark background behind text — Figma Vector 2 (#00070bcc) */}
      <div
        className="absolute z-[5]"
        style={{
          width: '85.8%',
          height: '70.7%',
          top: '7.4%',
          left: '7.1%',
          background: 'rgba(0,7,11,0.8)',
        }}
      />
      {/* Actual nav links */}
      <div className="relative z-10 flex items-center" style={{ gap: '2.5vw' }}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-white hover:text-[#f0d080] transition-colors"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.18vw',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
