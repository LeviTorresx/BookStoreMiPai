import React from 'react'

// Componente para la página de inicio
export default function Home() {
  return (
    <div>
      {/* Contenedor del logo */}
      <div>
        {/* Enlace con el logo de la tienda */}
        <a className="navbar-brand mx-4 p-0 " href="/">
          <img src="../logoMipaiBookstoreFull.png" alt="Logo" width="150" />
        </a>
      </div>
    </div>
  )
}
