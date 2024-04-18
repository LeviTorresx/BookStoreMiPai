import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Books() {
  return (
    <div>
      <div className="bg-white img-book rounded border border-2 border-black">
        <div className="flex justify-content-center border-bottom border-2 border-black p-2">
          <img
            src="./portadas-libros-big-2019101610.jpg"
            width={"150px"}
            alt="x"
          />
        </div>
        <div className="p-2 rounded-bottom text-bg-light">
          <p>precio: $ 00.000</p>
          <h2
            style={{
              fontSize: "18px",
              lineHeight: "1.2",
              maxHeight: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Name book with a very long title that will be truncated if it
            exceeds the maximum height
          </h2>
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
