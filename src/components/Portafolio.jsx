import './Portafolio.css'

export default function Portafolio() {
  return (
    <section className="portafolio" id="portafolio">
      <h2>Portafolio</h2>
      <div className="galeria">
        <div className="item">
          <img src="https://via.placeholder.com/300x200" alt="Proyecto Taller Automotriz" />
          <h3>AutoPits JJ</h3>
          <a href="https://autopitsjj.neocities.org" target="_blank" rel="noopener noreferrer">Visitar Sitio</a>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/300x200" alt="Proyecto e-Commerce " />
          <h3>e-Commerce</h3>
          <a href="https://m1994d.github.io/inicio.html" target="_blank" rel="noopener noreferrer">Visitar Sitio</a>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/300x200" alt="Proyecto 3" />
          <h3>Desarrollo</h3>
        </div>
      </div>
    </section>
  )
}