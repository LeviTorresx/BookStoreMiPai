import React, { useState } from "react";
import ElementsCart from "./ElementsCart";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../utils/GetUser";
import Swal from "sweetalert2";

export default function ShoppingCart({
  isOpen,
  toggle,
  books,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  totalPrice,
}) {
  let navigation = useNavigate();

  const [user, setuser] = useState(getUserData());

  const handleBuy = () => {
    localStorage.setItem("booksShipping", JSON.stringify(books));

    if (validateBooks()) {
      if (user) {
        navigation("/payment");
      } else {
        navigation("/login");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay libros en el carrito",
      });
    }
  };

  const validateBooks = () => {
    let contBooks = localStorage.getItem("booksShipping");
    let booksArray = JSON.parse(contBooks);
    return booksArray.length > 0;
  };

  return (
    <div>
      <div className={`sidebar-cart ${isOpen ? "open" : " "}`}>
        <div className="text-center">
          <h3> Shopping cart</h3>

          <div>
            <div className="overflow-auto" style={{ maxHeight: "600px" }}>
              {books.map((book, index) => (
                <ElementsCart
                  key={index}
                  book={book}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
            </div>
            <div className="text-center">
              Total:
              {totalPrice.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </div>

            <div className="pt-4">
              <button className="button" onClick={toggle}>
                Close
              </button>
              <button className="button" onClick={handleBuy}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
