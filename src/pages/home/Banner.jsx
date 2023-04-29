import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";
import { useDispatch } from "react-redux";

const contentStyle = {
   height: "100vh",
   color: "#fff",
   lineHeight: "160px",
   textAlign: "center",
   background: "#364d79",
};

const Banner = () => {
   const [bannerList, setBannerList] = useState([]);
   const dispatch = useDispatch();

   useEffect(() => {
      (async () => {
         try {
            const res = await quanLyPhimServices.getBannerList();

            setBannerList(res.data.content);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);
   return (
      <Carousel autoplay>
         {bannerList.map((banner) => {
            return (
               <div key={banner.maBanner}>
                  <div style={contentStyle}>
                     <img
                        src={banner.hinhAnh}
                        alt=""
                        style={{ width: "100%" }}
                     />
                  </div>
               </div>
            );
         })}
      </Carousel>
   );
};

export default Banner;
