import { useState } from 'react';
import loreBg1 from '../assets/images/lore-bg-1.png';
import loreBg2 from '../assets/images/lore-bg-2.png';
import loreBg3 from '../assets/images/lore-bg-3.png';
import loreBg4 from '../assets/images/lore-bg-4.png';
import loreBg5 from '../assets/images/lore-bg-5.png';
import loreBg6 from '../assets/images/lore-bg-6.png';
import loreBg7 from '../assets/images/lore-bg-7.png';
import loreBg8 from '../assets/images/lore-bg-8.png';
import loreBg9 from '../assets/images/lore-bg-9.png';

import loreTextboxFrame from '../assets/images/lore-textbox-frame.png';
import loreArrowLeft from '../assets/images/lore-arrow-left.png';
import loreArrowRight from '../assets/images/lore-arrow-right.png';
import loreHeader from '../assets/images/lore-header.png';

interface LoreSlide {
  bg: string;
  title: string;
  body: string;
}

const slides: LoreSlide[] = [
  {
    bg: loreBg1,
    title: 'O Princípio',
    body: 'Antes que o tempo tivesse nome e o universo conhecesse forma, havia apenas o Vazio — e nele, solitário, vagava o Primeiro.\nDe sua vastidão silenciosa nasceu o desejo de criação. E com o eco desse desejo, o Primeiro moldou cinco entidades divinas:\nZalthor, Thyros, Vazrath, Myrnos e Yero — os Deuses Primevos, pilares do que viria a ser tudo o que é e o que permanece oculto.',
  },
  {
    bg: loreBg2,
    title: 'A Queda da Harmonia',
    body: 'Mas então vieram os homens. Sob a proteção direta de Yero, os humanos prosperaram... e então corromperam. Insaciáveis e orgulhosos, ousaram profanar as obras divinas. Roubaram a matéria, queimaram florestas, escravizaram feras sagradas e tentaram replicar a magia dos deuses com alquimia e aço. A paz dos Primevos quebrou-se.',
  },
  {
    bg: loreBg3,
    title: 'O Surgimento do Império e do Pacto',
    body: 'Sem orientação divina, os humanos ergueram o Império de Tyrvalor — fortificado por Casas Militares, sustentado por fé e comandado pela Santa Guarda Imperial. Durante séculos, dominaram o continente. Mas a ganância não ficou impune. Do abismo da criação surgiram os Elementais das Sombras: criaturas colossais forjadas da raiva dos Deuses e da corrupção da alma mortal.',
  },
  {
    bg: loreBg4,
    title: 'Thalgrim, o Sanguinário',
    body: 'Senhor do sangue e da guerra.',
  },
  {
    bg: loreBg5,
    title: 'Vespera, a Sombra Eterna',
    body: 'Deusa do medo e da ilusão.',
  },
  {
    bg: loreBg6,
    title: 'Noxis, o Pestilento',
    body: 'Alquimista do veneno e da podridão.',
  },
  {
    bg: loreBg7,
    title: 'Kragath, o Indomável',
    body: 'Fúria encarnada da destruição.',
  },
  {
    bg: loreBg8,
    title: 'A Fundação das Quatro Grandes Casas',
    body: 'Com a união selada, o Império reorganizou sua estrutura militar. Surgiram então as Quatro Grandes Casas, centros de treinamento e doutrina espiritual — uma para cada tradição.',
  },
  {
    bg: loreBg9,
    title: 'Fendas na Aliança',
    body: 'Nem todos aceitaram o pacto. Entre os undeads, divisões internas emergiram. Muitos servem ao Império. Mas outros — necromantes, lordes ossudos e cultistas antigos — abraçaram o Pacto, espalhando a morte nos campos de batalha. Elfos e sátiros, por enquanto, mantêm sua lealdade. Mas há rumores de clãs dissidentes que vivem nas sombras da floresta ou nos limites da civilização — observando, esperando.',
  },
];

export default function Lore() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const prev = () => setActive(i => (i - 1 + slides.length) % slides.length);
  const next = () => setActive(i => (i + 1) % slides.length);

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1440 / 1080' }}>
      {/* Background art — clean, no UI baked in */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.bg}
          alt={s.title}
          className="absolute w-full object-cover transition-opacity duration-500 pointer-events-none"
          style={{ opacity: i === active ? 1 : 0, top: '15%', left: 0, height: '70%' }}
        />
      ))}

      {/* Dark vignette for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 25%, transparent 60%, rgba(0,0,0,0.85) 80%, #000 100%)',
      }} />

      {/* Section header — decorative image with hooded figure + "Lore" */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: '4%' }}>
        <img
          src={loreHeader}
          alt="Lore"
          className="pointer-events-none"
          style={{ width: '73vw', height: 'auto' }}
        />
      </div>

      {/* Text box area with arrows on the sides */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center"
        style={{ top: '66%', width: '48%', gap: '1.5vw' }}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          className="cursor-pointer hover:scale-110 hover:brightness-125 active:scale-95 transition-all shrink-0"
          style={{ width: '3.6vw' }}
        >
          <img src={loreArrowLeft} alt="Previous" className="w-full h-auto" />
        </button>

        {/* Text box frame + content */}
        <div className="relative flex-1 flex flex-col items-center">
          <div className="relative w-full">
            <img
              src={loreTextboxFrame}
              alt=""
              className="w-full h-auto pointer-events-none"
            />

            {/* Title banner — pure CSS component */}
            <div
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
              style={{
                top: '-6%',
                width: '70%',
                height: '16%',
                background: 'linear-gradient(180deg, rgba(15,12,8,0.95) 0%, rgba(10,8,5,0.98) 100%)',
                border: '1px solid rgba(197,148,74,0.5)',
                borderRadius: '2px',
              }}
            >
              <div className="absolute top-0 left-[5%] right-[5%] h-px" style={{ background: 'linear-gradient(90deg, transparent, #c5944a, transparent)' }} />
              <div className="absolute bottom-0 left-[5%] right-[5%] h-px" style={{ background: 'linear-gradient(90deg, transparent, #c5944a, transparent)' }} />
              <span
                className="text-[#d4c5a0]"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.1vw',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                }}
              >
                {slide.title}
              </span>
            </div>

            {/* Body text overlaid inside frame */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: '22%', width: '78%', height: '55%', overflow: 'hidden' }}
            >
              <p
                className="text-[#edca87]"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '0.83vw',
                  lineHeight: 1.4,
                  textAlign: 'center',
                }}
              >
                {slide.body}
              </p>
            </div>

            {/* Scrollbar indicator (decorative) */}
            <div
              className="absolute"
              style={{ right: '6%', top: '15%', width: '0.35vw', height: '60%' }}
            >
              <div className="w-full h-full rounded-full" style={{ background: 'rgba(11,18,21,0.8)', border: '1px solid rgba(253,191,8,0.3)' }}>
                <div
                  className="w-full rounded-full transition-all"
                  style={{
                    height: `${100 / slides.length}%`,
                    marginTop: `${(active / (slides.length - 1)) * (100 - 100 / slides.length)}%`,
                    background: 'linear-gradient(to bottom, #003053, #84680f)',
                    border: '1px solid #84680f',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Diamond dot indicators below text box */}
          <div className="flex items-center" style={{ gap: '0.35vw', marginTop: '0.5vw' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="cursor-pointer transition-all hover:scale-125"
                style={{ width: '0.6vw', height: '0.6vw' }}
              >
                <svg viewBox="0 0 16 16" className="w-full h-full">
                  <rect
                    x="3" y="3" width="10" height="10"
                    transform="rotate(45 8 8)"
                    fill={i === active ? '#c5944a' : '#5a4a30'}
                    stroke={i === active ? '#f0d080' : 'none'}
                    strokeWidth="0.5"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          className="cursor-pointer hover:scale-110 hover:brightness-125 active:scale-95 transition-all shrink-0"
          style={{ width: '3.6vw' }}
        >
          <img src={loreArrowRight} alt="Next" className="w-full h-auto" />
        </button>
      </div>
    </section>
  );
}
