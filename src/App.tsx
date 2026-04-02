import './App.css'
import Hero from './components/Hero'
import Lore from './components/Lore'
import Gameplay from './components/Gameplay'
import Classes from './components/Classes'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <section id="home">
        <Hero />
      </section>
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
