import { configureStore } from "@reduxjs/toolkit";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";

export const store = configureStore({
   reducer: {
      quanLyPhim: quanLyPhimReducer,
      quanLyNguoiDung: quanLyNguoiDungReducer,
   },
});
