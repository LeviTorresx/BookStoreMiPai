import React from "react";



export default function ShoppingCart({ isOpen, toggle}) {
  return (
    <div>
      <div className={`sidebar-cart ${isOpen ? "open" : " "}`}>
        <div className="text-center">
          <h3> Shopping cart</h3>
            <div>
              
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
