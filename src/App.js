import './App.css';

export function Encabezado() {
  return (
    <header className='header'>
      <div className='contenedor contenido-header'>
        <h1>Rock & EDM Festival</h1>
      <nav className='navegacion-principal'>
        <a href='#'>Line Up</a>
        <a href='#'>Galeria</a>
        <a href='#'>Boletos</a>
      </nav>
      </div>
    </header>
  );
}

