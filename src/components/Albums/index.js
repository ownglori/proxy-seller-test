import React from "react";
import {AlbumComponent} from "@/components";


export const AlbumsComponent = ({albums}) => {
  if (!albums || albums.length === 0) {
    return (
      <div className="row g-3">
        <div className="col-12">
          <h5>Albums not found</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {albums.map(album => (
        <div key={album.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <AlbumComponent album={album}/>
        </div>
      ))}
    </div>
  );
};
