import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Information from "./Informartion";
import ProductsToPay from "./ProductsToPay";
import PaymentMethods from "./PaymentMethods";
import { getUserData } from "../../utils/GetUser";

export default function PaymentPage() {
  const [user, setUser] = useState(getUserData());
  const [totalAmount, setTotalAmount] = useState(0); // Nuevo estado para el total a pagar
  let navigate = useNavigate();

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
    const bookDetails = booksShipping.map((book) => ({
      id: book.id,
      quantity: book.quantity,
    }));

    const paymentData = {
      userId: user.userId,
      date: new Date().toISOString(),
      total: totalAmount, // Usar el totalAmount calculado
    };

    try {
      const response = "";

      if (!response.ok) {
        throw new Error("Error en la petición");
      }

      const data = await response.json();
      // Manejar la respuesta del backend
      Swal.fire(
        "Pago exitoso",
        "Tu pago ha sido procesado correctamente",
        "success"
      );
      navigate("/success"); // Redirigir a la página de éxito
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
      </div>
    </div>
  );
}
