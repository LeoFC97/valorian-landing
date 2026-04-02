import heroBgFull from "../assets/images/hero-bg-full.png";

export default function Hero() {
  return (
    <section className="relative w-full">
      <img
        src={heroBgFull}
        alt="Valorian Online"
        className="w-full h-auto block"
      />
    </section>
  );
}
