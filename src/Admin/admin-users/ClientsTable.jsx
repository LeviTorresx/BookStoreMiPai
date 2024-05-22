import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import Swal from "sweetalert2";

export default function ClientsTable() {
  const urlBase = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const result = await axios.get(`${urlBase}/get-all-users`);
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteClient = async (id) => {
    try {
      await axios.delete(`${urlBase}/delete-user?userId=${id}`);
      setUsers(users.filter((user) => user.userId !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      Swal.fire({
        title: "No hay coincidencias",
        text: "No se encontraron usuarios que coincidan con los criterios de búsqueda.",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    } else {
      setUsers(filtered);
    }
  };

  return (
    <div>
      <div className="z-3">
        <NavBarAdmin onSearch={handleSearch} />
        <div className="flex z-2 position-fixed">
          <SideBarAdmin />
        </div>
        <div className="container" style={{ paddingTop: "90px" }}>
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId}>
                  <th scope="row">{user.userId}</th>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <div>
                      <Link
                        to={`/user/${user.userId}`}
                        className="btn btn-primary btn-sm me-3"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteClient(user.userId)}
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
  );
}
