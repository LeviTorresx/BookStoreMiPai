import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

export default function PaymentMethods() {
  // Estado para almacenar el método de pago seleccionado
  const [selectedMethod, setSelectedMethod] = useState("");

  // Función para manejar el cambio de método de pago
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  // Función para renderizar los campos de pago dependiendo del método seleccionado
  const renderPaymentFields = () => {
    switch (selectedMethod) {
      case "tarjetaCredito":
        return (
          <div>
            {/* Campos para tarjeta de crédito */}
            <div className="form-group mb-2">
              <label htmlFor="creditCardNumber">Número de Tarjeta</label>
              <input
                type="text"
                className="form-control"
                id="creditCardNumber"
                placeholder="1234 5678 9123 4567"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="creditCardName">Nombre en la Tarjeta</label>
              <input
                type="text"
                className="form-control"
                id="creditCardName"
                placeholder="Nombre completo"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="creditCardExpiry">Fecha de Expiración</label>
              <input
                type="text"
                className="form-control"
                id="creditCardExpiry"
                placeholder="MM/AA"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="creditCardCVV">CVV</label>
              <input
                type="text"
                className="form-control"
                id="creditCardCVV"
                placeholder="123"
              />
            </div>
          </div>
        );
      case "tarjetaDebito":
        return (
          <div>
            {/* Campo para correo electrónico de Paypal */}
            <div className="form-group mb-2">
              <label htmlFor="paypalEmail">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="paypalEmail"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
        );
      case "pse":
        return (
          <div>
            {/* Campos para PSE */}
            <div className="form-group mb-2">
              <label htmlFor="bank">Banco</label>
              <input
                type="text"
                className="form-control"
                id="bank"
                placeholder="Nombre del banco"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pseName">Nombre del Titular</label>
              <input
                type="text"
                className="form-control"
                id="pseName"
                placeholder="Nombre completo"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pseID">Número de Identificación</label>
              <input
                type="text"
                className="form-control"
                id="pseID"
                placeholder="123456789"
              />
            </div>
          </div>
        );
      case "efecty":
        return (
          <div>
            {/* Campos para Efecty */}
            <div className="form-group mb-2">
              <label htmlFor="efectyName">Nombre del Remitente</label>
              <input
                type="text"
                className="form-control"
                id="efectyName"
                placeholder="Nombre completo"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="efectyID">Número de Identificación</label>
              <input
                type="text"
                className="form-control"
                id="efectyID"
                placeholder="123456789"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="efectyPhone">Número de Teléfono</label>
              <input
                type="text"
                className="form-control"
                id="efectyPhone"
                placeholder="Número de teléfono"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="p-4 bg-body rounded-bottom-2 ">
      <h5 className="fw-bold fs-3">Selecciona un Método de Pago</h5>
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
              <FaPaypal size={"30px"} />
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
              <SiCashapp size={"30px"} />
              <span className="mx-2"> Efecty </span>
            </label>
          </div>
        </form>
      </div>
      <div className="payment-methods-container">
        <div className="payment-fields">{renderPaymentFields()}</div>
      </div>
    </div>
  );
}
