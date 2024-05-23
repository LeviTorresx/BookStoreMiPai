import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComingSoo() {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };
  return (
    <div className="bg-login z-1">
      <div className="center-screen z-0">
        <div className="content-comingSoon z-2">
          <img src="../logoMipaiBookstore1.png" width={"500px"} alt="wlo" />
          <div className="text-center">
            <div className="p-2 rounded-2 ">
              <div>
                <span className="fw-bold fs-1 text-black bg-container p-3 rounded-4 shadow-lg">
                  Pronto volveremos con mas :D
                </span>
              </div>
              <div className="mt-5">
                <div className="spinner-grow text-black" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-black" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-black" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button className="button " onClick={handleReturn}>
              Regresar a la tienda
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
