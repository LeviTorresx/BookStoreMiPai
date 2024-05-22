import React from "react";
import { getUserData } from "../../utils/GetUser";

export default function Informacion() {

const userData = getUserData();
  return (
    <div className="bg-body p-4 rounded-top-2">
      <div>
        <h2 className="fw-bolder">Informacion</h2>
        <div>
          <div className="fw-bold fs-5">
            Nombre:
            <span className="fw-light"> {userData ? userData.userName : "No disponible"} {" "} {userData ? userData.lastName : "No disponible"} </span>
          </div>
          <div className="fw-bold fs-5">
            Email:
            <span className="fw-light"> {userData ? userData.email : "No disponible"}</span>
          </div>
          <div className="fw-bold fs-5">
            Direccion:
            <span className="fw-light"> {userData ? userData.address : "No disponible"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
