import './App.css'
import Hero from './components/Hero'
import Lore from './components/Lore'
import Gameplay from './components/Gameplay'
import Classes from './components/Classes'
import Team from './components/Team'
import Footer from './components/Footer'
import starsBg from './assets/images/stars-bg.png'

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `#000 url(${starsBg}) center top / cover repeat-y`,
      }}
    >
      <section id="home">
        <Hero />
      </section>
      {/* Stars transition between Hero and Lore — subtle fade */}
      <div className="relative" style={{ height: '12vw', overflow: 'hidden' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${starsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #000 0%, transparent 30%, transparent 70%, #000 100%)',
          }}
        />
      </div>
      <section id="lore">
        <Lore />
      </section>
      <section id="gameplay">
        <Gameplay />
      </section>
      <div id="classes">
        <Classes />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App
