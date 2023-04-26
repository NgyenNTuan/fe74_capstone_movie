import http from "../constant/api";

export const quanLyRapServices = {
   getTheaterList: (query = "") => http.get("QuanLyRap/LayThongTinHeThongRap"),

   getGroupTheater: (query = "") =>
      http.get(`QuanLyRap/LayThongTinCumRapTheoHeThong${query}`),
};
