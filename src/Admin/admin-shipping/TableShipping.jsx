import React, { useState } from 'react'
import NavBarAdmin from '../NavigationAdmin/NavBarAdmin';
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";

export default function TableShipping() {

    const [orders, setOrders] = useState([]);

  return (
    <div>
      <div className="z-3">
        <NavBarAdmin  />
        <div className="flex z-2 position-fixed">
          <SideBarAdmin/>
        </div>
        <div className="container" style={{ paddingTop: "90px" }}>
          <table className="table table-borderless rounded-table border">
            <thead className="thead">
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((user) => (
                <tr key={user.userId} className="text-center">
                  <th scope="row">{user.userId}</th>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
