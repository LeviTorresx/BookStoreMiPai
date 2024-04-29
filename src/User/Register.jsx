import React, { useState } from "react";
import NavigationInit from "../Navigation/NavigationInit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  let navegacion = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    userPassword: "",
    userType: "CLIENT",
    phoneNumber: "",
    address: "",
    showAdditionalInfo: false, // Agregamos el estado para mostrar información adicional
  });

  const toggleAdditionalInfo = () => {
    setUser({
      ...user,
      showAdditionalInfo: !user.showAdditionalInfo,
    });
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el usuario ya existe en la base de datos
    const userExists = await checkUserExists(user.email);

    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already exists!",
      });
      navegacion("/login");
    } else {
      // Si el usuario no existe, procedemos con el registro
      const urlBase = "http://localhost:8080/users/save-user";
      await axios.post(urlBase, user);
      // redirigimos a la página de inicio de sesión
      Swal.fire({
        icon: "success",
        title: "Nice",
        text: "Successful Registration!",
      });
      navegacion("/login");
    }
  };

  // Función para verificar si el usuario ya existe en la base de datos
  const checkUserExists = async (email) => {
    const url = `http://localhost:8080/users/exist-email?email=${encodeURIComponent(
      email
    )}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error al verificar si el usuario existe:", error);
      return false; // En caso de error, asumimos que el usuario no existe para evitar el registro accidental
    }
  };

  const {
    userName,
    lastName,
    email,
    userPassword,
    userType,
    phoneNumber,
    address,
  } = user;

  return (
    <div>
      <div className="bg-login">
        <NavigationInit />
        <div className="flex justify-content-center">
          <div className="p-5">
            <div className="p-5">
            <img src="./logoMipaiBookstore1.png" alt="" width={"300px"} />
            <h2 className="fw-semibold text-center" style={{color: "black"}}> Are you new here?</h2>
            </div>
          </div>
          <div className="register-form-container w-50">
            <h2 className="container-button">Register</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="LastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div
                className="additional-info-toggle container-button"
                onClick={toggleAdditionalInfo}
              >
                {user.showAdditionalInfo ? "-" : "+"} Additional information
              </div>
              {user.showAdditionalInfo && (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Address/City/PostalCode"
                      name="address"
                      value={address}
                      onChange={(e) => onInputChange(e)}
                      required
                    />
                  </div>
                </>
              )}
              <div className="container-button">
                <button className="button" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
