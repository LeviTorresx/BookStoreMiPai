import React, { useState } from "react";

// Componente funcional para la barra de búsqueda
export default function Search({ onSearch }) {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar cambios en el input de búsqueda
  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // Llama a la función proporcionada desde el padre para realizar la búsqueda
    onSearch(newSearchTerm);
  };

  return (
    <div>
      {/* Barra de navegación con el formulario de búsqueda */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Input de búsqueda */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
