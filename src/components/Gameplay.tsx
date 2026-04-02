import gameplayBg from '../assets/images/gameplay-bg.png';
import gameplayCard1 from '../assets/images/gameplay-card-1.png';
import gameplayCardFrame from '../assets/images/gameplay-card-frame.png';
import gameplayCard3 from '../assets/images/gameplay-card-3.png';
import gameplayCard4 from '../assets/images/gameplay-card-4.png';

interface CardData {
  title: string;
  align: 'left' | 'right';
  bgImage?: string;
  subtitles: { title: string; description: string }[];
}

const cards: CardData[] = [
  {
    title: 'Basics of Game',
    align: 'left',
    bgImage: gameplayCard1,
    subtitles: [
      {
        title: 'Craft',
        description: 'Forje equipamentos a partir de recursos coletados, definindo atributos, raridade e número de slots para personalização. A progressão do craft permite criar desde itens básicos até peças raras de alto impacto, influenciando diretamente sua força no combate.',
      },
      {
        title: 'Essências',
        description: 'Extraia e manipule essências para inserir bônus específicos em seus equipamentos. Evolua suas essências para tiers mais altos e monte combinações estratégicas para maximizar seu desempenho em qualquer estilo de jogo.',
      },
    ],
  },
  {
    title: 'Lifeskills',
    align: 'right',
    subtitles: [
      {
        title: 'Reputação',
        description: 'Conquiste reconhecimento em diferentes regiões cumprindo missões diárias. Bônus e recompensas especiais são liberados conforme sua reputação sobe, mas manter esses privilégios exige dedicação constante.',
      },
      {
        title: 'Coleta',
        description: 'Reúna materiais raros explorando o mundo. Minerar, colher e caçar criaturas são atividades essenciais para sustentar o craft, a economia e o comércio entre jogadores.',
      },
    ],
  },
  {
    title: 'Player vs Player',
    align: 'left',
    bgImage: gameplayCard3,
    subtitles: [
      {
        title: 'Cerco de Fortalezas',
        description: 'Participe de batalhas massivas para conquistar ou defender fortalezas estratégicas. Controle dessas áreas garante vantagens econômicas e territoriais para sua guilda ou facção.',
      },
      {
        title: 'Arena',
        description: 'Prove sua habilidade em combates equilibrados contra outros jogadores. É o lugar perfeito para testar builds e estratégias sem o risco do mundo aberto.',
      },
    ],
  },
  {
    title: 'Global',
    align: 'right',
    bgImage: gameplayCard4,
    subtitles: [
      {
        title: 'Front',
        description: 'Eventos globais que alteram o mapa e desbloqueiam novos conteúdos. O avanço do front depende das ações conjuntas dos jogadores.',
      },
      {
        title: 'Política',
        description: 'Sistema de governo controlado por jogadores, definindo taxas, licenças e investimentos em setores estratégicos da cidade e do continente.',
      },
    ],
  },
];

function GoldOrnamentLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-[2px] bg-gradient-to-r from-transparent via-[#e4b623] to-transparent shadow-[0_0_5px_#ffe95e] ${className}`} />
  );
}

function GameplayCard({ card }: { card: CardData }) {
  const isLeft = card.align === 'left';

  return (
    <div className="relative w-[900px] h-[350px] rounded-[7.6px] overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-black" />

      {/* Background image */}
      {card.bgImage && (
        <>
          <img
            src={card.bgImage}
            alt=""
            className={`absolute top-0 h-full w-[70%] object-cover ${isLeft ? 'right-0' : 'left-0'}`}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isLeft
                ? 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.85) 60%, transparent 100%)'
                : 'linear-gradient(to left, black 0%, black 40%, rgba(0,0,0,0.85) 60%, transparent 100%)',
            }}
          />
        </>
      )}

      {/* Gold ornamental frame */}
      <img
        src={gameplayCardFrame}
        alt=""
        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
      />

      {/* Content */}
      <div
        className={`relative z-20 h-full flex flex-col justify-center p-[61px] ${
          isLeft ? 'items-start text-left' : 'items-end text-right'
        }`}
        style={{ maxWidth: '380px', marginLeft: isLeft ? 0 : 'auto' }}
      >
        <h3 className="gold-title-dark font-['Cinzel',serif] text-[36px] leading-tight mb-5" style={{ textShadow: '0 3px 3px black' }}>
          {card.title}
        </h3>

        {card.subtitles.map((sub) => (
          <div key={sub.title} className="mb-3 w-full">
            <h4 className="gold-title-dark font-['Cinzel',serif] text-[18px] mb-1" style={{ textShadow: '0 3px 3px black' }}>
              {sub.title}
            </h4>
            <p className="font-['Georgia',serif] text-[11px] leading-[12.2px] text-[#edca87]">
              {sub.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gameplay() {
  return (
    <section className="relative w-full py-[107px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <img src={gameplayBg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ backgroundSize: '463px 694.5px' }} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <GoldOrnamentLine className="w-[169px]" />
          <h2 className="gold-title section-title tracking-widest">GAMEPLAY</h2>
          <GoldOrnamentLine className="w-[169px]" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[70px]">
          {cards.map((card) => (
            <GameplayCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
