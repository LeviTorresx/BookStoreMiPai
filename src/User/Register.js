import React, { useState } from "react";
import NavigationInit from "../Navigation/NavigationInit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {

  let navegacion = useNavigate();
  
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    userPassword: "",
    userType: "CLIENT",
    phoneNumber: "",
    address: ""
    
  });

  const toggleAdditionalInfo = () => {
    setUser({
      ...user,
      showAdditionalInfo: !user.showAdditionalInfo
    });
  };

  const onInputChange = (e) => {
      //spread opertator ... (expandir atributos)
      setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      const urlBase="http://localhost:8080/users/save-user";
      await axios.post(urlBase, user);
      // redirifuimos a inicio
      navegacion('/login') 
  }

  const {userNamen, lastName, email, userPassword, userType, phoneNumber, address} = user
  
  return (
    <div>
      <div className="bg-container-log">
        <NavigationInit />
        <div>
          <div className="register-form-container">
            <h2 className="container-button">Register</h2>
            <form  onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="userName"
                  value={user.userName}
                  onChange={(e)=> onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="LastName"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e)=> onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={(e)=> onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Password"
                  name="userPassword"
                  value={user.userPassword}
                  onChange={(e)=> onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={(e)=> onInputChange(e)}
                  required
                />
              </div>
              <div
                className="additional-info-toggle container-button" 
                onClick={toggleAdditionalInfo}
              >
                {user.showAdditionalInfo ? "-" : "+"} Información Adicional
              </div>
              {user.showAdditionalInfo && (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Address/City/PostalCode"
                      name="address"
                      value={user.address}
                      onChange={(e)=> onInputChange(e)}
                      required
                    />
                  </div>
                </>
              )}
              <div className="container-button">
                <button className="button" type="submit">Registrarse</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
