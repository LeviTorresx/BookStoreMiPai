import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Information from "./Informartion";
import ProductsToPay from "./ProductsToPay";
import PaymentMethods from "./PaymentMethods";
import { getUserData } from "../../utils/GetUser";
import axios from "axios";
import Invoice from "../../utils/Invoice";

export default function PaymentPage() {
  // Estado para almacenar los datos del usuario
  const [user, setUser] = useState(getUserData());
  // Estado para almacenar el monto total del pago
  const [totalAmount, setTotalAmount] = useState(0);
  // Estado para almacenar los libros vendidos
  const [booksSell, setBooksSell] = useState(null);
  // Estado para controlar la visibilidad del modal de factura
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  // Hook de navegación
  let navigate = useNavigate();

  // Fecha de la orden
  const orderDate = new Date();

  // Función para formatear la fecha en formato DD/MM/YY
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son de 0 a 11
    const year = String(date.getFullYear()).slice(-2); // Tomar los últimos 2 dígitos del año
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(orderDate);

  // Función para manejar la salida de la página
  const handleExit = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Al salir tu compra se cancelará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("booksShipping");
        navigate("/");
      }
    });
  };

  // Función para manejar el pago
  const handlePayment = async () => {
    const booksShipping = JSON.parse(localStorage.getItem("booksShipping"));
    setBooksSell(booksShipping);
    const books = booksShipping.map((book) => ({
      bookId: book.bookId,
      quantity: book.quantity,
    }));

    const bookOrderDto = {
      orderValue: totalAmount,
      userId: user.userId,
    };

    const requestData = {
      bookOrderDto: bookOrderDto,
      books: books,
      date: formattedDate,
    };

    try {
      // Mostrar alerta de carga
      Swal.fire({
        title: "Procesando pago",
        text: "Por favor, espera unos momentos...",
        allowOutsideClick: false,
        timer: 20000, // Tiempo de espera en milisegundos (20 segundos)
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      // Simular una espera de 2 segundos (puedes quitar esta línea en tu código final)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Realizar la solicitud de pago
      await axios.post(
        "http://localhost:8080/book-orders/save-book-order",
        requestData
      );

      // Ocultar la alerta de carga
      Swal.close();
      
      // Mostrar mensaje de éxito
      Swal.fire(
        "Pago exitoso",
        "Tu pago ha sido procesado correctamente",
        "success"
      );

      // Mostrar el modal de factura
      setShowInvoiceModal(true);

      // Limpiar el almacenamiento local
      localStorage.removeItem("booksShipping");
    } catch (error) {
      console.error("Error:", error);
      // Ocultar la alerta de carga en caso de error
      Swal.close();
      // Mostrar mensaje de error
      Swal.fire("Error", "Hubo un problema al procesar el pago", "error");
    }
  };

  return (
    <div className="bg-login">
      <h1 className="text-center py-3 text-white">PaymentPage</h1>
      <div className="flex justify-content-center p-4">
        <div className="m-3">
          {/* Componente para mostrar los productos a pagar */}
          <ProductsToPay setTotalAmount={setTotalAmount} />
        </div>
        <div className="m-3">
          {/* Componente para mostrar la información de pago */}
          <Information />
          <div className="bg-body rounded-bottom-2">
            {/* Componente para seleccionar el método de pago */}
            <PaymentMethods />
            <div className="text-center p-2">
              {/* Botones para salir y pagar */}
              <button className="button bg-danger" onClick={handleExit}>
                Salir
              </button>
              <button className="button" onClick={handlePayment}>
                Pagar
              </button>
            </div>
          </div>
        </div>
        {/* Modal de factura */}
        {showInvoiceModal && (
          <div
            className="modal fade show pt-5 bg-secondary bg-opacity-50"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content p-3">
                <button
                  className="btn-close"
                  onClick={() => setShowInvoiceModal(false)}
                >
                  &times;
                </button>
                {/* Componente de factura */}
                <Invoice
                  booksShipping={booksSell}
                  totalAmount={totalAmount}
                  formattedDate={formattedDate}
                  client={user}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
