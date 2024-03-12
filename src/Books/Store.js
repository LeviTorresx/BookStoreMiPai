import React from "react";
import NavigationStore from "../Navigation/NavigationStrore";
import SideBar from "../Navigation/SideBar";


export default function Store() {
  return (
    
    <div className="bg-container" >
      <NavigationStore/>
      <SideBar/> 
    </div>
  );
}
