import React from "react";
import ProductsToPay from "./ProductsToPay";
import Informartion from "./Informartion";
import PaymentMethods from "./PaymentMethods";

export default function PaymentPage() {
  return (
    <div className="bg-login">
      <h1 className="text-center py-3 text-white  ">PaymentPage</h1>
      <div className="flex justify-content-center    p-4 ">
        <div className="m-3">
          <ProductsToPay />
        </div>
        <div className="m-3">
          <Informartion />
          <PaymentMethods/>
        </div>
      </div>
    </div>
  );
}
