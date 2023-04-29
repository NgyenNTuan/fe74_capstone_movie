import { createSlice } from "@reduxjs/toolkit";
import { getShowtimeInfo, getTheaterList } from "./thunkAction";

const initialState = {
   theaterList: [],
   error: undefined,
};

const quanLyRapSlice = createSlice({
   name: "quanLyRap",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getTheaterList.fulfilled, (state, action) => {
         state.theaterList = action.payload;
      });
   },
});

export const quanLyRapReducer = quanLyRapSlice.reducer;

export const quanLyRapAction = quanLyRapSlice.actions;
