
import React, { useState} from "react";
import Books from "./Books";


export default function ProductsBooks( {books, load, showBook, onAddToCart}) {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (book) => {
    const updatedCartItems = [...cartItems, book];
    setCartItems(updatedCartItems);
    console.log(updatedCartItems); // Mostrar los elementos actualizados en la consola
    // Llamar a la función proporcionada por el padre para enviar el array actualizado
    if (onAddToCart) {
      onAddToCart(updatedCartItems);
    }
  };


  return (
    <div>
      {load ? (
        <div className="text-center m-5">
          <div className="spinner-border m-5" role="status" style={{ width: "4rem", height: "4rem" }}>
            <span className="visually-hidden"> Loading...</span>
          </div>
        </div>
      ) : (
        <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4 ${showBook ? 'fade-in' : ''}`}>
          {books.map((book) => (
            <div key={book.bookId} className="col">
              <Books book={book} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
