import http from "../constant/api";

export const quanLyPhimServices = {
   getMovieList: (query = "") => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),

   getBannerList: () => http.get("QuanLyPhim/LayDanhSachBanner"),
};
