import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => setMenuAbierto(!menuAbierto)
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="MadTech Logo" />
        <span>MadTech</span>
      </div>

      <div className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        <a href="#servicios" onClick={cerrarMenu}>Servicios</a>
        <a href="#portafolio" onClick={cerrarMenu}>Portafolio</a>
        <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
      </div>

      <div className={`menu-toggle ${menuAbierto ? 'activo' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}