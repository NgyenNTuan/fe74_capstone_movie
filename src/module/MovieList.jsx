import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovieList } from "../store/quanLyPhim/thunkAction";
import { Skeleton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./movieList.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "./ToastMessage";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
   const dispatch = useDispatch();
   const { movieList, isLoading } = useSelector((state) => state.quanLyPhim);

   const navigate = useNavigate();
   useEffect(() => {
      dispatch(getmovieList());
      // message.error('error')
   }, [dispatch]);

   if (isLoading) {
      return (
         <div className="flex flex-wrap justify-center gap-2">
            {[...Array(10)].map((e, i) => {
               return (
                  <div className="flex flex-col w-1/4" key={i}>
                     <Skeleton.Input style={{ width: 300, height: 400 }} />
                     <Skeleton.Input
                        style={{ width: 300, height: 60, marginTop: "10px" }}
                     />
                  </div>
               );
            })}
         </div>
      );
   }

   return (
      <div className="pt-3">
         <h3 className="title-list">ĐANG CHIẾU</h3>
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
               <div className="flex flex-wrap -m-4">
                  {movieList?.map((movie) => {
                     return (
                        <div
                           key={movie.maPhim}
                           className="lg:w-1/4 md:w-1/2 p-4 w-full movie-item"
                        >
                           <a
                              onClick={() => {
                                 navigate(`/moviedetail/${movie.maPhim}`);
                              }}
                              className="block relative h-[32rem] rounded overflow-hidden relative"
                           >
                              <div className="movie-overlay"></div>
                              <img
                                 alt={movie.tenPhim}
                                 className="object-cover object-center w-full h-full block"
                                 src={movie.hinhAnh}
                              />
                              <div>
                                 <FontAwesomeIcon
                                    className="movie-trailer"
                                    icon="fa-solid fa-play"
                                 />
                              </div>
                           </a>
                           <div className="mt-4 relative">
                              {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                 CATEGORY
                              </h3> */}
                              <h2 className="movie-name text-white title-font text-lg font-medium text-center">
                                 {movie.tenPhim}
                              </h2>
                              <div className="movie-checkout">
                                 <p
                                    onClick={() => {
                                       navigate(`/checkout/${movie.maPhim}`);
                                    }}
                                    className="text-white "
                                 >
                                    Mua vé
                                 </p>
                              </div>

                              {/* <p className="mt-1">$16.00</p> */}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};

export default MovieList;
