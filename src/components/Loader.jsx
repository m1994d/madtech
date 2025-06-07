import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      <img src="/logo.png" alt="MadTech logo" className="loader-logo" />
      <p className="loader-text">Cargando MadTech...</p>
    </div>
  );
}
