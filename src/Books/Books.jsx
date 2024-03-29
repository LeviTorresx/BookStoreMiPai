import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Books() {
  return (
    <div>
      <div className="bg-white img-book rounded my-2">
        <div className="flex justify-content-center">
          <img
            src="./portadas-libros-big-2019101610.jpg"
            width={"200px"}
            alt="x"
          />
        </div>
        <div className="p-2 bg-secondary rounded-bottom text-bg-light">
          <p>precio: $ 00.000</p>
          <h2> Name book</h2>
          <p> Autor</p>
          <div className="flex justify-content-center">
            <button className="btn btn-dark w-100 d-flex align-items-center">
              <FaShoppingCart className="mx-5" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
