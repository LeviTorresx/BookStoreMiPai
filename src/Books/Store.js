import React from "react";
import { FaBook } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";

export default function Store() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/home">
            <FaBook size={"30"} /> <span> Categories</span>
          </a>
        </li>
        <li>
          <a href="/profile">
            <FaFireAlt size={"30"} /> <span> Categories</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaCheckCircle size={"30"} /> <span> Categories</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaPercentage size={"30"} /> <span> Categories</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaUserGroup size={"30"} /> <span> Categories</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
