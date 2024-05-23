import React, { useState } from "react";
import ElementsCart from "./ElementsCart"; // Componente para mostrar elementos del carrito
import { useNavigate } from "react-router-dom"; // Hook de navegación
import { getUserData } from "../../utils/GetUser"; // Función para obtener datos de usuario
import Swal from "sweetalert2"; // Librería para mostrar alertas

export default function ShoppingCart({
  isOpen, // Estado para controlar si el carrito está abierto o cerrado
  toggle, // Función para alternar entre abrir y cerrar el carrito
  books, // Array de libros en el carrito
  handleRemoveFromCart, // Función para eliminar un libro del carrito
  handleIncreaseQuantity, // Función para aumentar la cantidad de un libro en el carrito
  handleDecreaseQuantity, // Función para disminuir la cantidad de un libro en el carrito
  totalPrice, // Precio total de los libros en el carrito
}) {
  // Hook de navegación
  let navigation = useNavigate();

  // Estado local para almacenar los datos del usuario
  const [user, setUser] = useState(getUserData());

  // Función para manejar la acción de compra
  const handleBuy = () => {
    // Almacena los libros en localStorage para su envío
    localStorage.setItem("booksShipping", JSON.stringify(books));

    // Verifica si hay libros en el carrito
    if (validateBooks()) {
      // Si el usuario está autenticado, redirige a la página de pago; de lo contrario, redirige a la página de inicio de sesión
      if (user) {
        navigation("/payment");
      } else {
        navigation("/login");
      }
    } else {
      // Muestra una alerta si no hay libros en el carrito
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay libros en el carrito",
      });
    }
  };

  // Función para validar si hay libros en el carrito
  const validateBooks = () => {
    // Obtiene los libros del localStorage
    let booksInCart = localStorage.getItem("booksShipping");
    // Parsea los libros a un array
    let booksArray = JSON.parse(booksInCart);
    // Retorna true si hay libros en el carrito, de lo contrario, retorna false
    return booksArray && booksArray.length > 0;
  };

  return (
    <div>
      {/* Sidebar del carrito */}
      <div className={`sidebar-cart ${isOpen ? "open" : ""}`}>
        <div className="text-center">
          <h3>Shopping cart</h3>
          <div>
            {/* Lista de elementos del carrito */}
            <div className="overflow-auto" style={{ maxHeight: "600px" }}>
              {books.map((book, index) => (
                <ElementsCart
                  key={index}
                  book={book}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
            </div>
            {/* Total del carrito */}
            <div className="text-center">
              Total:
              {totalPrice.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </div>
            {/* Botones para cerrar el carrito y proceder con la compra */}
            <div className="pt-4">
              <button className="button" onClick={toggle}>
                Cerrar
              </button>
              <button className="button" onClick={handleBuy}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
