import React from "react";

export default function Profile({ userName, handleClose, handleLogout }) {
  return (
    <div className="containers">
      <div className="flex justify-content-end">
        <div className="bg-body p-4 rounded border border-5 border-dark-subtle">
          <div className="border border-secondary rounded p-3">
            <div className="d-flex flex-column text-center">
              <p className="fs-2 fw-semibold">{userName}</p>
              <p className="fw-semibold">Email: Email user </p>
              <div className="m-2">
                <button className="button" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-content-end">
            <button className="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
