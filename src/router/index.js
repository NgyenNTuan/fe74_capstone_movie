import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MainLayoutAdmin from "../layout/MainLayoutAdmin";
import Home from "../pages/home/Home";
import About from "../pages/About";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";
import CheckOut from "../pages/checkOut/CheckOut";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Fims from "../pages/Admin/Flims/Fims";
import Showtime from "../pages/Admin/Showtime/Showtime";
import AddNew from "../pages/Admin/Flims/AddNew";

const Router = () => {
   const elements = useRoutes([
      {
         path: "/",
         element: <MainLayout />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/home",
               element: <Home />,
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
               path: "/checkout/:id",
               element: <CheckOut />,
            },
            {
               path: "/user",
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
      {
         path: "/admin",
         element: <MainLayoutAdmin />,
         children: [
            {
               path: "/admin",
               path: "/admin/users",
               element: <Dashboard />,
            },
            {
               path: "/admin/film",
               element: <Fims />
            },
            {
               path: "/admin/film/addnew",
               element: <AddNew />,
            },
            {
               path: "/admin/showtime",
               element: <Showtime />,
            },
            {
               path: "/admin/showtime",
               element: <Showtime />,
            },
         ],
      },
   ]);
   return elements;
};

export default Router;
