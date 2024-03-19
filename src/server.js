import express from "express";
import React from "react"
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import {matchPath} from "react-router-dom"
import {Helmet} from "react-helmet";
import {App} from "@/components";
import {routes} from "@/routes";


const app = express();

const reactApp = (request, data) => {
  return renderToString(<StaticRouter location={request.url}><App serverData={data}/></StaticRouter>);
};

const serverIndex = (data) => {
  const helmet = Helmet.renderStatic();

  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link rel="icon" type="image/svg+xml" href="/favicon.svg"/>${helmet.title.toString() + helmet.meta.toString()}<script src="/app.js" defer></script><link href="/app.css" rel="stylesheet"></head><body><div id="app">${data}</div></body>`;
};

const serverResponse = (res, route, data) => {
  res.status(route.status === 404 ? 404 : 200).send(serverIndex(data))
};

const serverApp = (request, response, next) => {
  const route = routes.find(route => matchPath(route.path, request.url)) || {status: 404};
  const data = route.fetchInitialData ? route.fetchInitialData(request.path) : Promise.resolve();

  data
    .then(data => reactApp(request, data))
    .then(data => serverResponse(response, route, data))
    .catch(next)
};

app.use(express.static("dist"));

app.get("*", (request, response, next) => serverApp(request, response, next));

app.listen(3000);
