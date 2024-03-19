import React from "react";
import {Helmet} from "react-helmet";


export const Error = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Not Found"/>
      </Helmet>
      <div className="p-3 text-uppercase text-center">404 | Not found</div>
    </>
  );
};
