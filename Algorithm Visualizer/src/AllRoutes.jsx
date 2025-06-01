import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Sorting from "./Components/Sorting/Sorting";
import Graph from "./Components/Graph/Graph";
import Tree from "./Components/Tree/Tree";
import EquationSolve from "./Components/EquationSolve/EquationSolve";
import NQueen from "./Components/N-Queens-Problem/NQueens";
import Minesweeper from "./Components/Minesweeper/Minesweeper";
import Game2048 from "./Components/Game2048/Game2048";

const routes = [
  { path: "/", Component: Home },
  { path: "/sorting/:page", Component: Sorting },
  { path: "/graph/:page", Component: Graph },
  { path: "/tree/:page", Component: Tree },
  { path: "/equationsolve", Component: EquationSolve },
  { path: "/nqueen", Component: NQueen },
  // { path: "/minesweeper", Component: Minesweeper },
  // { path: "/game2048", Component: Game2048 },
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