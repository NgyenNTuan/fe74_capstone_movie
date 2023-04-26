import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
   return (
      <div className="MainLayout flex flex-col h-full">
         <Header />

         <div className="MainContent flex-1 min-h-screen z-20 ">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainLayout;
