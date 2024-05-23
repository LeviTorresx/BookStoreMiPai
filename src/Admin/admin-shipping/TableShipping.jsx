import React, { useEffect, useState } from "react";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import ContentOrders from "./ContentOrders";

// Componente para mostrar la tabla de envíos
export default function TableShipping() {
  // Estados para almacenar la lista de órdenes, los libros seleccionados y el estado del modal
  const [orders, setOrders] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Función para cargar las órdenes desde el servidor al cargar el componente
  useEffect(() => {
    loadOrder();
  }, []);

  // Función para cargar las órdenes desde el servidor
  const loadOrder = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/book-orders/get-all-book-orders`
      );
      setOrders(result.data);
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  // Función para abrir el modal y mostrar los libros de una orden seleccionada
  const openModal = (books) => {
    setSelectedBooks(books);
    setShowModal(true);
  };

  // Renderiza el componente
  return (
    <div>
      <div className="z-3">
        {/* Renderiza la barra de navegación de administrador */}
        <NavBarAdmin />
        <div className="flex z-2 position-fixed">
          {/* Renderiza la barra lateral de administrador */}
          <SideBarAdmin />
        </div>
        <div className="container" style={{ paddingTop: "90px" }}>
          {/* Renderiza la tabla de órdenes */}
          <table className="table table-borderless rounded-table border">
            <thead className="thead">
              <tr className="text-center">
                <th scope="col">Id Orden</th>
                <th scope="col">Valor Orden</th>
                <th scope="col">Fecha Orden</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Orden</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapea la lista de órdenes y renderiza cada fila de la tabla */}
              {orders.map((order) => (
                <tr key={order.orderId} className="text-center">
                  <th scope="row">{order.orderId}</th>
                  <td>{order.orderValue}</td>
                  <td>{order.orderDate}</td>
                  <td> {order.userId}</td>
                  <td>
                    <div>
                      {/* Botón para abrir el modal y mostrar los libros de la orden */}
                      <button
                        className="btn"
                        onClick={() => openModal(order.books)}
                      >
                        {" "}
                        <FaEye size={"30px"} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Renderiza el modal si showModal es verdadero */}
        {showModal && (
          <div
            className="modal fade show pt-5 bg-secondary bg-opacity-50"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content p-3">
                {/* Botón para cerrar el modal */}
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                {/* Renderiza el contenido de la orden dentro del modal */}
                <ContentOrders books={selectedBooks} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
