import React from "react";


export const Loading = () => {
  return (
    <div
      className="bg-white position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
