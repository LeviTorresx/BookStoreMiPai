import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md"; // Icono para agregar cantidad
import { FaRegTrashCan } from "react-icons/fa6"; // Icono para eliminar elemento
import { IoMdRemoveCircleOutline } from "react-icons/io"; // Icono para disminuir cantidad

export default function ElementsCart({
  book, // Objeto que representa un libro en el carrito
  handleRemoveFromCart, // Función para eliminar un libro del carrito
  handleIncreaseQuantity, // Función para aumentar la cantidad de un libro en el carrito
  handleDecreaseQuantity, // Función para disminuir la cantidad de un libro en el carrito
}) {
  return (
    <div>
      {/* Elemento del carrito */}
      <ul className="px-3 py-1">
        <li className="text-black border border-2 border-black rounded p-2">
          <div className="d-flex mb-1">
            <div className="flex p-1">
              {/* Imagen del libro */}
              <img
                src={book.bookImage}
                alt="books"
                width={"120px"}
                className="rounded-3"
              />
            </div>
            <div className="">
              {/* Nombre del libro */}
              <h5 className="text-start m-2 fs-6">{book.bookName}</h5>
              {/* Precio del libro */}
              <span className="flex justify-content-start px-2 py-2">
                {" "}
                {book.price.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                })}
              </span>

              {/* Botones para modificar la cantidad del libro */}
              <div className="flex justify-content-start px-1 py-2">
                {/* Botón para aumentar cantidad */}
                <button
                  className="btn-shopping-cart"
                  onClick={() => handleIncreaseQuantity(book)}
                >
                  <MdOutlineAddCircleOutline size={"25px"} />
                </button>
                {/* Cantidad actual del libro */}
                <span className="px-2">{book.quantity}</span>
                {/* Botón para disminuir cantidad */}
                <button
                  className="btn-shopping-cart"
                  onClick={() => handleDecreaseQuantity(book)}
                >
                  {" "}
                  <IoMdRemoveCircleOutline size={"25px"} />
                </button>
              </div>
            </div>
            {/* Botón para eliminar el libro del carrito */}
            <div className="ms-auto p-2">
              <button
                className="btn-shopping-cart text-danger"
                onClick={() => handleRemoveFromCart(book)}
              >
                <FaRegTrashCan size={"20px"} />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
