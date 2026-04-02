import loreGods from '../assets/images/lore-gods.png';
import loreArrow from '../assets/images/lore-arrow.png';

const loreText = [
  'Antes que o tempo tivesse nome e o universo conhecesse forma, havia apenas o Vazio \u2014 e nele, solit\u00e1rio, vagava o Primeiro.',
  'De sua vastid\u00e3o silenciosa nasceu o desejo de cria\u00e7\u00e3o. E com o eco desse desejo, o Primeiro moldou cinco entidades divinas:',
  'Zalthor, Thyros, Vazrath, Myrnos e Yero \u2014 os Deuses Primevos, pilares do que viria a ser tudo o que \u00e9 e o que permanece oculto.',
];

function GoldOrnamentLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-[2px] bg-gradient-to-r from-transparent via-[#e4b623] to-transparent ${className}`} />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <GoldOrnamentLine className="w-[300px] opacity-60" />
      <h2 className="gold-title section-title tracking-widest">{children}</h2>
      <GoldOrnamentLine className="w-[300px] opacity-60" />
    </div>
  );
}

export default function Lore() {
  return (
    <section className="relative w-full h-[1080px] bg-black overflow-hidden">
      {/* Background: black base + gods image */}
      <div className="absolute inset-0">
        <img
          src={loreGods}
          alt="The five primeval gods"
          className="absolute inset-0 w-full h-[720px] object-cover top-[233px]"
        />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-black to-transparent z-[1]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-[1]" />
        {/* Side vignette */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center h-full">
        {/* Title */}
        <div className="pt-[62px] relative z-10">
          <SectionTitle>Lore</SectionTitle>
        </div>

        {/* Text box - positioned at bottom center */}
        <div className="absolute bottom-[107px] left-1/2 -translate-x-1/2 w-[492px]">
          {/* Ornamental frame using CSS borders */}
          <div className="relative">
            {/* Top decorative bar */}
            <div className="relative border border-[rgba(253,191,8,0.5)] bg-[#0b1215]/80 rounded-sm overflow-hidden">
              {/* Side accent bar */}
              <div className="absolute right-0 top-0 bottom-0 w-[5px] bg-[#0b1215] border-l border-[rgba(253,191,8,0.5)] rounded-[10px]" />
              <div className="absolute right-[1px] top-0 w-[3px] h-[46px] bg-[#003053] border border-[#84680f] rounded-[10px]" />

              {/* Title tab */}
              <div className="flex justify-center -mt-[18px]">
                <div className="relative bg-[#0b1215] border border-[rgba(253,191,8,0.5)] px-8 py-1 rounded-sm">
                  <p className="gold-title font-['Cinzel',serif] text-[16px] text-center tracking-wide">
                    O Princípio
                  </p>
                </div>
              </div>

              {/* Story text */}
              <div className="px-12 py-4">
                {loreText.map((line, i) => (
                  <p key={i} className="text-[12px] leading-[15.4px] text-[#edca87] text-center font-['Georgia',serif]">
                    {line}
                  </p>
                ))}
              </div>

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-[1.5px] pb-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center w-[8px] h-[8px]">
                    <div className={`w-[5.6px] h-[5.6px] rotate-45 rounded-[0.3px] border-[0.65px] border-[#ffe95e] ${
                      i === 0
                        ? 'bg-[#9a6605] shadow-[0_0_3.8px_#fcff98]'
                        : 'bg-[#c5ae7d] shadow-[0_0.3px_0.65px_black]'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button className="absolute -left-16 top-1/2 -translate-y-1/2">
              <img src={loreArrow} alt="Previous" className="w-[52px] h-[50px] object-contain rotate-180 opacity-70 hover:opacity-100 transition" />
            </button>
            <button className="absolute -right-16 top-1/2 -translate-y-1/2">
              <img src={loreArrow} alt="Next" className="w-[52px] h-[50px] object-contain opacity-70 hover:opacity-100 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
