import React from "react";


export const CommentComponent = ({comment}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {comment.name}
        </h5>
        <p className="card-text" dangerouslySetInnerHTML={{__html: comment.body}}/>
      </div>
    </div>
  );
};
