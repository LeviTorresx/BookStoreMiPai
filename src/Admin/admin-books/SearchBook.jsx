import React from "react";

export default function SearchBook() {
  return (
    <div>
      <nav className="navbar bg-body">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
