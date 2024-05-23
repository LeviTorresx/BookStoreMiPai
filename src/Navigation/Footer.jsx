import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="content-footer border-top border-black mt-4">
      <div className="flex justify-content-between p-2">
        <div>
          <img src="./logoMipaiBookstoreFull.png" alt="" width={"180"} />
        </div>
        <div>
          <h4 className="fw-bold"> Nuestra tienda</h4>
          <h5>
            <a href="https://github.com/LeviTorresx">Sobre nosotros</a>
          </h5>
        </div>
        <div>
          <h4 className="fw-bold">Contáctanos</h4>
          <h6><TfiEmail size={"30"}/> mipaibookstore@gmail.com </h6>
          <h6><FaWhatsapp size={"30"}/> +57 304 3600010 </h6>
        </div>
        <div>
          <h4 className="fw-bold">Síguenos</h4>
          <h6><PiFacebookLogoBold size={"30"}/></h6>
          <h6><FaInstagram size={"30"}/></h6>
        </div>
      </div>
    </div>
  );
}
