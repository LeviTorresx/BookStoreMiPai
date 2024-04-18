import React from 'react'
import { FaRegUser } from "react-icons/fa";

export default function NavigationInit() {
  return (
    <div>
    <nav className="navbar bg-navbar-log">
      <div className="container-fluid">
        <a className="navbar-brand p-0 mx-2" href="/">
          <img
            src="./logoMipaiBookstoreFull.png"
            alt="Bootstrap"
            width="150"
          />
        </a>
        <div className="m-2">
          <a href="/login" className="btn btn-ico m-1" type="submit">
          <FaRegUser size={'25px'}/>
          </a>
        </div>
      </div>
    </nav>
  </div>
  )
}
