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
  const [user, setUser] = useState(getUserData());
  const [totalAmount, setTotalAmount] = useState(0);
  const [booksSell, setBooksSell] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  let navigate = useNavigate();

  const orderDate = new Date();

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son de 0 a 11
    const year = String(date.getFullYear()).slice(-2); // Tomar los últimos 2 dígitos del año
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(orderDate);

  const handleExit = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Al salir tu compra se cancelara",
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
      await axios.post("http://localhost:8080/book-orders/save-book-order",requestData);
      console.log(requestData);
      Swal.fire(
        "Pago exitoso",
        "Tu pago ha sido procesado correctamente",
        "success"
      );
      setShowInvoiceModal(true);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Hubo un problema al procesar el pago", "error");
    }
  };

  return (
    <div className="bg-login">
      <h1 className="text-center py-3 text-white">PaymentPage</h1>
      <div className="flex justify-content-center p-4">
        <div className="m-3">
          <ProductsToPay setTotalAmount={setTotalAmount} />
        </div>
        <div className="m-3">
          <Information />
          <div className="bg-body rounded-bottom-2">
            <PaymentMethods />
            <div className="text-center p-2">
              <button className="button bg-danger" onClick={handleExit}>
                Salir
              </button>
              <button className="button" onClick={handlePayment}>
                Pagar
              </button>
            </div>
          </div>
        </div>
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
