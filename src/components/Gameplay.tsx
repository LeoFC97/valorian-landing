import SectionTitle from './SectionTitle';

const cards = [
  {
    title: 'Basics of Game',
    align: 'left' as const,
    topics: [
      {
        name: 'Craft',
        text: 'Forje equipamentos a partir de recursos coletados, definindo atributos, raridade e número de slots para personalização. A progressão do craft permite criar desde itens básicos até peças raras de alto impacto, influenciando diretamente sua força no combate.',
      },
      {
        name: 'Essências',
        text: 'Extraia e manipule essências para inserir bônus específicos em seus equipamentos. Evolua suas essências para tiers mais altos e monte combinações estratégicas para maximizar seu desempenho em qualquer estilo de jogo.',
      },
    ],
  },
  {
    title: 'Lifeskills',
    align: 'right' as const,
    topics: [
      {
        name: 'Reputação',
        text: 'Conquiste reconhecimento em diferentes regiões cumprindo missões diárias. Bônus e recompensas especiais são liberados conforme sua reputação sobe, mas manter esses privilégios exige dedicação constante.',
      },
      {
        name: 'Coleta',
        text: 'Reúna materiais raros explorando o mundo. Minerar, colher e caçar criaturas são atividades essenciais para sustentar o craft, a economia e o comércio entre jogadores.',
      },
    ],
  },
  {
    title: 'Player vs Player',
    align: 'left' as const,
    topics: [
      {
        name: 'Cerco de Fortalezas',
        text: 'Participe de batalhas massivas para conquistar ou defender fortalezas estratégicas. Controle dessas áreas garante vantagens econômicas e territoriais para sua guilda ou facção.',
      },
      {
        name: 'Arena',
        text: 'Prove sua habilidade em combates equilibrados contra outros jogadores. É o lugar perfeito para testar builds e estratégias sem o risco do mundo aberto.',
      },
    ],
  },
  {
    title: 'Global',
    align: 'right' as const,
    topics: [
      {
        name: 'Front',
        text: 'Eventos globais que alteram o mapa e desbloqueiam novos conteúdos. O avanço do front depende das ações conjuntas dos jogadores.',
      },
      {
        name: 'Política',
        text: 'Sistema de governo controlado por jogadores, definindo taxas, licenças e investimentos em setores estratégicos da cidade e do continente.',
      },
    ],
  },
];

function GameplayCard({ title, align, topics }: (typeof cards)[number]) {
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        width: '62.5%',
        aspectRatio: '900 / 350',
        border: '1px solid #c5944a40',
        background: 'linear-gradient(135deg, #0a0800 0%, #1a1408 50%, #0a0800 100%)',
        boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8), 0 0 20px rgba(197,148,74,0.1)',
      }}
    >
      {/* Gold corner ornaments (CSS) */}
      <div className="absolute inset-0 pointer-events-none" style={{
        border: '2px solid transparent',
        borderImage: 'linear-gradient(135deg, #c5944a 0%, #8a6a30 20%, transparent 40%, transparent 60%, #8a6a30 80%, #c5944a 100%) 1',
      }} />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center"
        style={{
          padding: '4.2%',
          marginLeft: align === 'right' ? '50%' : '0',
          marginRight: align === 'left' ? '50%' : '0',
          textAlign: align,
        }}
      >
        <h3
          className="gold-title"
          style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8vw', fontWeight: 400, marginBottom: '1.5vw' }}
        >
          {title}
        </h3>
        {topics.map(topic => (
          <div key={topic.name} style={{ marginBottom: '1vw' }}>
            <h4
              className="gold-title"
              style={{ fontFamily: "'Cinzel', serif", fontSize: '1vw', fontWeight: 400, marginBottom: '0.3vw' }}
            >
              {topic.name}
            </h4>
            <p
              className="text-[#edca87]"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: '0.76vw',
                lineHeight: 1.4,
              }}
            >
              {topic.text}
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
      <SectionTitle title="GAMEPLAY" />

      {cards.map(card => (
        <GameplayCard key={card.title} {...card} />
      ))}
    </section>
  );
}
