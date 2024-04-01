import React from "react";
import NavigationStore from "../Navigation/NavigationStrore";
import SideBar from "../Navigation/SideBar";
import ProductsBooks from "./ProductsBooks";
import CarrouselImg from "./CarrouselImg";

export default function Store() {
  return ( 
    <div className="bg-container z-3">
      <NavigationStore />
      <div className="flex z-2 position-fixed">
        <SideBar />
      </div>
      <div className="content z-1 position-relative">
        <CarrouselImg />
        <div className="my-5  ">
          <ProductsBooks />
          <ProductsBooks />
          <ProductsBooks />
          <ProductsBooks />
        </div>
      </div>
    </div>
  );
}
