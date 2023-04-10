import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunkAction";

const initialState = {
   user: undefined,
};

const quanLyNguoiDungSlice = createSlice({
   name: "quanLyNguoiDung",
   initialState,
   reducers: {
      logOut: (state, action) => {
         localStorage.removeItem("user");
         state.user = undefined;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => {
         // console.log(action.payload);
         state.user = action.payload;

         localStorage.setItem("user", JSON.stringify(action.payload));
      });
   },
});

export const quanLyNguoiDungReducer = quanLyNguoiDungSlice.reducer;

export const quanLyNguoiDungActions = quanLyNguoiDungSlice.actions;
