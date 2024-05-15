import React from "react";

export default function Profile({ user, isOpenProfile, toggleProfile }) {
  return (
    <div>
      <div className={`sidebar-cart ${isOpenProfile ? "open" : " "}`}>
        <div className="text-center">
          <h3>{user.userName}</h3>
          <h4>
            {user.email}
          </h4>
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
