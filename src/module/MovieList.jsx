import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovieList } from "../store/quanLyPhim/thunkAction";
import { Skeleton } from "antd";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "./ToastMessage";

const MovieList = () => {
   const dispatch = useDispatch();
   const { movieList, isLoading } = useSelector((state) => state.quanLyPhim);

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
      <div className="flex flex-wrap justify-center gap-2">
         {movieList?.map((item) => {
            return (
               <div
                  className="w-1/4 p-1 border border-[#000] rounded-lg"
                  key={item.maPhim}
               >
                  <img
                     className="w-[300px] h-[400px] object-cover object-center"
                     src={item.hinhAnh}
                     alt={item.tenPhim}
                  />
                  <div className="mt-4">
                     <h3>{item.tenPhim}</h3>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default MovieList;
