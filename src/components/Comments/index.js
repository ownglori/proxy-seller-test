import React from "react";
import {CommentComponent} from "@/components";


export const CommentsComponent = ({comments}) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="row g-3">
        <div className="col-12">
          <h5>Comments not found</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {comments.map(comment => (
        <div key={comment.id} className="col-12">
          <CommentComponent comment={comment}/>
        </div>
      ))}
    </div>
  );
};
