import React from "react";
import ElementsCart from "./ElementsCart";

export default function ShoppingCart({
  isOpen,
  toggle,
  books,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  return (
    <div>
      <div className={`sidebar-cart ${isOpen ? "open" : " "}`}>
        <div className="text-center">
          <h3> Shopping cart</h3>

          <div>
            <div className="overflow-auto"style={{ maxHeight: "600px" }}>
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
            <div className="pt-4">
               <button className="button" onClick={toggle}>
              Close
            </button>
            <button className="button" onClick="">
              Buy
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
//hola
