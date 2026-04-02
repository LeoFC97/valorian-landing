import classesPaladinBg from "../assets/images/classes-paladin-bg.png";
import classIconFrame from "../assets/images/class-icon-frame.png";
import iconArchery from "../assets/images/icon-archery.png";
import iconEye from "../assets/images/icon-eye.png";
import iconHammer from "../assets/images/icon-hammer.png";
import iconShield from "../assets/images/icon-shield.png";
import iconDruidStaff from "../assets/images/icon-druid-staff.png";
import iconBear from "../assets/images/icon-bear.png";
import iconFrost from "../assets/images/icon-frost.png";
import iconFire from "../assets/images/icon-fire.png";

const classCategories = [
  { name: "Archery", specs: [{ icon: iconArchery, label: "Archery" }, { icon: iconEye, label: "Tracking" }] },
  { name: "knight", specs: [{ icon: iconHammer, label: "Hammer" }, { icon: iconShield, label: "Shield" }] },
  { name: "Druid", specs: [{ icon: iconDruidStaff, label: "Nature" }, { icon: iconBear, label: "Bear" }] },
  { name: "Mage", specs: [{ icon: iconFrost, label: "Frost" }, { icon: iconFire, label: "Fire" }] },
];

function GoldOrnamentLine({ className = '' }: { className?: string }) {
  return <div className={`h-[2px] bg-gradient-to-r from-transparent via-[#e4b623] to-transparent shadow-[0_0_5px_#ffe95e] ${className}`} />;
}

export default function Classes() {
  return (
    <section className="relative w-full h-[900px] overflow-hidden bg-black">
      {/* Radial vignette */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)'
      }} />

      {/* Title */}
      <div className="relative z-20 flex flex-col items-center pt-8 gap-4">
        <GoldOrnamentLine className="w-[169px]" />
        <h2 className="gold-title section-title tracking-widest">8 CHARACTER CLASSES</h2>
        <GoldOrnamentLine className="w-[169px]" />
      </div>

      {/* Character display */}
      <div className="relative z-10 mx-auto mt-6 flex max-w-[1200px] h-[560px] px-8">
        {/* Left: Stats + Name + Description */}
        <div className="relative z-20 flex flex-col pt-12 w-[450px] shrink-0">
          {/* Pentagon stats */}
          <div className="relative w-[200px] h-[200px] mb-4 ml-8">
            {/* SVG Pentagon */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer pentagon (outline) */}
              <polygon
                points="100,10 190,70 165,170 35,170 10,70"
                fill="none"
                stroke="rgba(228,182,35,0.3)"
                strokeWidth="1"
              />
              {/* Inner pentagon (filled - stats) */}
              <polygon
                points="100,40 155,75 140,140 60,140 45,75"
                fill="rgba(228,182,35,0.15)"
                stroke="rgba(228,182,35,0.6)"
                strokeWidth="1.5"
              />
            </svg>
            {/* Labels */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[12.5px] text-white font-['Cinzel',serif]">DPS</span>
            <span className="absolute top-[25%] -right-8 text-[12.5px] text-white font-['Cinzel',serif]">Burst</span>
            <span className="absolute bottom-[2%] -right-4 text-[12.5px] text-white font-['Cinzel',serif]">Mobility</span>
            <span className="absolute bottom-[2%] -left-4 text-[12.5px] text-white font-['Cinzel',serif]">Utility</span>
            <span className="absolute top-[25%] -left-10 text-[12.5px] text-white font-['Cinzel',serif]">Sustain</span>
          </div>

          {/* Decorative line */}
          <GoldOrnamentLine className="w-[300px] mb-1 opacity-40" />

          {/* Hunter title */}
          <h3
            className="gold-title-dark font-['Cinzel',serif] text-[54px] leading-none tracking-wide"
            style={{ textShadow: '0 4px 4px black' }}
          >
            Hunter
          </h3>

          {/* Decorative lines */}
          <GoldOrnamentLine className="w-[300px] mt-1 mb-3 opacity-40" />

          {/* Description */}
          <div
            className="px-5 py-3 max-w-[393px]"
            style={{
              background: 'linear-gradient(90deg, rgba(27,33,55,0) 0%, rgba(27,33,55,0.5) 5%, rgba(27,33,55,0.5) 95%, rgba(27,33,55,0) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <p className="text-[12px] leading-[16px] text-[#edca87] text-justify font-['Georgia',serif]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Right: Character artwork */}
        <div className="absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none overflow-hidden">
          <img
            src={classesPaladinBg}
            alt="Hunter"
            className="absolute right-0 top-0 h-full w-auto object-contain"
          />
          {/* Fade edges */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(0,0,0,0.9) 80%)'
          }} />
        </div>
      </div>

      {/* Bottom class selector */}
      <div className="relative z-20 mx-auto flex max-w-[800px] items-start justify-center gap-[42px] mt-2">
        {classCategories.map((cls) => (
          <div key={cls.name} className="flex flex-col items-center gap-1 w-[152px]">
            <span className="gold-title font-['Cinzel',serif] text-[17.8px] tracking-wider">
              {cls.name}
            </span>
            <div className="flex items-center">
              {cls.specs.map((spec) => (
                <button key={spec.label} className="relative flex items-center justify-center w-[76px] h-[76px] cursor-pointer group">
                  <img src={classIconFrame} alt="" className="absolute inset-0 w-full h-full object-cover shadow-[0_0_10.7px_#d6b564] group-hover:brightness-125 transition" />
                  <img src={spec.icon} alt={spec.label} className="relative w-[61px] h-[61px] object-contain" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
