import cardBasics from '../assets/images/gameplay-card-basics.png';
import cardLifeskills from '../assets/images/gameplay-card-lifeskills.png';
import cardPvp from '../assets/images/gameplay-card-pvp.png';
import cardGlobal from '../assets/images/gameplay-card-global.png';
import titleOrnament from '../assets/images/gameplay-title-ornament.png';

interface SubTopic {
  title: string;
  body: string;
}

interface GameplayCard {
  image: string;
  title: string;
  align: 'left' | 'right';
  subtopics: SubTopic[];
}

const cards: GameplayCard[] = [
  {
    image: cardBasics,
    title: 'Basics of Game',
    align: 'left',
    subtopics: [
      {
        title: 'Craft',
        body: 'Forje equipamentos a partir de recursos coletados, definindo atributos, raridade e número de slots para personalização. A progressão do craft permite criar desde itens básicos até peças raras de alto impacto, influenciando diretamente sua força no combate.',
      },
      {
        title: 'Essências',
        body: 'Extraia e manipule essências para inserir bônus específicos em seus equipamentos. Evolua suas essências para tiers mais altos e monte combinações estratégicas para maximizar seu desempenho em qualquer estilo de jogo.',
      },
    ],
  },
  {
    image: cardLifeskills,
    title: 'Lifeskills',
    align: 'right',
    subtopics: [
      {
        title: 'Reputação',
        body: 'Conquiste reconhecimento em diferentes regiões cumprindo missões diárias. Bônus e recompensas especiais são liberados conforme sua reputação sobe, mas manter esses privilégios exige dedicação constante.',
      },
      {
        title: 'Coleta',
        body: 'Reúna materiais raros explorando o mundo. Minerar, colher e caçar criaturas são atividades essenciais para sustentar o craft, a economia e o comércio entre jogadores.',
      },
    ],
  },
  {
    image: cardPvp,
    title: 'Player vs Player',
    align: 'left',
    subtopics: [
      {
        title: 'Cerco de Fortalezas',
        body: 'Participe de batalhas massivas para conquistar ou defender fortalezas estratégicas. Controle dessas áreas garante vantagens econômicas e territoriais para sua guilda ou facção.',
      },
      {
        title: 'Arena',
        body: 'Prove sua habilidade em combates equilibrados contra outros jogadores. É o lugar perfeito para testar builds e estratégias sem o risco do mundo aberto.',
      },
    ],
  },
  {
    image: cardGlobal,
    title: 'Global',
    align: 'right',
    subtopics: [
      {
        title: 'Front',
        body: 'Eventos globais que alteram o mapa e desbloqueiam novos conteúdos. O avanço do front depende das ações conjuntas dos jogadores.',
      },
      {
        title: 'Política',
        body: 'Sistema de governo controlado por jogadores, definindo taxas, licenças e investimentos em setores estratégicos da cidade e do continente.',
      },
    ],
  },
];

function GameplayCardComponent({ card }: { card: GameplayCard }) {
  const textAlign = card.align;
  const textSide = card.align === 'left'
    ? { left: '6.75%', right: 'auto' }
    : { right: '6.75%', left: 'auto' };

  return (
    <div className="relative overflow-hidden" style={{ width: '62.5%', borderRadius: '8px' }}>
      {/* Card background from Figma */}
      <img
        src={card.image}
        alt=""
        className="w-full h-auto pointer-events-none"
      />
      {/* Real text overlay */}
      <div
        className="absolute top-0 bottom-0 flex flex-col justify-center"
        style={{
          ...textSide,
          width: '42.2%',
          padding: '1.5vw 0',
        }}
      >
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.8vw',
            fontWeight: 400,
            background: 'linear-gradient(to bottom, #e5b723, #ac9563)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign,
            marginBottom: '1.2vw',
          }}
        >
          {card.title}
        </h3>
        {card.subtopics.map(sub => (
          <div key={sub.title} style={{ marginBottom: '0.8vw' }}>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.95vw',
                fontWeight: 400,
                background: 'linear-gradient(to bottom, #e5b723, #ac9563)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign,
                marginBottom: '0.3vw',
              }}
            >
              {sub.title}
            </h4>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: '0.6vw',
                lineHeight: 1.1,
                color: '#edca87',
                textAlign,
              }}
            >
              {sub.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gameplay() {
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000 0%, #050a10 50%, #000 100%)',
        paddingTop: '4vw',
        paddingBottom: '4vw',
        gap: '2vw',
      }}
    >
      {/* Section title — Figma ornament with real text */}
      <div className="relative flex items-center justify-center" style={{ width: '12vw', height: '5vw' }}>
        <img
          src={titleOrnament}
          alt=""
          className="absolute w-full h-full object-contain pointer-events-none"
        />
        <span
          className="relative z-10"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2.2vw',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0.05em',
            textShadow: '0 0 14px rgba(214,181,100,1)',
          }}
        >
          GAMEPLAY
        </span>
      </div>

      {cards.map(card => (
        <GameplayCardComponent key={card.title} card={card} />
      ))}
    </section>
  );
}
