import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "../../services/quanLyRap.servies";

export const getTheaterList = createAsyncThunk(
   "quanLyRap/getTheaterList",
   async (payload, { rejectWithValue }) => {
      try {
         const res = await quanLyRapServices.getTheaterList();

         return res.data.content;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);
