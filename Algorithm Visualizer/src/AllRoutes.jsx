import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Sorting from "./components/Sorting/Sorting";
import Graph from "./components/Graph/Graph";
import Tree from "./components/Tree/Tree";

const routes = [
  { path: "/", Component: Home },
  { path: "/sorting/:page", Component: Sorting },
  { path: "/graph/:page", Component: Graph },
  { path: "/tree/:page", Component: Tree }
];

export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
