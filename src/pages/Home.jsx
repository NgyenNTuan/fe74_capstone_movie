import React, { useEffect } from "react";
import MovieList from "../module/MovieList";
import { useSelector } from "react-redux";

const Home = () => {
   // const { movieList } = useSelector((state) => state.quanLyPhim);

   return (
      <div className="max-w-screen-xl mx-auto p-4">
         Home
         <MovieList />
      </div>
   );
};

export default Home;
