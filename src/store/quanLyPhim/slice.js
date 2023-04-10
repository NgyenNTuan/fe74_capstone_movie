import { createSlice } from "@reduxjs/toolkit";
import { getmovieList } from "./thunkAction";

const initialState = {
   movieList: [],
   isLoading: false,
   error: undefined,
};

const quanLyPhimSlice = createSlice({
   name: "quanLyPhim",
   initialState,
   reducers: {},
   // xu ly cac action tao tu createAsyncThunk
   extraReducers: (builder) => {
      builder
         .addCase(getmovieList.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getmovieList.fulfilled, (state, action) => {
            state.movieList = action.payload;
            state.isLoading = false;
         })
         .addCase(getmovieList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

// export const {reducer: quanLyPhimReducer, actions: quanLyPhimActions} = createSlice({
//    name: "quanLyPhim",
//    initialState,
//    reducers: {},
//    extraReducers: (builder) => {},
// });

export const quanLyPhimReducer = quanLyPhimSlice.reducer;

export const quanLyPhimActions = quanLyPhimSlice.actions;
