import React from "react";

/**
 * Componente Profile
 * 
 * Este componente muestra la información del perfil del usuario y proporciona opciones para cerrar el perfil o cerrar sesión.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.user - El objeto de usuario que contiene la información del usuario.
 * @param {boolean} props.isOpenProfile - Estado que indica si el perfil está abierto o cerrado.
 * @param {Function} props.toggleProfile - Función para alternar la visibilidad del perfil.
 * @param {Function} props.handleLogOut - Función para manejar el cierre de sesión del usuario.
 * 
 * @returns {JSX.Element} El componente del perfil del usuario.
 */
export default function Profile({
  user,
  isOpenProfile,
  toggleProfile,
  handleLogOut,
}) {
  return (
    <div>
      {/* Contenedor del perfil con clases dinámicas según el estado de isOpenProfile */}
      <div className={`sidebar-cart ${isOpenProfile ? "open" : ""}`}>
        <div className="text-center">
          {/* Muestra el nombre de usuario */}
          <h3>{user.userName}</h3>
          {/* Muestra el correo electrónico del usuario */}
          <h4>{user.email}</h4>
          <div className="pt-4">
            {/* Botón para cerrar el perfil */}
            <button className="button" onClick={toggleProfile}>
              Cerrar
            </button>
            {/* Botón para cerrar sesión */}
            <button className="button" onClick={handleLogOut}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
