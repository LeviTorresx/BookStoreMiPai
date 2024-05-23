import React, { useState } from "react";
import NavigationInit from "../Navigation/NavigationInit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

/**
 * Componente Register
 *
 * Este componente permite a los usuarios registrarse en el sistema proporcionando sus datos personales.
 * Incluye validación de usuarios existentes y muestra notificaciones al usuario sobre el éxito o fallo del registro.
 */

export default function Register() {
  // Hook para la navegación
  let navegacion = useNavigate();
  // País predeterminado para el selector
  const defaultCountry = "CO";

  // Estado inicial del formulario de usuario
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    userPassword: "",
    userType: "CLIENT",
    phoneNumber: "",
    address: "",
    showAdditionalInfo: false, // Estado para mostrar información adicional
  });

  // Lista de países y sus códigos de marcado
  const countries = [
    { code: "AR", name: "Argentina", dialCode: "+54" },
    { code: "BO", name: "Bolivia", dialCode: "+591" },
    { code: "BR", name: "Brazil", dialCode: "+55" },
    { code: "CL", name: "Chile", dialCode: "+56" },
    { code: "CO", name: "Colombia", dialCode: "+57" },
    { code: "EC", name: "Ecuador", dialCode: "+593" },
    { code: "GY", name: "Guyana", dialCode: "+592" },
    { code: "PY", name: "Paraguay", dialCode: "+595" },
    { code: "PE", name: "Peru", dialCode: "+51" },
    { code: "SR", name: "Suriname", dialCode: "+597" },
    { code: "UY", name: "Uruguay", dialCode: "+598" },
    { code: "VE", name: "Venezuela", dialCode: "+58" },
  ];

  /**
   * Alterna la visibilidad de la información adicional.
   */
  const toggleAdditionalInfo = () => {
    setUser({
      ...user,
      showAdditionalInfo: !user.showAdditionalInfo,
    });
  };

  /**
   * Maneja los cambios en los inputs del formulario.
   *
   * @param {Object} e - Evento de cambio del input.
   */
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  /**
   * Maneja el envío del formulario de registro.
   *
   * @param {Object} e - Evento de envío del formulario.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el usuario ya existe en la base de datos
    const userExists = await checkUserExists(user.email);

    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este correo ya existe",
      });
      navegacion("/login");
    } else {
      // Si el usuario no existe, procedemos con el registro
      const urlBase = "http://localhost:8080/users/save-user";
      await axios.post(urlBase, user);
      // Redirigimos a la página de inicio de sesión
      Swal.fire({
        icon: "success",
        title: "Has creado tu cuenta",
        text: "¡Registro exitoso!",
      });
      navegacion("/login");
    }
  };

  /**
   * Verifica si el usuario ya existe en la base de datos.
   *
   * @param {string} email - El correo electrónico del usuario.
   * @returns {boolean} - Retorna true si el usuario existe, de lo contrario false.
   */
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

  // Destructuración del estado del usuario
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
              <h2
                className="fw-semibold text-center"
                style={{ color: "black" }}
              >
                ¿Eres nuevo aquí?
              </h2>
            </div>
          </div>
          <div className="register-form-container w-50">
            <h2 className="container-button">Registro</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Apellido"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Correo"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="userPassword"
                  value={userPassword}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group flex">
                <select
                  name="selectedCountry"
                  onChange={(e) => onInputChange(e)}
                  className="w-50"
                  defaultValue={defaultCountry} // Establecer el país predeterminado como valor predeterminado
                >
                  <option value="">Pais</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.dialCode})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Número de teléfono"
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
                {user.showAdditionalInfo ? "-" : "+"} Información adicional
              </div>
              {user.showAdditionalInfo && (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Dirección/Ciudad/Código postal"
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
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
