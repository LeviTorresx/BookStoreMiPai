import React, { useState } from "react";
import axios from "axios";
import NavigationInit from "../Navigation/NavigationInit";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigation = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        formData
      );
      console.log(response.data);
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Has iniciado sesión",
          text: "Inicio de sesión exitoso",
        });

        const userDataResponse = await axios.get(
          `http://localhost:8080/users/get-user-by-email?email=${formData.email}`
        );

        if (userDataResponse.data) {
          localStorage.setItem(
            "userData",
            JSON.stringify(userDataResponse.data)
          );

          navigation("/");
        }
      } else {
        console.error("Invalid email or password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo o contraseña incorrecto, inténtalo de nuevo",
        }); // Mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error("Error during login:", error.response.data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again later.",
      }); // Mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="bg-login">
      <NavigationInit />

      <div>
        <div className="login-form-container">
          <img src="/logoMipaiBookstore1.png" alt="" />
          <h2 className="text-center p-3 fw-semibold">¡Bienvenido!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              Ingresa tu correo
              <input
                type="email"
                placeholder="Correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              Ingresa tu contraseña
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="container-button">
              <button className="button px-5" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="login-form-container">
        <span className="textmov">¿No tienes una cuenta todavía?</span>
        <a href="/register">
          <button
            type="submit"
            className="button btn-singup"
            style={{ marginLeft: "50px" }}
          >
            Registrarse
          </button>
        </a>
      </div>
    </div>
  );
}
