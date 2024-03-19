import express from "express";
import React from "react"
import ReactDOM from "react-dom/server";
import {matchPath} from "react-router-dom"
import {StaticRouter} from "react-router-dom/server";
import {App} from "@/components";
import {routes} from "@/routes";
import {Helmet} from "react-helmet";


const app = express();

app.use(express.static("dist"));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(route.path, req.url)) || {};
  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

  promise
    .then((data) => {
      return ReactDOM.renderToString(
        <StaticRouter location={req.url}>
          <App serverData={data}/>
        </StaticRouter>
      )})
    .then(
      (markup) => {
        const helmet = Helmet.renderStatic();
        res.send(`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
${helmet.title.toString()}
${helmet.meta.toString()}
<script src="/app.js" defer></script><link href="/app.css" rel="stylesheet"></head><body><div id="app">${markup}</div></body>`)

      }
    )
    .catch(next)
});

app.listen(3000);
