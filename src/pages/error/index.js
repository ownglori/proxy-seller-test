import React from "react";
import {Helmet} from "react-helmet";


export const Error = () => {
  return (
    <>
      <Helmet>
        <title>Application Error title</title>
        <meta name="description" content="Application Error description"/>
      </Helmet>
      <div>Application Error</div>
    </>
  );
};
