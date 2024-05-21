import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";

export default function ClientsTable() {
  const urlBase = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    loadClient();
  }, [filteredUsers]);

  const loadClient = async () => {
    try {
      if (filteredUsers.length === 0) {
        const result = await axios.get(urlBase + "/get-all-users");
        setUsers(result.data);
        setFilteredUsers(result.data);
      } else {
        setUsers(filteredUsers);
      }
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteClient = async (id) => {
    try {
      
      await axios.delete(`${urlBase}/delete-user?userId=${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:"+id, error);
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
    setFilteredUsers(filtered);
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
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.userId}</th>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <div>
                      <Link
                        
                        className="btn btn-primary btn-sm me-3"
                      >
                        N/a
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
