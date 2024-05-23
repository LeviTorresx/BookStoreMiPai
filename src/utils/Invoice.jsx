import React from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

const Invoice = ({ booksShipping, totalAmount, formattedDate, client }) => {
  let navigate = useNavigate();

  const returnPage = () => {
    navigate("/");
  };
  const generatePDF = () => {
    // Crea un nuevo documento PDF
    const doc = new jsPDF();

    // Encabezado
    doc.setFontSize(20);
    doc.text("Factura", 105, 20, null, null, "center");

    // Logo
    const logoImg = new Image();
    logoImg.src = "../logoMipaiBookstoreFull.png";
    doc.addImage(logoImg, "PNG", 15, 25, 60, 20);

    // Fecha
    doc.setFontSize(12);
    doc.text(formattedDate, 105, 30, null, null, "center");

    // Datos del cliente
    doc.setFontSize(12);
    doc.text(`Nombre: ${client.userName} ${client.lastName}`, 15, 50);
    doc.text(`Correo: ${client.email}`, 15, 60);
    doc.text(`Dirección: ${client.address}`, 15, 70);

    // Contenido de la factura
    doc.setFontSize(17);
    doc.text("Libros comprados", 15, 80);
    let y = 90;
    booksShipping.forEach((book) => {
      // Imagen del libro
      const bookImg = new Image();
      bookImg.src = book.bookImage;
      doc.addImage(bookImg, "PNG", 15, y, 30, 40);

      // Nombre del libro
      doc.setFontSize(14);
      doc.text(book.bookName, 50, y + 10);

      // Cantidad y Precio
      doc.setFontSize(12);
      doc.text(
        `${book.quantity} x ${book.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}`,
        50,
        y + 20
      );

      y += 40; // Ajuste de altura
    });

    // Total
    doc.setFontSize(17);
    doc.text(
      `Total: ${totalAmount.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      })}`,
      105,
      y
    );

    // Guardar el archivo
    doc.save("factura-BookStoreMiPai.pdf");
  };

  return (
    <div id="invoice-content" className="p-2 ">
      <div className="flex justify-content-end">
        <p className="fs-4">{formattedDate}</p>
      </div>

      <div className="flex m-2">
        <img
          src="../logoMipaiBookstoreFull.png"
          alt=""
          width={"200px"}
          className="mx-4 px-3"
        />
        <h2 className="fw-bold align-content-center">
          Tienda de libros digital
        </h2>
      </div>
      <div className="p-2">
        <h5>
          A nombre de: {client.userName} {client.lastName}
        </h5>
        <h5> Correo: {client.email}</h5>
        <h5> Direccion: {client.address} </h5>
      </div>
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
                alt="img"
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
      <p className="fs-3 p-3">
        Total:{" "}
        {totalAmount.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}
      </p>

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
