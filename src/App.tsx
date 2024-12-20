import './App.css'
import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Background>

  )
}

export default App
