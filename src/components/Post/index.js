import React from "react";
import {Link} from "react-router-dom";


export const PostComponent = ({post}) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title flex-grow-1">
          {post.title}
        </h5>
        <Link to={`/post/${post.id}`} className="btn btn-primary w-100">
          Read more
        </Link>
      </div>
    </div>
  );
};
