import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";

// Componente Sidebar para la vista de administrador
export default function SideBar() {
  return (
    <div>
      {/* Barra lateral de administrador */}
      <div className="sidebar-admin bg-light">
        <ul>
          {/* Enlace para registrar un libro */}
          <li>
            <a href="/admin/book-register">
              <FaBook size={"30"} /> <span> Registrar libro</span>
            </a>
          </li>
          {/* Enlace para ver el CRUD de libros */}
          <li>
            <a href="/admin/book-tableContent">
              <FaDatabase size={"30"} /> <span> CRUD de libros</span>
            </a>
          </li>
          {/* Enlace para ver la lista de clientes */}
          <li>
            <a href="/admin/clientTable">
              <FaIdCard size={"30"} /> <span> Clientes</span>
            </a>
          </li>
          {/* Enlace para gestionar los envíos */}
          <li>
            <a href="/admin/order-shipping">
              <FaTruckArrowRight size={"30"} /> <span> Envíos</span>
            </a>
          </li>
          {/* Enlace para conocer más sobre el equipo */}
          <li>
            <a href="/about-us">
              <FaUserGroup size={"30"} /> <span> Sobre nosotros</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
