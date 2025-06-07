import './Servicios.css'

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
  <h2 data-aos="fade-up">Servicios</h2>
  <div className="servicios-grid">
    <div className="servicio-card" data-aos="zoom-in" data-aos-delay="100">
      <div className="servicio">
          <h3>Diseño Gráfico</h3>
          <p>Identidad visual, logotipos, branding y piezas para redes sociales.</p>
        </div>
        <div className="servicio">
          <h3>Desarrollo Web</h3>
          <p>Sitios web modernos, responsivos y funcionales con tecnologías actuales.</p>
        </div>
        <div className="servicio">
          <h3>Desarrollo</h3>
          <p>Edición de video, motion graphics y contenido visual para marcas.</p>
        </div>
      </div>
    </div>
    </section>
  )
}