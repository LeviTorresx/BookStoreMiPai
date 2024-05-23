import React from "react";
import { FaBook } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function SideBar({ administratorAccess }) {

  const access = () => {
    return administratorAccess === "ADMINISTRATOR";
  };

  return (
    <div>
      <div className="sidebar bg-light">
        <ul>
          {access() && (
            <li>
              <a href="/admin/book-tableContent">
              <RiAdminFill size={"30"} /><span>Zona de administración</span></a>
            </li>
          )}
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
            <a target="_blank" rel="noreferrer" href="https://github.com/LeviTorresx">
              <FaUserGroup size={"30"} /> <span> Sobre nosotros</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
