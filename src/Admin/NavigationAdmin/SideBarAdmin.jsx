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
              <FaBook size={"30"} /> <span> Book register</span>
            </a>
          </li>
          <li>
            <a href="/admin/book-tableContent">
              <FaDatabase size={"30"} /> <span> Books CRUD</span>
            </a>
          </li>
          <li>
            <a href="/admin/clientTable">
              <FaIdCard size={"30"} /> <span> Clients</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaTruckArrowRight size={"30"} /> <span> Shipping</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaUserGroup size={"30"} /> <span> About us</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
