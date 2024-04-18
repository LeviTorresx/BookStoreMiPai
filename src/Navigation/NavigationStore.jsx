import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Profile from "../User/Profile";
export default function NavigationStore({ userName, userLog }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let navegacion = useNavigate();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false); // Actualiza el estado de autenticación a false
    localStorage.removeItem("userData"); // Elimina los datos del usuario del localStorage
    setShowModal(false); // Cierra el modal
    // Opcional: redirige al usuario a la página de inicio o donde desees después de cerrar sesión
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(userLog);
  }, [userLog]);

  const handleUserClick = () => {
    if (isLoggedIn) {
      setShowModal(true);
      console.log("showModal should be true");
    } else {
      navegacion("/login"); // Redirigir al usuario al inicio de sesión si no está autenticado
    }
  };

  return (
    <div className="position-fixed z-3 w-100 border-bottom border-black">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-4 p-0" href="/">
            <img src="./logoMipaiBookstoreFull.png" alt="Logo" width="150" />
          </a>

          <div className="d-flex flex-grow-1">
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
          <div className="mx-3">
            <button className="btn btn-ico mx-1" type="submit">
            <MdOutlineShoppingCart size={'25px'}/>
            </button>
            <button
              className="btn btn-ico m-1"
              type="submit"
              onClick={handleUserClick}
            >
              <FaRegUser size={'25px'} /> {userName}
            </button>
          </div>
        </div>
      </nav>
      {showModal && (
        <div className="z-5">
        <Profile userName={userName} handleClose={handleClose} handleLogout={handleLogout}/>
        </div>
      )}
    </div>
  );
}