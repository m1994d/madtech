import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

export default function Contacto() {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mqw51fa', 'template_l0g9zb7', form.current, 'gZzX1CzugPExFUCPc')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito 🚀');
      }, (error) => {
          console.log(error.text);
          alert('Ocurrió un error. Intenta de nuevo.');
      });

    e.target.reset();
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={enviarCorreo}>
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input type="email" name="user_email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}
