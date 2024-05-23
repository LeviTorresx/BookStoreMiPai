import React, { useEffect, useState } from "react";

export default function ProductsToPay({ setTotalAmount }) {
  // Estado para almacenar los libros que se van a pagar
  const [booksToPay, setBooksToPay] = useState([]);
  // Estado para almacenar el precio total de los libros
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect se utiliza para realizar efectos secundarios después de que se renderiza el componente
  useEffect(() => {
    // Se obtienen los libros guardados en el local storage al cargar el componente
    const booksShipping = JSON.parse(localStorage.getItem("booksShipping"));
    if (booksShipping) {
      // Se actualiza el estado con los libros que se van a pagar
      setBooksToPay(booksShipping);
      // Se calcula el precio total sumando el precio de cada libro multiplicado por su cantidad
      const total = booksShipping.reduce((acc, book) => acc + book.price * book.quantity, 0);
      // Se actualiza el estado con el precio total
      setTotalPrice(total);
      // Se llama a la función pasada desde el padre para actualizar el total
      setTotalAmount(total);
    }
  }, [setTotalAmount]); // Se ejecuta cada vez que setTotalAmount cambia

  // El componente devuelve la representación visual de los libros que se van a pagar
  return (
    <div className="bg-body p-4 rounded-2">
      <div>
        {/* Título de la sección */}
        <h1 className="fw-bolder">Productos</h1>
        {/* Mostrar el total a pagar */}
        <h3>Total a pagar: {totalPrice.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</h3>
      </div>

      {/* Lista de libros que se van a pagar */}
      <div className="overflow-auto" style={{ maxHeight: "500px" }}>
        <ul>
          {booksToPay.map((book, index) => (
            <li key={index} className="flex justify-content-between py-2">
              {/* Imagen y nombre del libro */}
              <div className="px-2 flex">
                <img src={book.bookImage} alt="img" style={{width:"70px"}}  className="rounded-3"/>
                <p className="mx-2">{book.bookName}</p> <span className="text-danger-emphasis px-3">{book.bookType}</span>
              </div>
              {/* Cantidad y precio del libro */}
              <div>{book.quantity} x {book.price.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
