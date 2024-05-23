import React from "react";

/**
 * Componente VisualizerBook
 * 
 * Este componente muestra los detalles de un libro en un modal.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} props.closeModal - Función para cerrar el modal.
 * @param {Object} props.book - El objeto del libro que se visualizará.
 * @param {Function} props.addCart - Función para agregar el libro al carrito.
 * 
 * @returns {JSX.Element} El componente para visualizar los detalles de un libro.
 */
export default function VisualizerBook({ closeModal, book, addCart }) {
  return (
    <div className="modal fade show pt-5 bg-secondary bg-opacity-50" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="p-4 flex">
            <div className="mx-2">
              {/* Muestra la imagen del libro */}
              <img className="rounded-3" src={book.bookImage} width={"400px"} alt="x" />
            </div>

            <div className="px-3">
              <div>
                {/* Muestra el nombre del libro y el autor */}
                <h3>{book.bookName}</h3>
                <h6>{book.author}</h6>
              </div>
              <div className="container-visualizer">
                {/* Muestra la descripción del libro */}
                <span>{book.bookDescription}</span>
              </div>
              <div className="flex justify-content-between my-3 text-center">
                <div className="px-2 fw-bold">
                  Tipo:
                  {/* Muestra el tipo del libro */}
                  <h6>{book.bookType}</h6>
                </div>
                <div className="px-2 fw-bold">
                  Editorial:
                  {/* Muestra la editorial del libro */}
                  <h6>{book.editorial}</h6>
                </div>
                <div className="px-2 fw-bold">
                  Categoria:
                  {/* Muestra la categoría del libro */}
                  <h6>{book.category}</h6>
                </div>
              </div>
              <div> 
                <h3 className="text-center">
                  precio:{" "}
                  {/* Muestra el precio del libro */}
                  {book.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </h3>
                <div className="text-center">
                  {/* Botón para agregar el libro al carrito */}
                  <button
                    className="button btn-cart"
                    onClick={() => addCart(book)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
