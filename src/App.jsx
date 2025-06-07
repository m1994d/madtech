import './index.css'
import Home from './pages/Home'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import BotonWhatsapp from './components/BotonWhatsapp';


AOS.init()


function App() {
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false)
    }, 2000) // Puedes ajustar el tiempo de carga aquí

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {cargando ? <Loader /> : <Home />}
      {/* Botón flotante de WhatsApp */}
      <BotonWhatsapp />
    </>
  )
}

export default App
