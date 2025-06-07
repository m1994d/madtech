import './LineaTiempo.css'

export default function LineaTiempo() {
  const eventos = [
    { año: '2021', titulo: 'Fundación de MadTech', descripcion: 'El inicio de un sueño creativo y tecnológico.' },
    { año: '2022', titulo: 'Primer cliente freelance', descripcion: 'Confiaron en nosotros para desarrollar su identidad visual.' },
    { año: '2022', titulo: 'Lanzamiento del portafolio', descripcion: 'Primera versión pública de nuestro trabajo en línea.' },
    { año: '2023', titulo: 'Diseño con alma', descripcion: 'Nace la filosofía que guía cada uno de nuestros proyectos.' },
    { año: '2024', titulo: 'Expansión de servicios', descripcion: 'Incluimos automatización, apps interactivas y más.' },
    { año: '2025', titulo: 'MadTech evoluciona', descripcion: 'Lanzamos la nueva identidad digital con visión global.' },
  ]

  return (
    <section className="linea-tiempo-section" id="historia">
      <h2 className="titulo-seccion"><span className="resaltado">Línea</span> del Tiempo</h2>
      <div className="linea-tiempo">
        {eventos.map((evento, index) => (
          <div className="evento" key={index}>
            <div className="punto"></div>
            <div className="contenido">
              <h3>{evento.año}</h3>
              <h4>{evento.titulo}</h4>
              <p>{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
