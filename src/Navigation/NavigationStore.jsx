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
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  let navegacion = useNavigate();

  const handleClose = () => {
    setShowProfile(false);
  };

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
        window.location.reload();
      }   
    });
  };

  useEffect(() => {
    setIsLoggedIn(userLog);
  }, [userLog]);

  const handleUserClick = () => {
    if (isLoggedIn) {
      setShowProfile(true);
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

          <div className="d-flex flex-grow-1 mx-4 ">
            <div className="input-group">
              <input
                className="form-control border border-2 border-black"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-light border border-2 border-black"
                type="submit"
              >
                <FaSearch size={"20"} />
              </button>
            </div>
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
