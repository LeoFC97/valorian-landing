import footerSectionFull from '../assets/images/footer-section-full.png';

export default function Footer() {
  return (
    <footer id="founder" className="relative w-full">
      <img src={footerSectionFull} alt="Valorian Online" className="w-full h-auto block" />

      {/* Nav links overlay on right side of footer */}
      <div className="absolute top-[20%] right-[28%] flex flex-col gap-[8%]" style={{ width: '8%', height: '70%' }}>
        {["home", "lore", "gameplay", "classes", "team", "founder"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex-1 cursor-pointer hover:bg-white/5 transition rounded"
          />
        ))}
      </div>
    </footer>
  );
}
