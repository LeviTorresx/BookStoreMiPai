import React, { useState } from "react";
import axios from "axios";
import NavigationInit from "../Navigation/NavigationInit";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

/**
 * Componente Login
 * 
 * Este componente permite a los usuarios iniciar sesión en el sistema.
 * 
 * @returns {JSX.Element} El componente de inicio de sesión.
 */
export default function Login() {
  // Hook para la navegación
  let navigation = useNavigate();

  // Estado para los datos del formulario de inicio de sesión
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /**
   * Maneja el cambio en los inputs del formulario.
   * 
   * @param {Object} e - El evento de cambio del input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * 
   * @param {Object} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST para iniciar sesión
      const response = await axios.post(
        "http://localhost:8080/users/login",
        formData
      );

      // Si la respuesta es exitosa
      if (response.data) {
        // Muestra un mensaje de éxito al usuario
        Swal.fire({
          icon: "success",
          title: "Has iniciado sesión",
          text: "Inicio de sesión exitoso",
        });

        // Obtiene los datos del usuario después del inicio de sesión
        const userDataResponse = await axios.get(
          `http://localhost:8080/users/get-user-by-email?email=${formData.email}`
        );

        // Si se obtienen los datos del usuario
        if (userDataResponse.data) {
          // Almacena los datos del usuario en localStorage
          localStorage.setItem(
            "userData",
            JSON.stringify(userDataResponse.data)
          );

          // Redirige al usuario a la página de inicio
          navigation("/");
        }
      } else {
        // Si las credenciales son inválidas, muestra un mensaje de error al usuario
        console.error("Invalid email or password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo o contraseña incorrecto, inténtalo de nuevo",
        });
      }
    } catch (error) {
      // En caso de error durante el inicio de sesión, muestra un mensaje de error al usuario
      console.error("Error during login:", error.response.data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again later.",
      });
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
