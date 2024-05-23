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

  const access = () => {
    return administratorAccess === "ADMINISTRATOR";
  };

  return (
    <div>
      <div className="sidebar bg-light">
        <ul>
          {location.pathname === '/about-us' &&(
            <li>
              <a href="/">
                <img src="./logoMipaiBookstore2.png" alt="Logo" width="40" style={{marginLeft: '-5px'}} />
                <span>Volver a la tienda</span>
              </a>
            </li>
          )}

          {access() && (
            <li>
              <a href="/admin/book-tableContent">
              <RiAdminFill size={"30"} /><span>Zona de administración</span></a>
            </li>
          )}
          <li>
            <a href="/home">
              <FaBook size={"30"} /> <span> Categorias</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaFireAlt size={"30"} /> <span> Destacados</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCheckCircle size={"30"} /> <span> Recomendados</span>
            </a>
          </li>
          <li>
            <a href="/settings">
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
