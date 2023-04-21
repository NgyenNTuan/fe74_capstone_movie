import { createSlice } from "@reduxjs/toolkit";
import { getDatVe } from "./thunkAction";
import { ThongTinLichChieu } from './../../components/core/models/ThongTinPhongVe'
const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
    isLoading: false,
    error: undefined,
};
const quanLyDatVeSlice = createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
        updateChiTietPhongVe: (state, action) => {
            // Clone object before assigning it to state
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDatVe.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getDatVe.fulfilled, (state, action) => {
                state.chiTietPhongVe = action.payload;
                state.isLoading = false;
            })
            .addCase(getDatVe.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})
export const quanLyDatVeReducer = quanLyDatVeSlice.reducer;

export const quanLyDatVeAction = quanLyDatVeSlice.actions;