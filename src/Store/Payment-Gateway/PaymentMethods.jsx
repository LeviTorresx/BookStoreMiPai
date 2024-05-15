import React, { useState } from 'react';

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className='p-4 bg-body rounded-bottom-2'>
      <h5>Selecciona un Método de Pago</h5>
      <form>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="tarjetaCredito"
            checked={selectedMethod === 'tarjetaCredito'}
            onChange={handleMethodChange}
          />
          Tarjeta de Crédito
        </label>
        <br />
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="tarjetaDebito"
            checked={selectedMethod === 'tarjetaDebito'}
            onChange={handleMethodChange}
          />
          Tarjeta de Débito
        </label>
        <br />
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="pse"
            checked={selectedMethod === 'pse'}
            onChange={handleMethodChange}
          />
          PSE (Pagos Seguros en Línea)
        </label>
        <br />
        {/* Aquí puedes agregar más opciones de métodos de pago con inputs */}
      </form>
      <div>
        {selectedMethod && (
          <p>Has seleccionado: {selectedMethod}</p>
        )}
      </div>
    </div>
  );
}
