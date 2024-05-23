import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar-admin bg-light">
        <ul>
          <li>
            <a href="/admin/book-register">
              <FaBook size={"30"} /> <span> Registrar libro</span>
            </a>
          </li>
          <li>
            <a href="/admin/book-tableContent">
              <FaDatabase size={"30"} /> <span> CRUD de libros</span>
            </a>
          </li>
          <li>
            <a href="/admin/clientTable">
              <FaIdCard size={"30"} /> <span> Clientes</span>
            </a>
          </li>
          <li>
            <a href="/admin/order-shipping">
              <FaTruckArrowRight size={"30"} /> <span> Envíos</span>
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
  )
}
