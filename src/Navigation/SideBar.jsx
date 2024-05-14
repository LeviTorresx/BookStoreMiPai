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
              <RiAdminFill size={"30"} /><span>Admin Zone</span></a>
            </li>
          )}
          <li>
            <a href="/home">
              <FaBook size={"30"} /> <span> Categories</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaFireAlt size={"30"} /> <span> Best sellers</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCheckCircle size={"30"} /> <span> Recommended</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaPercentage size={"30"} /> <span> Off sale</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/LeviTorresx">
              <FaUserGroup size={"30"} /> <span> About us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
