import React from 'react'
import { FaRegUser } from "react-icons/fa";

// Componente de navegación para la página de inicio
export default function NavigationInit() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar bg-navbar-log">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand p-0 mx-2" href="/">
            <img
              src="./logoMipaiBookstoreFull.png"
              alt="Bootstrap"
              width="150"
            />
          </a>
          {/* Botón de inicio de sesión */}
          <div className="m-2">
            <a href="/login" className="btn btn-ico m-1" type="submit">
              {/* Icono de usuario */}
              <FaRegUser size={'25px'}/>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
