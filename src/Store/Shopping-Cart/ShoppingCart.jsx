import React from "react";
import ElementsCart from "./ElementsCart";



export default function ShoppingCart({ isOpen, toggle, books}) {
  return (
    <div>
      <div className={`sidebar-cart ${isOpen ? "open" : " "}`}>
        <div className="text-center">
          <h3> Shopping cart</h3>
            <div>
                <ElementsCart books={books}/>
            </div>
          <div>
            <button className="button" onClick={toggle}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//hola
