import './Sobre.css'

export default function Sobre() {
  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-contenedor" data-aos="fade-up">
        <div className="sobre-texto">
          <h2>Sobre <span className="resaltado">MadTech</span></h2>
          <p>
            <strong className='name' id='name-mad'>MADTECH</strong> nació de la pasión por el diseño y la tecnología.
            Lo que comenzó como un sueño personal se convirtió en un estudio digital
            dedicado a transformar ideas en experiencias visuales únicas.
          </p>
          <p>
            Desde nuestros primeros proyectos, tuvimos claro que el diseño no solo
            debe ser bonito, sino funcional, humano y con propósito.
          </p>
          <p>
            Con el tiempo, hemos colaborado con marcas, emprendedores y visionarios
            que confiaron en nuestra mirada creativa y soluciones personalizadas.
          </p>
          <p>
            <strong>MadTech es más que una marca.</strong> Es una forma de entender el mundo digital con
            sensibilidad, estrategia y evolución constante.
          </p>
          <p>
            Hoy seguimos creciendo, aprendiendo y creando. Porque creemos que cada
            proyecto tiene una historia que merece ser contada con diseño, código y corazón.
          </p>
        </div>

        <div className="sobre-imagen">
          <img src="public/logo.png" alt="Historia de MadTech" />
        </div>
        <div className="wave-divider">
      </div>
    </div>
    </section>
  )
}
