import React from "react";
import {Routes, Route} from "react-router-dom";
import {Layout} from "@/components";
import {Error} from "@/pages";
import {routes} from "@/routes";
import "@/styles/index.css";


export const App = ({serverData = null}) => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        {routes.map(({component: Element, path, fetchInitialData}) => (
          <Route key={path} path={path} element={<Element data={serverData} fetchInitialData={fetchInitialData}/>}/>
        ))}
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
};
