import { createSlice } from "@reduxjs/toolkit";
import { createShowTimes1, getShowtimeInfo, getTheaterList } from "./thunkAction";
import { toast } from "react-toastify";

const initialState = {
   theaterList: [],
   error: undefined,
};

const quanLyRapSlice = createSlice({
   name: "quanLyRap",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getTheaterList.fulfilled, (state, action) => {
            state.theaterList = action.payload;
         })
         .addCase(createShowTimes1.fulfilled, (state, action) => {
             toast.success("Tạo lịch phim thành công")
         });
},
});

export const quanLyRapReducer = quanLyRapSlice.reducer;

export const quanLyRapAction = quanLyRapSlice.actions;
