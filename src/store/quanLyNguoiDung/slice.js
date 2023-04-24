import { createSlice } from "@reduxjs/toolkit";
import { layThongTinNguoiDung, login } from "./thunkAction";
import { toast } from "react-toastify";


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
         toast.error("Bạn đã đăng xuất tài khoản ")
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
            toast.success(" Hãy chọn bô phim bạn yêu thích nào 👌")
            
            toast.success()
            localStorage.setItem("user", JSON.stringify(action.payload));
         })
         .addCase(layThongTinNguoiDung.fulfilled, (state, action) => {
            state.thongTinNguoiDung = action.payload;
         });
},
});

export const quanLyNguoiDungReducer = quanLyNguoiDungSlice.reducer;

export const quanLyNguoiDungActions = quanLyNguoiDungSlice.actions;
