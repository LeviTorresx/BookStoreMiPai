import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function NavigationStore( {userName}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = "User profile";
  let navegacion = useNavigate();
  

  const handleUserClick = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      navegacion('/login');// Redirigir al usuario al inicio de sesión si no está autenticado
    }
  };

  return (
    <div className="position-fixed z-3 w-100">
      <nav className="navbar bg-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./logoMipaiBookstoreFull.png"
              alt="Logo"
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
            <a href="/login" className="btn-ico m-1 " type="submit">
              <FaUser size={"20"} className="mx-2" /> {userName}
            </a>
          </div>
        </div>
      </nav>
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Profile</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Aquí puedes colocar la información del usuario */}
                <p>Nombre: John Doe</p>
                <p>Email: john@example.com</p>
                {/* Añade más información según tus necesidades */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
