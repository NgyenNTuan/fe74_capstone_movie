import { createSlice } from "@reduxjs/toolkit";
import { layThongTinNguoiDung, login } from "./thunkAction";

const initialState = {
   user: undefined,
   thongTinNguoiDung: {},
};

const quanLyNguoiDungSlice = createSlice({
   name: "quanLyNguoiDung",
   initialState,
   reducers: {
      logOut: (state, action) => {
         localStorage.removeItem("user");
         state.user = undefined;
      },
      getUser: (state, action) => {
         const data = localStorage.getItem("user")
         if (data) {
            state.user = JSON.parse(data)
         }
      },

   },
   extraReducers: (builder) => {
      builder
         .addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
         })
         .addCase(layThongTinNguoiDung.fulfilled, (state, action) => {
            state.thongTinNguoiDung = action.payload;
         });
},
});

export const quanLyNguoiDungReducer = quanLyNguoiDungSlice.reducer;

export const quanLyNguoiDungActions = quanLyNguoiDungSlice.actions;
