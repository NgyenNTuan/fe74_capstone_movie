import http from "../constant/api";

export const quanLyPhimServices = {
   getMovieList: (query = "") => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),
};
