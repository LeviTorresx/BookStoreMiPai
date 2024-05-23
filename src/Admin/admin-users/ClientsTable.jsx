import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import Swal from "sweetalert2";

// Componente para mostrar la tabla de clientes
export default function ClientsTable() {
  // URL base para las solicitudes HTTP
  const urlBase = "http://localhost:8080/users";

  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState([]);

  // Función para cargar la lista de clientes desde el servidor al cargar el componente
  useEffect(() => {
    loadClients();
  }, []);

  // Función para cargar la lista de clientes desde el servidor
  const loadClients = async () => {
    try {
      const result = await axios.get(`${urlBase}/get-all-users`);
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  // Función para eliminar un cliente
  const deleteClient = async (id) => {
    try {
      // Envía una solicitud HTTP DELETE al servidor para eliminar el cliente
      await axios.delete(`${urlBase}/delete-user?userId=${id}`);
      // Actualiza el estado de los usuarios filtrando el cliente eliminado
      setUsers(users.filter((user) => user.userId !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Función para manejar la búsqueda de usuarios
  const handleSearch = (searchTerm) => {
    // Filtra los usuarios basados en el término de búsqueda
    const filtered = users.filter(
      (user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Si no se encuentran usuarios coincidentes, muestra un mensaje
    if (filtered.length === 0) {
      Swal.fire({
        title: "No hay coincidencias",
        text: "No se encontraron usuarios que coincidan con los criterios de búsqueda.",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    } else {
      // Actualiza la lista de usuarios con los usuarios filtrados
      setUsers(filtered);
    }
  };

  // Renderiza el componente
  return (
    <div>
      <div className="z-3">
        {/* Renderiza la barra de navegación de administrador */}
        <NavBarAdmin onSearch={handleSearch} />
        <div className="flex z-2 position-fixed">
          {/* Renderiza la barra lateral de administrador */}
          <SideBarAdmin />
        </div>
        <div className="container" style={{ paddingTop: "90px" }}>
          {/* Renderiza la tabla de usuarios */}
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
              {/* Mapea la lista de usuarios y renderiza cada fila de la tabla */}
              {users.map((user) => (
                <tr key={user.userId} className="text-center">
                  <th scope="row">{user.userId}</th>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <div>
                      {/* Botón para eliminar el usuario */}
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
