import React from 'react';
import {BrowserRouter, Navigate, useRoutes} from "react-router-dom";
import {RouteObject} from "react-router";
import LandingPage from "./pages/LandingPage";
import MoviesPage from "./pages/MoviesPage";
import {Nav} from "./components/Nav";
import LoginPage from "./pages/LoginPage";

const Routes = () => {

  const routes: RouteObject[] = [
    {path: '/', element: <Navigate to="landing"/>},
    {path: 'landing', element: <LandingPage/>},
    {path: 'movies', element: <MoviesPage/>},
    {path: 'login', element: <LoginPage/>}
  ];

  return useRoutes(routes);
};


const Router = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes/>
    </BrowserRouter>
  );
};

export default Router;
