import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";

const Router = () => {
   const elements = useRoutes([
      {
         path: "/",
         element: <MainLayout />,
         children: [
            {
               path: "/home",
               element: <Home />,
            },
            {
               path: "/contact",
               element: <Contact />,
            },
            {
               path: "/about",
               element: <About />,
            },
            {
               path: "/moviedetail",
               element: <MovieDetail />,
            },
            {
               path: "user",
               element: <User />,
            },
         ],
      },
      {
         path: "/register",
         element: <Register />,
      },
      {
         path: "/login",
         element: <Login />,
      },
   ]);
   return elements;
};

export default Router;
