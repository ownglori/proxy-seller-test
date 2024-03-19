import React from "react";


export const PhotoComponent = ({photo}) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title flex-grow-1">
          {photo.title}
        </h5>
        <img src={photo.url} className="card-img-top" alt={photo.title}/>
      </div>
    </div>
  );
};
