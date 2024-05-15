import React from "react";
import ElementsCart from "./ElementsCart";
import { useNavigate } from "react-router-dom";

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
  const handleBuy = () => {
    localStorage.setItem("booksShipping", JSON.stringify(books));
    navigation("/payment");
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
              Total:{" "}
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
