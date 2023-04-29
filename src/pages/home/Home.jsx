import React, { useEffect } from "react";
import MovieList from "../../module/MovieList";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import ShowtimeMovies from "./../../components/ShowtimeMovies";
import ComingSoon from "./ComingSoon";

const contentStyle = {
   backgroundImage: "url('./bgmovie.jpg')",
};
const Home = () => {
   // const { movieList } = useSelector((state) => state.quanLyPhim);

   return (
      <div>
         <Banner />
         <div style={contentStyle}>
            <MovieList />
         </div>
         <ComingSoon />
         <ShowtimeMovies />
      </div>
   );
};

export default Home;
