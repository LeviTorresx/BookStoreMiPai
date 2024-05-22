import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import VisualizerBook from "./VisualizerBook";

export default function Books({ book, addToCart }) {

  const [statusModal, setStatusModal] = useState(false);
  const [visualizerBook, setVisualizerBook] = useState(null);

  const openModal = () => {
    setStatusModal(true);
  };

  const closeModal = () => {
    setStatusModal(false);
  };

  const handleOpenPrevizualizer = (book) =>{
    setVisualizerBook(book);
    openModal();
  };

  return (
    <div>
      <div className="bg-white img-book rounded border border-2 border-black">
        <div className="flex justify-content-center border-bottom border-2 border-black p-2">
          <img
            className="px-1 my-3"
            src={book.bookImage}
            width={"300px"}
            alt="x"
          />
        </div>
        <div className="p-2 rounded-bottom text-bg-light">
          <p>
            precio:{" "}
            {book.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </p>
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
            {book.bookName}
          </h2>
          <div className="flex justify-content-between"> 
            <p>{book.author}</p>
            <button className="btn btn-ico mb-2 px-2 py-0" onClick={() => handleOpenPrevizualizer(book)}>
              <FaEye />
            </button>
          </div>

          <div className="text-center">
            <button
              className="btn-cart w-100 p-2"
              onClick={() => addToCart(book)}
            >
              <FaShoppingCart className="mx-2" />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      {statusModal && (
        <VisualizerBook closeModal={closeModal} book={visualizerBook} addCart={addToCart} />
      )}
    </div>
  );
}
