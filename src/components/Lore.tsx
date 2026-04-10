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
    body: 'Antes que o tempo tivesse nome e o universo conhecesse forma, havia apenas o Vazio — e nele, solitário, vagava o Primeiro.\n\nDe sua vastidão silenciosa nasceu o desejo de criação. E com o eco desse desejo, o Primeiro moldou cinco entidades divinas: Zalthor, Thyros, Vazrath, Myrnos e Yero — os Deuses Primevos, pilares do que viria a ser tudo o que é e o que permanece oculto.\n\n• Zalthor e Thyros, irmãos gêmeos em essência e contraste, simbolizavam a força e a ordem da matéria.\n• Vazrath, senhor da lógica, ditava as leis invisíveis que regem o cosmos.\n• Myrnos, criador das criaturas, populava o mundo com formas de vida visíveis e ocultas.\n• Yero, por fim, era o Guardião Ancestral, defensor dos caminhos mortais.\n\nDurante eras, os cinco deuses caminharam em harmonia, e sua criação vibrava em equilíbrio.',
  },
  {
    bg: loreBg2,
    title: 'A Queda da Harmonia',
    body: 'Mas então vieram os homens.\n\nSob a proteção direta de Yero, os humanos prosperaram... e então corromperam. Insaciáveis e orgulhosos, ousaram profanar as obras divinas. Roubaram a matéria, queimaram florestas, escravizaram feras sagradas e tentaram replicar a magia dos deuses com alquimia e aço.\n\nA paz dos Primevos quebrou-se.\n\nZalthor e Thyros, ultrajados, prepararam a purificação do mundo mortal. Mas Yero interveio — defendendo os homens, mesmo sabendo que sua causa era perdida.\n\nOs deuses, em silêncio, partiram.\n\n"Eles não se extinguiram. Apenas repousam em outro mundo — além do véu, além da compreensão." — Verso proibido da Liturgia de Yero\n\nDesde então, os deuses não mais responderam. O mundo tornou-se terra dos homens. E com isso… terra de monstros.',
  },
  {
    bg: loreBg3,
    title: 'O Surgimento do Império e do Pacto',
    body: 'Sem orientação divina, os humanos ergueram o Império de Tyrvalor — fortificado por Casas Militares, sustentado por fé e comandado pela Santa Guarda Imperial.\n\nDurante séculos, dominaram o continente. Mas a ganância não ficou impune.\n\nDo abismo da criação surgiram os Elementais das Sombras: criaturas colossais forjadas da raiva dos Deuses e da corrupção da alma mortal:\n\n• Thalgrim, o Sanguinário – Senhor do sangue e da guerra.\n• Vespera, a Sombra Eterna – Deusa do medo e da ilusão.\n• Noxis, o Pestilento – Alquimista do veneno e da podridão.\n• Kragath, o Indomável – Fúria encarnada da destruição.\n\nEles unificaram tribos de bestas, bárbaros e aberrações num exército conhecido como O Pacto.\nE no silêncio de seus avanços, cidades humanas começaram a desaparecer.',
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
    title: 'As Raças e a Aliança Condenada',
    body: 'Diante da destruição iminente, o Império finalmente cedeu. Enviou emissários aos Elfos, Sátiros e Undeads — raças antigas que ainda viviam isoladas, observando os mortais de longe.\n\nPara surpresa de muitos, os três aceitaram o Acordo. Mas impuseram uma condição irrevogável:\n\n"Nosso poder não é um presente. É um legado de sangue e essência. Se desejam nossa força... que se tornem um de nós."\n\nComo os humanos não podiam conter magia, os Undeads criaram a Poção de Transmutação Racial — uma substância ritualística que alterava não apenas o corpo, mas a alma do recruta.\n\nA partir de então, qualquer um que desejasse aprender as artes dessas raças, deveria abdicar de sua humanidade.',
  },
  {
    bg: loreBg8,
    title: 'A Fundação das Quatro Grandes Casas',
    body: 'Com a união selada, o Império reorganizou sua estrutura militar. Surgiram então as Quatro Grandes Casas, centros de treinamento e doutrina espiritual — uma para cada tradição.\n\n• Casa de Aço: fundada pelos humanos. Treina os Cavaleiros — fortes, resilientes, devotos.\n• Círculo Verdejante: liderado por elfos. Forma os Druidas — curandeiros, metamorfos, defensores da vida.\n• Câmara Sombria: domínio dos undeads. Forja os Magos — mestres do fogo e do frio, senhores do arcano.\n• Irmandade das Presas: lar dos sátiros. Treina os Arqueiros — caçadores nômades, domadores de feras.',
  },
  {
    bg: loreBg9,
    title: 'Fendas na Aliança',
    body: 'Nem todos aceitaram o pacto.\n\nEntre os undeads, divisões internas emergiram. Muitos servem ao Império. Mas outros — necromantes, lordes ossudos e cultistas antigos — abraçaram o Pacto, espalhando a morte nos campos de batalha.\n\nElfos e sátiros, por enquanto, mantêm sua lealdade. Mas há rumores de clãs dissidentes que vivem nas sombras da floresta ou nos limites da civilização — observando, esperando.\n\n"O sangue que hoje jura aliança, amanhã pode gritar por liberdade." — Comandante Seraphina Blackwood',
  },
  {
    bg: loreBg9,
    title: 'A Jornada Começa',
    body: 'As ruínas de Valorian aguardam seus passos. O Pacto marcha. Os deuses dormem. A guerra chama.\n\n"Você não escolheu nascer neste mundo. Mas agora, deve escolher de que lado da lâmina deseja estar." — General Astradis Darkbane',
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
          style={{ opacity: i === active ? 1 : 0, top: '0%', left: 0, height: '100%' }}
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

            {/* Body text overlaid inside frame — scrollable with custom scrollbar */}
            <div
              className="absolute left-1/2 -translate-x-1/2 lore-scroll"
              style={{ top: '22%', width: '78%', height: '55%', overflowY: 'auto', overflowX: 'hidden' }}
            >
              <p
                className="text-[#edca87]"
                style={{
                  fontFamily: "'Fontin', 'Georgia', serif",
                  fontSize: '0.83vw',
                  lineHeight: 1.5,
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {slide.body}
              </p>
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
