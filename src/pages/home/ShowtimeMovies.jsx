import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanLyRapServices } from "../../services/quanLyRap.servies";
import "./showtimeMovies.scss";
import { getTheaterList } from "../../store/quanLyRap/thunkAction";

const ShowtimeMovies = () => {
   const dispatch = useDispatch();
   const { theaterList } = useSelector((state) => state.quanLyRap);

   useEffect(() => {
      dispatch(getTheaterList());
      // message.error('error')
   }, [dispatch]);

   const getGroupT = async (query) => {
      try {
         const res = await quanLyRapServices.getGroupTheater(
            `?maHeThongRap=${query}`
         );

         console.log(res.data.content);
         return res.data.content;
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="container" id="home-showtime">
         <Tabs
            tabPosition="left"
            items={theaterList.map((theater) => {
               return {
                  label: (
                     <img
                        src={theater.logo}
                        alt=""
                        className="rounded-full"
                        width="50"
                     />
                  ),
                  key: theater.maHeThongRap,
                  children: (
                     <Tabs
                        tabPosition="left"
                        items={new Array(3).map((_, i) => {
                           const id = String(i + 1);
                           return {
                              label: `Tab ${id}`,
                              key: id,
                              children: `Content of Tab ${id}`,
                           };
                        })}
                     />
                     // <div>
                     //    {() => {
                     //       return getGroupT(theater.maHeThongRap).map(
                     //          (item) => {
                     //             return (
                     //                <div key={item.maCumRap}>
                     //                   <h3>{item.tenCumRap}</h3>
                     //                   <p>{item.diaChi}</p>
                     //                </div>
                     //             );
                     //          }
                     //       );
                     //    }}
                     // </div>
                  ),
               };
            })}
         />
      </div>
   );
};

export default ShowtimeMovies;
