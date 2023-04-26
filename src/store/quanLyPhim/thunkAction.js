import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const getmovieList = createAsyncThunk(
   "quanLyPhim/getmovieList",
   async (payload, { rejectWithValue }) => {
      try {
         const res = await quanLyPhimServices.getMovieList("?maNhom=GP13");

         return res.data.content;
      } catch (err) {
         return rejectWithValue(err);
      }
   }
);

export const getbannerList = createAsyncThunk(
   "quanLyPhim/getbannerList",
   async (payload, { rejectWithValue }) => {
      try {
         const res = await quanLyPhimServices.getBannerList();

         return res.data.content;
      } catch (err) {
         return rejectWithValue(err);
      }
   }
);
