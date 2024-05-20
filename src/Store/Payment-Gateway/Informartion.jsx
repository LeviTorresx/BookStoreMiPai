import React from "react";
import { getUserData } from "../../utils/GetUser";

export default function Informacion() {

const userData = getUserData();
  return (
    <div className="bg-body p-4 rounded-top-2">
      <div>
        <h2>Informacion</h2>
        <div>
          <div>
            Nombre:
            <span> {userData ? userData.userName : "No disponible"} </span>
          </div>
          <div>
            Email:
            <span> {userData ? userData.email : "No disponible"}</span>
          </div>
          <div>
            Direccion:
            <span> {userData ? userData.address : "No disponible"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
