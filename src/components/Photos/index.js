import React from "react";
import {PhotoComponent} from "@/components";


export const PhotosComponent = ({photos}) => {
  if (!photos || photos.length === 0) {
    return (
      <div className="row g-3">
        <div className="col-12">
          <h5>Photos not found</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {photos.map(photo => (
        <div key={photo.id} className="col-12 col-md-6 col-xl-4">
          <PhotoComponent photo={photo}/>
        </div>
      ))}
    </div>
  );
};
