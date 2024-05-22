import React from "react";

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
              <img className="rounded-3" src={book.bookImage} width={"400px"} alt="x" />
            </div>

            <div className="px-3">
              <div>
                <h3>{book.bookName}</h3>
                <h6>{book.author}</h6>
              </div>
              <div className="container-visualizer">
                <span>{book.bookDescription}</span>
              </div>
              <div className="flex justify-content-between my-3 text-center">
                <div className="px-2 fw-bold">
                  Tipo:
                  <h6>{book.bookType}</h6>
                </div>
                <div className="px-2 fw-bold">
                  Editorial:
                  <h6>{book.editorial}</h6>
                </div>
                <div className="px-2 fw-bold">
                  Categoria:
                  <h6>{book.category}</h6>
                </div>
              </div>
              <div> 
                <h3 className="text-center">
                  precio:{" "}
                  {book.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </h3>
                <div className="text-center">
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
