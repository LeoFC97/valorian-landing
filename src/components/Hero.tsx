import heroBgFull from "../assets/images/hero-bg-full.png";

export default function Hero() {
  return (
    <section className="relative w-full">
      <img src={heroBgFull} alt="Valorian Online" className="w-full h-auto block" />

      {/* Nav links overlay - positioned over the nav bar text in the image */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex gap-[1.8%]" style={{ width: '33%' }}>
        {["home", "lore", "gameplay", "classes", "team"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex-1 h-[2.5vw] cursor-pointer hover:bg-white/5 transition rounded"
          />
        ))}
      </div>

      {/* Sign In / Create Account overlay */}
      <div className="absolute top-[1.5%] right-[3%] flex gap-[1%]">
        <a href="#signin" className="w-[6vw] h-[2.5vw] cursor-pointer hover:bg-white/5 transition rounded" />
        <a href="#create" className="w-[9vw] h-[2.5vw] cursor-pointer hover:bg-white/5 transition rounded" />
      </div>

      {/* PLAY NOW button overlay */}
      <a
        href="#play"
        className="absolute top-[53%] left-1/2 -translate-x-1/2 w-[33%] h-[7%] cursor-pointer hover:brightness-110 transition rounded"
      />
    </section>
  );
}
