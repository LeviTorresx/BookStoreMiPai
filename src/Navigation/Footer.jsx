import React from "react";

export default function Footer() {
  return (
    <div className="content-footer border-top border-black">
      <div className="flex justify-content-between p-2">
        <div>
          <img src="./logoMipaiBookstoreFull.png" alt="" width={"180"} />
        </div>
        <div >
            <h4 className="fw-bold"> Our company</h4>
            <h5>
                <a href="/">About us</a>
                
            </h5>
        </div>
        <div >
            <h4 className="fw-bold">Contact us</h4>
            <h6> mipaibookstore@gmail.com </h6>
            <h6> Tel: +57 304 3600010 </h6>
        </div>
        <div >
            <h4 className="fw-bold">We help you</h4>
            
        </div>
        <div className="fw-bold"    >
            Follow us
        </div>
      </div>
    </div>
  );
}
