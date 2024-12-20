import './App.css'
import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
      <Footer />
    </Background>

  )
}

export default App
