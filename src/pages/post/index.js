import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {CommentsComponent, Loading} from "@/components";
import {fetchError} from "@/helpers";


export const Post = ({fetchInitialData, data}) => {
  const [post, setPost] = useState(__isClient__ ? {comments: []} : data);
  const [loading, setLoading] = useState(!post);

  const {postId} = useParams();

  const fetchSuccess = data => {
    setPost(data);
    setLoading(false);
  };

  const fetchData = () => {
    fetchInitialData(postId)
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  };

  useEffect(fetchData, [postId]);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title + " title"}</title>
        <meta name="description" content={post.title + " description"}/>
      </Helmet>
      <div className="py-3">
        <h1>
          {post.title}
        </h1>
        <p dangerouslySetInnerHTML={{__html: post.body}}/>
        <h2>Comments</h2>
        <CommentsComponent comments={post.comments}/>
      </div>
    </>
  );
};
