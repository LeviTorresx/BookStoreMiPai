import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../Navigation/Home";
import Search from "./Utils/Search";

// Componente NavBarAdmin para la vista de administrador
export default function NavBarAdmin({ onSearch }) {
  // Estado para almacenar el título de la página
  const [pageTitle, setPageTitle] = useState("");
  // Hook para obtener la ubicación actual
  const location = useLocation();

  // Efecto para actualizar el título de la página según la ubicación
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
      case "/admin/order-shipping":
        setPageTitle("Registro de envíos");
        break;
      default:
        setPageTitle("Zona de administración");
    }
  }, [location.pathname]);

  // Variable para determinar si estamos en una página de CRUD
  const isCrudPage = location.pathname === "/admin/book-tableContent" || location.pathname === "/admin/clientTable";

  return (
    <div className="position-fixed z-3 w-100 border-bottom border-black bg-light d-flex justify-content-between align-items-center">
      {/* Componente Home para mostrar el logo y enlace a la página principal */}
      <div>
        <Home />
      </div>
      {/* Título de la página */}
      <div className="ps-5 my-3">
        <h3>{pageTitle}</h3>
      </div>
      {/* Componente de búsqueda visible solo en páginas de CRUD */}
      <div>
        {isCrudPage && <Search onSearch={onSearch} />}
      </div>
    </div>
  );
}
