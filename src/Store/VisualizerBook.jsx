import React from "react";

export default function VisualizerBook({ closeModal, book, addToCart }) {
  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
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
          <div className="p-4">
            <img
              src={book.bookImage}
              width={"300px"}
              alt="x"
            />
            <span> {book.bookName}</span>
          </div>
          <div> 
            <button className="button btn-cart" onClick={addToCart(book)}> 
                comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
