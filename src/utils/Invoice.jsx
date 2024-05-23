import React from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

/**
 * Componente Invoice
 *
 * Este componente genera y muestra una factura de los libros comprados, permitiendo al usuario
 * descargarla como un archivo PDF. También incluye un botón para navegar de vuelta a la página principal.
 *
 * @param {Array} booksShipping - Array de objetos que contienen información de los libros comprados.
 * @param {number} totalAmount - Número que representa el monto total de la compra.
 * @param {string} formattedDate - Cadena que representa la fecha de la compra.
 * @param {Object} client - Objeto que contiene la información del cliente (nombre, apellido, correo, dirección).
 */

const Invoice = ({ booksShipping, totalAmount, formattedDate, client }) => {
  const navigate = useNavigate();

  /**
   * Navega a la página principal.
   */
  const returnPage = () => {
    navigate("/");
  };

  /**
   * Genera un archivo PDF de la factura utilizando jsPDF.
   */
  const generatePDF = () => {
    // Crea un nuevo documento PDF
    const doc = new jsPDF();

    // Agrega el título "Factura"
    doc.setFontSize(20);
    doc.text("Factura", 105, 20, null, null, "center");

    // Agrega el logo
    const logoImg = new Image();
    logoImg.src = "../logoMipaiBookstoreFull.png";
    doc.addImage(logoImg, "PNG", 15, 25, 60, 20);

    // Agrega la fecha
    doc.setFontSize(12);
    doc.text(formattedDate, 105, 30, null, null, "center");

    // Agrega los datos del cliente
    doc.setFontSize(12);
    doc.text(`Nombre: ${client.userName} ${client.lastName}`, 15, 50);
    doc.text(`Correo: ${client.email}`, 15, 60);
    doc.text(`Dirección: ${client.address}`, 15, 70);

    // Agrega la sección de libros comprados
    doc.setFontSize(17);
    doc.text("Libros comprados", 15, 80);
    let y = 90;

    booksShipping.forEach((book) => {
      // Agrega la imagen del libro
      const bookImg = new Image();
      bookImg.src = book.bookImage;
      doc.addImage(bookImg, "PNG", 15, y, 30, 40);

      // Agrega el nombre del libro
      doc.setFontSize(14);
      doc.text(book.bookName, 50, y + 10);

      // Agrega la cantidad y el precio del libro
      doc.setFontSize(12);
      doc.text(
        `${book.quantity} x ${book.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}`,
        50,
        y + 20
      );

      y += 40; // Ajusta la altura para el siguiente libro
    });

    // Agrega el total de la compra
    doc.setFontSize(17);
    doc.text(
      `Total: ${totalAmount.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      })}`,
      105,
      y
    );

    // Guarda el archivo PDF con el nombre especificado
    doc.save("factura-BookStoreMiPai.pdf");
  };

  return (
    <div id="invoice-content" className="p-2">
      {/* Encabezado de la factura con la fecha */}
      <div className="flex justify-content-end">
        <p className="fs-4">{formattedDate}</p>
      </div>

      {/* Sección del logo y título */}
      <div className="flex m-2">
        <img
          src="../logoMipaiBookstoreFull.png"
          alt="Logo"
          width={"200px"}
          className="mx-4 px-3"
        />
        <h2 className="fw-bold align-content-center">
          Tienda de libros digital
        </h2>
      </div>

      {/* Información del cliente */}
      <div className="p-2">
        <h5>
          A nombre de: {client.userName} {client.lastName}
        </h5>
        <h5>Correo: {client.email}</h5>
        <h5>Dirección: {client.address}</h5>
      </div>

      {/* Lista de libros comprados */}
      <div className="p-3">
        <h3>Libros comprados:</h3>
      </div>
      <ul
        className="border-bottom border-black overflow-y-auto"
        style={{ maxHeight: "200px" }}
      >
        {booksShipping.map((book) => (
          <li key={book.bookId} className="flex justify-content-between py-2">
            <div className="px-2 flex">
              <img
                src={book.bookImage}
                alt="Imagen del libro"
                style={{ width: "70px" }}
                className="rounded-3"
              />
              <p className="mx-2">{book.bookName}</p>{" "}
              <span className="text-danger-emphasis px-3">{book.bookType}</span>
            </div>
            <div>
              {book.quantity} x{" "}
              {book.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </div>
          </li>
        ))}
      </ul>

      {/* Total de la compra */}
      <p className="fs-3 p-3">
        Total:{" "}
        {totalAmount.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}
      </p>

      {/* Botones para descargar la factura y finalizar */}
      <button onClick={generatePDF} className="button">
        Descargar Factura
      </button>
      <button className="button" onClick={returnPage}>
        Finalizar
      </button>
    </div>
  );
};

export default Invoice;
