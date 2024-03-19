import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Loading} from "@/components";
import {fetchError} from "@/helpers";


export const Album = ({fetchInitialData, data}) => {
  const [album, setAlbum] = useState(__isClient__ ? {photos: []} : data);
  const [loading, setLoading] = useState(!album);

  const {albumId} = useParams();

  const fetchSuccess = data => {
    setAlbum(data);
    setLoading(false);
  };

  const fetchData = () => {
    fetchInitialData(albumId)
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  };

  useEffect(fetchData, [albumId]);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <Helmet>
        <title>{album.title + " title"}</title>
        <meta name="description" content={album.title + " description"}/>
      </Helmet>
      <div className="py-3">
        <h1>
          {album.title}
        </h1>
        <h2>Photos</h2>
      </div>
    </>
  );
};
