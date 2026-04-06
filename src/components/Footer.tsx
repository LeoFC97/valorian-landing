import logoWithOrnament from '../assets/images/logo-with-ornament.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Lore', href: '#lore' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Classes', href: '#classes' },
  { label: 'Team', href: '#team' },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{
        background: 'linear-gradient(to bottom, #000 0%, #060a10 50%, #030508 100%)',
        padding: '3.5vw 17vw',
      }}
    >
      <div className="flex justify-between items-start">
        {/* Left: Logo + description + socials */}
        <div className="flex flex-col" style={{ width: '15vw', gap: '1.5vw' }}>
          <img src={logoWithOrnament} alt="Valorian Online" style={{ width: '6.8vw', alignSelf: 'center' }} />
          <p
            className="text-[#edca87]"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: '0.76vw',
              lineHeight: 1.45,
              textAlign: 'justify',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          {/* Social icons */}
          <div className="flex items-center justify-center" style={{ gap: '1.2vw' }}>
            <a href="#youtube" className="text-[#edca87] hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.7vw] h-[1.7vw]">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
            <a href="#discord" className="text-[#edca87] hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.7vw] h-[1.7vw]">
                <path d="M20.3 4.4A19.5 19.5 0 0015.5 3a14 14 0 00-.6 1.3 18 18 0 00-5.8 0A14 14 0 008.5 3a19.5 19.5 0 00-4.8 1.4A20.4 20.4 0 00.1 18.6a19.7 19.7 0 006 3 14.3 14.3 0 001.2-2 12.8 12.8 0 01-2-.9l.5-.4a14 14 0 0012.4 0l.5.4a12.8 12.8 0 01-2 .9 14.3 14.3 0 001.2 2 19.7 19.7 0 006-3A20.4 20.4 0 0020.3 4.4zM8 15.8c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3zm8 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3z" />
              </svg>
            </a>
            <a href="#instagram" className="text-[#edca87] hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.7vw] h-[1.7vw]">
                <path d="M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5a4.6 4.6 0 011.7 1.1 4.6 4.6 0 011.1 1.7c.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3a4.6 4.6 0 01-1.1 1.7 4.6 4.6 0 01-1.7 1.1c-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5a4.6 4.6 0 01-1.7-1.1 4.6 4.6 0 01-1.1-1.7c-.3-.6-.4-1.3-.5-2.3C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c.1-1 .2-1.7.5-2.3a4.6 4.6 0 011.1-1.7A4.6 4.6 0 015.6 2.8c.6-.3 1.3-.4 2.3-.5C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3a3 3 0 00-1.1.7 3 3 0 00-.7 1.1c-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7a3 3 0 00.7 1.1 3 3 0 001.1.7c.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3a3 3 0 001.1-.7 3 3 0 00.7-1.1c.1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a3 3 0 00-.7-1.1 3 3 0 00-1.1-.7c-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.2 3.2 0 100 6.3 3.2 3.2 0 000-6.3zm5.1-2.4a1.2 1.2 0 110 2.3 1.2 1.2 0 010-2.3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Nav links */}
        <div className="flex flex-col" style={{ gap: '0.8vw' }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#d4c5a0] hover:text-white transition-colors"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.18vw',
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'right',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
