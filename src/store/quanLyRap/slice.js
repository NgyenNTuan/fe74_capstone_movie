import { createSlice } from "@reduxjs/toolkit";
import { getTheaterList } from "./thunkAction";

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
         .addCase(getTheaterList.pending, (state, action) => {})
         .addCase(getTheaterList.fulfilled, (state, action) => {
            state.theaterList = action.payload;
         })
         .addCase(getTheaterList.rejected, (state, action) => {
            state.error = action.payload;
         });
   },
});

export const quanLyRapReducer = quanLyRapSlice.reducer;

export const quanLyRapAction = quanLyRapSlice.actions;
