import React from "react";

export default function Profile({ userName, isOpenProfile, toggleProfile }) {
  return (
    <div>
      <div className={`sidebar-cart ${isOpenProfile ? "open" : " "}`}>
        <div className="text-center">
          <h3>{userName}</h3>
            <div className="pt-4">
               <button className="button" onClick={toggleProfile}>
              Close
            </button>
            <button className="button">
              Edit
            </button>
            </div>  
        </div>
      </div>
    </div>
  );
}
