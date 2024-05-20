import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className="p-4 bg-body rounded-bottom-2">
      <h5>Selecciona un Método de Pago</h5>
      <div>
        <form className="flex p-2">
          <div className="m-3">
            <input
              className="r-boton"
              type="radio"
              name="paymentMethod"
              value="tarjetaCredito"
              id="tarjetaCredito"
              checked={selectedMethod === "tarjetaCredito"}
              onChange={handleMethodChange}
            />
            <label className="radio-custom" htmlFor="tarjetaCredito">
            <FaCreditCard size={"30px"} />
              <span className="mx-2"> Tarjeta</span>
            </label>
          </div>
          <div className="m-3">
            <input
              className="r-boton"
              type="radio"
              name="paymentMethod"
              value="tarjetaDebito"
              id="tarjetaDebito"
              checked={selectedMethod === "tarjetaDebito"}
              onChange={handleMethodChange}
            />
            <label className="radio-custom" htmlFor="tarjetaDebito">
            <FaPaypal size={"30px"}/>
              <span className="m-1"> Paypal</span>
            </label>
          </div>
          <div className="m-3">
            <input
              className="r-boton"
              type="radio"
              name="paymentMethod"
              value="pse"
              id="pse"
              checked={selectedMethod === "pse"}
              onChange={handleMethodChange}
            />
            <label className="radio-custom" htmlFor="pse">
            <FaComputer size={"30px"} />
              <span className="mx-2"> PSE </span>
            </label>
          </div>
          <div className="m-3">
            <input
              className="r-boton"
              type="radio"
              name="paymentMethod"
              value="efecty"
              id="efecty"
              checked={selectedMethod === "efecty"}
              onChange={handleMethodChange}
            />
            <label className="radio-custom" htmlFor="efecty">
            <SiCashapp size={"30px"}/>
              <span className="mx-2"> Efecty </span>
            </label>
          </div>
        </form>
      </div>
      <div>{selectedMethod && <p>Has seleccionado: {selectedMethod}</p>}</div>
    </div>
  );
}

