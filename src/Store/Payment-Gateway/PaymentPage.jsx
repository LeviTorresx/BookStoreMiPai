import React from "react";
import ProductsToPay from "./ProductsToPay";
import Informartion from "./Informartion";
import PaymentMethods from "./PaymentMethods";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PaymentPage() {
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

  return (
    <div className="bg-login">
      <h1 className="text-center py-3 text-white  ">PaymentPage</h1>
      <div className="flex justify-content-center    p-4 ">
        <div className="m-3">
          <ProductsToPay />
        </div>
        <div className="m-3">
          <Informartion />
          <div className="bg-body rounded-bottom-2">
            <PaymentMethods />
            <div className="text-center p-2">
              <button className="button bg-danger" onClick={handleExit}>
                Salir
              </button>
              <button className="button "> Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
