import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Loading, PostsComponent} from "@/components";
import {fetchError} from "@/helpers";


export const Posts = ({fetchInitialData, data}) => {
  const [posts, setPosts] = useState(__isClient__ ? [] : data);
  const [loading, setLoading] = useState(!posts);

  const {userId} = useParams();

  const fetchSuccess = data => {
    setPosts(data);
    setLoading(false);
  };

  const fetchData = () => {
    fetchInitialData(userId)
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  };

  useEffect(fetchData, [userId]);

  if (loading) {
    return <Loading/>
  }

  return (
    <>
      <Helmet>
        <title>Posts by user title</title>
        <meta name="description" content="Posts by user description"/>
      </Helmet>
      <div className="py-3">
        <PostsComponent posts={posts}/>
      </div>
    </>
  );
};
