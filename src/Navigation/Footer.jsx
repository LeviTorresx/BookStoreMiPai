import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

// Componente Footer que muestra información de contacto y enlaces a redes sociales
export default function Footer() {
  return (
    <div className="content-footer border-top border-black mt-4">
      {/* Contenido del footer */}
      <div className="flex justify-content-between p-2">
        {/* Logo de la tienda */}
        <div>
          <img src="./logoMipaiBookstoreFull.png" alt="" width={"180"} />
        </div>
        {/* Enlaces al repositorio */}
        <div>
          <h4 className="fw-bold"> Repositorio</h4>
          <h5>
            <a href="https://github.com/LeviTorresx">GitHub</a>
          </h5>
        </div>
        {/* Información de contacto */}
        <div>
          <h4 className="fw-bold">Contáctanos</h4>
          <h6><TfiEmail size={"30"}/> mipaibookstore@gmail.com </h6>
          <h6><FaWhatsapp size={"30"}/> +57 304 3600010 </h6>
        </div>
        {/* Enlaces a redes sociales */}
        <div>
          <h4 className="fw-bold">Síguenos</h4>
          <h6><PiFacebookLogoBold size={"30"}/></h6>
          <h6><FaInstagram size={"30"}/></h6>
        </div>
      </div>
    </div>
  );
}
