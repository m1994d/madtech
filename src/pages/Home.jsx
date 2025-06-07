import './Home.css'
import Navbar from '../components/Navbar'
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import ParallaxBanner from '../components/ParallaxBanner'
import Sobre from '../components/Sobre'
import LineaTiempo from '../components/LineaTiempo'


export default function Home() {
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="MadTech Logo" className="hero-logo" />
          <h1>MadTech</h1>
          <p>Diseño gráfico, desarrollo web</p>
        </div>
      </header>

      <ParallaxBanner />
      <Sobre />
      <LineaTiempo />
      <Servicios />
      <Portafolio />
      <Contacto />
      <Footer />

      

    </>
  )
}