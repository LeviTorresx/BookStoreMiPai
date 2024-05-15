import React, { useEffect, useState } from "react";

export default function ProductsToPay() {
  const [booksToPay, setBooksToPay] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Obtener los libros guardados en el local storage
    const booksShipping = JSON.parse(localStorage.getItem("booksShipping"));
    if (booksShipping) {
      setBooksToPay(booksShipping);
      const total = booksShipping.reduce((acc, book) => acc + book.price, 0);
      setTotalPrice(total);
    }
  }, []);

  return (
    <div className="bg-body p-4 rounded-2">
      <div>
        <h1>Productos</h1>
        <h3>Total a pagar: {totalPrice.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</h3>
      </div>

      <div className="overflow-auto" style={{ maxHeight: "500px" }}>
        <ul>
          {booksToPay.map((book, index) => (
            <li key={index} className="flex justify-content-between py-2">
              <div className="px-2 flex">
                <img src={book.bookImage} alt="img" style={{width:"70px"}}  className="rounded-3"/>
                <p className="mx-2">{book.bookName}</p>
              </div>
              <div>{book.price.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

