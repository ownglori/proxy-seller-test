import React from "react";
import {PostComponent} from "@/components";


export const PostsComponent = ({posts}) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="row g-3">
        <div className="col-12">
          <h5>Users not found</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {posts.map(post => (
        <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <PostComponent post={post}/>
        </div>
      ))}
    </div>
  );
};
