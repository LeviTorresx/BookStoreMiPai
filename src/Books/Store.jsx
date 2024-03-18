import React from "react";
import NavigationStore from "../Navigation/NavigationStrore";
import SideBar from "../Navigation/SideBar";
import ProductsBooks from "./ProductsBooks";
import CarrouselImg from "./CarrouselImg";

export default function Store() {
  return (
    <div className="bg-container">
      <NavigationStore />
      <div className="flex">
        <SideBar />
      </div>
      <div className="content">
        <CarrouselImg/>
        <ProductsBooks />
        <ProductsBooks />
        <ProductsBooks />
        <ProductsBooks />


      </div>
    </div>
  );
}
  