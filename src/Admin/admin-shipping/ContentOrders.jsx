import React from "react";

// Componente para mostrar el contenido de las órdenes en un modal
export default function ContentOrders({ books }) {
  return (
    <div>
      <div>
        <h3>Id de orden de libros</h3>
        <div>
          <ul>
            {/* Mapea la lista de libros y renderiza cada uno en una lista */}
            {books.map((book, index) => (
              <li key={index} className="flex justify-content-between py-2">
                <div className="px-2 flex">
                  {/* Renderiza la imagen del libro */}
                  <img
                    src={book.bookImage}
                    alt="img"
                    style={{ width: "70px" }}
                    className="rounded-3"
                  />
                  {/* Renderiza el nombre del libro y su tipo */}
                  <p className="mx-2">{book.bookName}</p>{" "}
                  <span className="text-danger-emphasis px-3">
                    {book.bookType}
                  </span>
                </div>
                <div>
                  {/* Renderiza el precio del libro */}
                  {book.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
