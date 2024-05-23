import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Profile from "../User/Profile";
import ShoppingCart from "../Store/Shopping-Cart/ShoppingCart";
import Swal from "sweetalert2";

export default function NavigationStore({
  user,
  userLog,
  isOpen,
  toggle,
  books,
  setBooks,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  count,
  totalPrice,
  availableBooks,
  onFilteredBooks,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado
  const [showProfile, setShowProfile] = useState(false); // Estado para controlar la visibilidad del perfil de usuario
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [suggestions, setSuggestions] = useState([]); // Estado para las sugerencias de búsqueda
  let navegacion = useNavigate(); // Hook de navegación de React Router

  // Actualiza el estado de autenticación cuando cambia la prop 'userLog'
  useEffect(() => {
    setIsLoggedIn(userLog);
  }, [userLog]);

  // Cierra el perfil de usuario
  const handleClose = () => {
    setShowProfile(false);
  };

  // Maneja el cierre de sesión del usuario
  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Tu sesión se cerrará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoggedIn(false);
        localStorage.removeItem("userData");
        window.location.reload(); // Recarga la página después de cerrar la sesión
      }
    });
  };

  // Maneja el clic en el icono de usuario
  const handleUserClick = () => {
    if (isLoggedIn) {
      setShowProfile(true); // Muestra el perfil de usuario si está autenticado
    } else {
      navegacion("/login"); // Redirige al usuario al inicio de sesión si no está autenticado
    }
  };

  // Maneja el cambio en el término de búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      // Filtra los libros disponibles según el término de búsqueda
      const filteredBooks = availableBooks.filter((book) =>
        book.bookName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredBooks);
    } else {
      setSuggestions([]);
    }
  };

  // Maneja el clic en una sugerencia de búsqueda
  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setSuggestions([]);
  };

  // Destaca las coincidencias en el texto de la sugerencia de búsqueda
  const highlightMatch = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: "#69c012" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Maneja la búsqueda de libros
  const handleSearchBook = () => {
    if (searchTerm.length > 0) {
      const filteredBooks = availableBooks.filter((book) =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredBooks);
      onFilteredBooks(filteredBooks);
    } else {
      setSuggestions([]);
      onFilteredBooks([]);
    }
  };

  return (
    <div className="position-fixed z-3 w-100 border-bottom border-black">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-4 p-0" href="/">
            <img src="./logoMipaiBookstoreFull.png" alt="Logo" width="150" />
          </a>

          <div className="d-flex flex-grow-1 mx-4 position-relative">
            <div className="input-group">
              <input
                className="form-control border border-2 border-black"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-ico border border-2 border-black"
                type="button"
                onClick={handleSearchBook}
              >
                <FaSearch size={"20"} />
              </button>
            </div>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((book, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(book.bookName)}
                  >
                    {highlightMatch(book.bookName, searchTerm)}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mx-3">
            <button className="btn btn-ico mx-1" onClick={toggle}>
              <div style={{ position: "relative" }}>
                {count > 0 && <div className="cart-count">{count}</div>}
                <MdOutlineShoppingCart size={"25px"} />
              </div>
            </button>
            <button
              className="btn btn-ico m-1"
              type="submit"
              onClick={handleUserClick}
            >
              <FaRegUser size={"25px"} /> {user ? user.userName : ""}
            </button>
          </div>
        </div>
      </nav>
      <ShoppingCart
        isOpen={isOpen}
        toggle={toggle}
        books={books}
        setBooks={setBooks}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
        totalPrice={totalPrice}
      />
      <div className="z-5">
        <Profile
          user={user}
          isOpenProfile={showProfile}
          toggleProfile={handleClose}
          handleLogOut={handleLogout}
        />
      </div>
    </div>
  );
}
