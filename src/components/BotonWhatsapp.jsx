import React from 'react';
import './BotonWhatsapp.css';

export default function BotonWhatsapp() {
  const numero = '573054668929'; // Reemplaza con tu número en formato internacional (sin +)
  const mensaje = '¡Hola! Estoy interesado en tus servicios de MadTech.';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a href={url} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
}
