import './Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="MadTech Logo" />
          <p>Transformamos ideas en experiencias visuales y digitales.</p>
        </div>

        <div className="footer-redes">
          <h4>Síguenos</h4>
          <div className="iconos">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/_m1994d" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/marlon-andres-diaz-suarez-715465226/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/m1994d" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} MadTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}