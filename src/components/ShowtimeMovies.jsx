import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanLyRapServices } from "../services/quanLyRap.servies";
import "./showtimeMovies.scss";
import {
   getGroupTheater,
   getTheaterList,
} from "../store/quanLyRap/thunkAction";

const ShowtimeMovies = () => {
   const dispatch = useDispatch();
   const { theaterList } = useSelector((state) => state.quanLyRap);

   useEffect(() => {
      dispatch(getTheaterList());
      // message.error('error')
   }, [dispatch]);

   const [groupTheater, setGroupTheater] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const res = await quanLyRapServices.fetchGroupTheater("BHDStar");

            setGroupTheater(res.data.content);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   const getGroup = async (query) => {
      try {
         const res = await quanLyRapServices.fetchGroupTheater(query);

         setGroupTheater(res.data.content);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <section className="text-gray-600 body-font bg-white z-10 relative">
         <div className="container px-72 py-24 mx-auto home-showtime">
            <Tabs
               defaultActiveKey="BHDStar"
               className="parent-tab"
               style={{ border: "1px solid gray", borderRadius: "4px" }}
               tabPosition="left"
               items={theaterList.map((theater) => {
                  return {
                     key: theater.maHeThongRap,
                     label: (
                        <img
                           src={theater.logo}
                           alt=""
                           className="rounded-full"
                           width="50"
                        />
                     ),
                     children: (
                        <Tabs
                           style={{
                              width: "600px",
                           }}
                           tabPosition="left"
                           items={groupTheater?.map((item) => {
                              console.log("d", groupTheater);

                              return {
                                 key: item.maCumRap,
                                 label: (
                                    <>
                                       <h3 className="text-green-600 font-medium">
                                          {item.tenCumRap}
                                       </h3>
                                       <p className="text-gray-500 address-tab">
                                          {item.diaChi}
                                       </p>
                                    </>
                                 ),
                                 children: <></>,
                              };
                           })}
                        />
                     ),
                  };
               })}
               onChange={(key) => {
                  getGroup(key);
               }}
            />
         </div>
      </section>
   );
};

export default ShowtimeMovies;
