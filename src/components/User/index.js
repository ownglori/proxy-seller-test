import React from "react";
import {Link} from "react-router-dom";


export const UserComponent = ({user}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {user.username}
        </h5>
        <p className="card-text">
          {user.name}
        </p>
        <Link to={`/posts/${user.id}`} className="btn btn-primary w-100 mb-2">
          Posts
        </Link>
        <Link to={`/albums/${user.id}`} className="btn btn-primary w-100">
          Albums
        </Link>
      </div>
    </div>
  );
};
