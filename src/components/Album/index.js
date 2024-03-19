import React from "react";
import {Link} from "react-router-dom";


export const AlbumComponent = ({album}) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title flex-grow-1">
          {album.title}
        </h5>
        <Link to={`/album/${album.id}`} className="btn btn-primary w-100">
          View more
        </Link>
      </div>
    </div>
  );
};
