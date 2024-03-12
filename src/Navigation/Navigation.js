import React from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export default function Navigation() {
  return (
    <div>
      <nav className="navbar bg-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./logoMipaiBookstoreFull.png"
              alt="Bootstrap"
              width="150"
            />
          </a>

          <div className="d-flex flex-grow-1 ">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                <FaSearch size={"20"} />
              </button>
            </div>
          </div>
          <div className="m-2">
            <a href="/cart" className="btn-ico m-1" type="submit">
              <FaShoppingCart size={"20"} />
            </a>
            <a href="/login" className="btn-ico m-1" type="submit">
              <FaUser size={"20"} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
