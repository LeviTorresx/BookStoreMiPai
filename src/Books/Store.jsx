import React, { useEffect, useState } from "react";
import NavigationStore from "../Navigation/NavigationStrore";
import SideBar from "../Navigation/SideBar";
import ProductsBooks from "./ProductsBooks";
import CarrouselImg from "./CarrouselImg";


export default function Store() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return ( 
    <div className="bg-container z-3">
      {userData ? (
        <div>
        <NavigationStore userName={userData.name} />
        </div>
      ): (<NavigationStore/>)}
        
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
