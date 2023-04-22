import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung.services";

export const login = createAsyncThunk(
   "quanLyNguoiDung/login",
   async (payload, { rejectWithValue }) => {
      try {
         const res = await quanLyNguoiDungServices.login(payload);
         console.log(res);
         return res.data.content;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);
