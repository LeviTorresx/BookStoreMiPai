import React, { useEffect, useState } from "react";
import NavigationStore from "../Navigation/NavigationStore";
import SideBar from "../Navigation/SideBar";
import ProductsBooks from "./ProductsBooks";
import Footer from "../Navigation/Footer";

export default function Store() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    console.log("Datos almacenados en localStorage:", storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return ( 
    <div className=" z-3">
      {userData ? (
        <div>
        <NavigationStore userName={userData.userName} userLog={true}  />
        </div>
      ): (<NavigationStore/>)}
        
      <div className="flex z-2 position-fixed">
        <SideBar />
      </div>
      <div className="content z-1">
        <div>
          <ProductsBooks/>
          <ProductsBooks/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
