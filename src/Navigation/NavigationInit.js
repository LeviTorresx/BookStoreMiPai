import React from 'react'
import { FaUser } from "react-icons/fa";

export default function NavigationInit() {
  return (
    <div>
    <nav className="navbar bg-navbar-log">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="./logoMipaiBookstoreFull.png"
            alt="Bootstrap"
            width="150"
          />
        </a>
        <div className="m-2">
          <a href="/login" className="btn-ico m-1" type="submit">
            <FaUser size={"20"} />
          </a>
        </div>
      </div>
    </nav>
  </div>
  )
}
