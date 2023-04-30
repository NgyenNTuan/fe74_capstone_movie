import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MainLayoutAdmin from "../layout/MainLayoutAdmin";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";
import User1 from "../pages/Admin/User/User";
import CheckOut from "../pages/checkOut/CheckOut";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Fims from "../pages/Admin/Flims/Fims";
import Showtime from "../pages/Admin/Flims/Showtime";
import AddNew from "../pages/Admin/Flims/AddNew";
import EditFilm from "../pages/Admin/Flims/EditFilm";

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
               path: "/admin/create_calendar/:id",
               element: <Showtime />,
            },
            {
               path: "/admin/edit/:id",
               element: <EditFilm />,
            },
            {
               path: "/admin/user",
               element: <User1 />,
            },
         ]
      },
   ]);
   return elements;
};

export default Router;
