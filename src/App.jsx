import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Project } from './components/Project'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  AOS.init();

  return (
    <>
      <div className='bg-bgmain'>
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Work />
        <Project />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
