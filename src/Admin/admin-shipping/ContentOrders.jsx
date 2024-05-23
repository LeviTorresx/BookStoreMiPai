import React from "react";

export default function ContentOrders({ books }) {
  return (
    <div>
      <div>
        <h3>Id de orden de libros</h3>
        <div>
          <ul>
            {books.map((book, index) => (
              <li key={index} className="flex justify-content-between py-2">
                <div className="px-2 flex">
                  <img
                    src={book.bookImage}
                    alt="img"
                    style={{ width: "70px" }}
                    className="rounded-3"
                  />
                  <p className="mx-2">{book.bookName}</p>{" "}
                  <span className="text-danger-emphasis px-3">
                    {book.bookType}
                  </span>
                </div>
                <div>
                  {" "}
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
