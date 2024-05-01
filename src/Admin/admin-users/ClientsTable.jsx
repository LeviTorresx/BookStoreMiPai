import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../Navigation/Home";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import SearchUser from "./SearchUser";

export default function ClientsTable() {
  const urlBase = "http://localhost:8080/users/get-all-users";

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadClient();
  }, []);

  const loadClient = async () => {
    try {
      const result = await axios.get(urlBase);
      console.log("result of load user");
      console.log(result.data);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
      // Puedes manejar el error de acuerdo a tus necesidades aquí
    }
  };

  const deleteClient = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    loadClient();
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Home/>
          </div>
          <div className="ps-5 my-3" style={{ marginLeft: "140px" }}>
            <h3> Table of users</h3>
          </div>
          <div style={{ marginRight: "75px"}}>
            <SearchUser/>
          </div>
        </div>
        <div className="flex z-2 position-fixed">
          <SideBarAdmin/>
        </div>
        <div className="container">
          <table className="table table-striped table-table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>

                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                //iteramos el arreglo de empleados
                user.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{user.userId}</th>
                    <td>{user.userName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td className="text-center">
                      <div>
                        <Link
                          to={`/editar/${user.idUser}`}
                          className="btn btn-primary btn-sm me-3"
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteClient(user.idUser)}
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
