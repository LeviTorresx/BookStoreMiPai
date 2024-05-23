import React, { useEffect, useState } from "react";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import ContentOrders from "./ContentOrders";

export default function TableShipping() {
  const [orders, setOrders] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/book-orders/get-all-book-orders`
      );
      setOrders(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const openModal = (books) => {
    console.log(books)
    setSelectedBooks(books);
    setShowModal(true);
  };

  return (
    <div>
      <div className="z-3">
        <NavBarAdmin />
        <div className="flex z-2 position-fixed">
          <SideBarAdmin />
        </div>
        <div className="container" style={{ paddingTop: "90px" }}>
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
              {orders.map((order) => (
                <tr key={order.orderId} className="text-center">
                  <th scope="row">{order.orderId}</th>
                  <td>{order.orderValue}</td>
                  <td>{order.orderDate}</td>
                  <td> {order.userId}</td>
                  <td>
                    <div>
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
        {showModal && (
          <div
            className="modal fade show pt-5 bg-secondary bg-opacity-50"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content p-3">
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                <ContentOrders books={selectedBooks} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
