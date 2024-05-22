import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../Navigation/Home";
import Search from "./Utils/Search";

export default function NavBarAdmin({ onSearch }) {
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/admin/book-register":
        setPageTitle("Registrar libros");
        break;
      case "/admin/book-tableContent":
        setPageTitle("CRUD de libros");
        break;
      case "/admin/clientTable":
        setPageTitle("CRUD de clientes");
        break;
      default:
        setPageTitle("Zona de administración");
    }
  }, [location.pathname]);

  const isCrudPage = location.pathname === "/admin/book-tableContent" || location.pathname === "/admin/clientTable";

  return (
    <div className="position-fixed z-3 w-100 border-bottom border-black bg-light d-flex justify-content-between align-items-center">
      <div>
        <Home />
      </div>
      <div className="ps-5 my-3">
        <h3>{pageTitle}</h3>
      </div>
      <div>
        {isCrudPage && <Search onSearch={onSearch} />}
      </div>
    </div>
  );
}