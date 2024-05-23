import React from "react";
import { FaBook } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function SideBar({ administratorAccess }) {
  const location = useLocation();

  // Función para verificar si el usuario tiene acceso de administrador
  const access = () => {
    return administratorAccess === "ADMINISTRATOR";
  };

  return (
    <div>
      <div className="sidebar bg-light">
        <ul>
          {/* Mostrar el enlace de "Volver a la tienda" solo cuando la ubicación es '/about-us' */}
          {location.pathname === '/about-us' && (
            <li>
              <a href="/">
                <img src="./logoMipaiBookstore2.png" alt="Logo" width="40" style={{marginLeft: '-5px'}} />
                <span>Volver a la tienda</span>
              </a>
            </li>
          )}

          {/* Mostrar el enlace de "Zona de administración" solo si el usuario tiene acceso de administrador */}
          {access() && (
            <li>
              <a href="/admin/book-tableContent">
                <RiAdminFill size={"30"} /><span>Zona de administración</span>
              </a>
            </li>
          )}
          {/* Enlaces para diferentes secciones de la tienda */}
          <li>
            <a href="/comingSoon">
              <FaBook size={"30"} /> <span> Categorias</span>
            </a>
          </li>
          <li>
            <a href="/comingSoon">
              <FaFireAlt size={"30"} /> <span> Destacados</span>
            </a>
          </li>
          <li>
            <a href="/comingSoon">
              <FaCheckCircle size={"30"} /> <span> Recomendados</span>
            </a>
          </li>
          <li>
            <a href="/comingSoon">
              <FaPercentage size={"30"} /> <span> En descuento</span>
            </a>
          </li>
          <li>
            <a href="/about-us">
              <FaUserGroup size={"30"} /> <span> Sobre nosotros</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
