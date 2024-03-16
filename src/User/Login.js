import React, { useState } from "react";
import NavigationInit from "../Navigation/NavigationInit";

export default function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className="bg-container-log">
      <NavigationInit />
      <div>
        <div className="login-form-container">
          <img src="/logoMipaiBookstore1.png" alt="" />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              Enter your email
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              Enter your password
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="container-button">
              <button className="button" type="submit">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="login-form-container">
        <span className="textmov">don't have an account?</span>
        <a href="/register">
          <button type="submit" className="button btn-singup" style={{marginLeft:"50px"}}>
            Sing up
          </button>
        </a>
      </div>
    </div>
  );
}
