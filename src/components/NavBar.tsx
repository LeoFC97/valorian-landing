import navOrnamentFrame from '../assets/images/nav-ornament-frame.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Lore', href: '#lore' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Classes', href: '#classes' },
  { label: 'Team', href: '#team' },
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
      {/* Actual nav links */}
      <div className="relative z-10 flex items-center" style={{ gap: '2.5vw' }}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#d4c5a0] hover:text-white transition-colors"
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
