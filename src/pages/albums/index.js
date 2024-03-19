import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Loading, AlbumsComponent} from "@/components";
import {fetchError} from "@/helpers";


export const Albums = ({fetchInitialData, data}) => {
  const [albums, setAlbums] = useState(__isClient__ ? [] : data);
  const [loading, setLoading] = useState(!albums);

  const {userId} = useParams();

  const fetchSuccess = data => {
    setAlbums(data);
    setLoading(false);
  };

  const fetchData = () => {
    fetchInitialData(userId)
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  };

  useEffect(fetchData, [userId]);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <Helmet>
        <title>Albums by user title</title>
        <meta name="description" content="Albums by user description"/>
      </Helmet>
      <div className="py-3">
        <h1>Albums</h1>
        <AlbumsComponent albums={albums}/>
      </div>
    </>
  );
};
