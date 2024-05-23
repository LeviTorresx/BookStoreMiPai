import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import VisualizerBook from "./VisualizerBook";

/**
 * Componente para mostrar un libro específico en la tienda.
 * 
 * @param {Object} book - Objeto que representa el libro.
 * @param {Function} addToCart - Función para agregar el libro al carrito.
 * @returns {JSX.Element} El elemento JSX que representa el libro en la tienda.
 */
export default function Books({ book, addToCart }) {

  const [statusModal, setStatusModal] = useState(false);
  const [visualizerBook, setVisualizerBook] = useState(null);

  // Función para abrir el modal
  const openModal = () => {
    setStatusModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setStatusModal(false);
  };

  // Función para abrir el visualizador de libro
  const handleOpenPrevizualizer = (book) =>{
    setVisualizerBook(book);
    openModal();
  };

  return (
    <div>
      <div className="bg-white img-book rounded border border-2 border-black">
        <div className="flex justify-content-center border-bottom border-2 border-black p-2">
          <img
            className="px-1 my-3 rounded-4"
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
            {/* Botón para abrir el visualizador de libro */}
            <button className="btn btn-ico mb-2 px-2 py-0" onClick={() => handleOpenPrevizualizer(book)}>
              <FaEye />
            </button>
          </div>

          <div className="text-center">
            {/* Botón para agregar al carrito */}
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

      {/* Renderizar el visualizador de libro si el modal está abierto */}
      {statusModal && (
        <VisualizerBook closeModal={closeModal} book={visualizerBook} addCart={addToCart} />
      )}
    </div>
  );
}
