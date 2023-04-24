import { createSlice } from "@reduxjs/toolkit";
import { datVe, getDatVe } from "./thunkAction";
import { ThongTinLichChieu } from './../../components/core/models/ThongTinPhongVe'
import { toast } from "react-toastify";


const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhsachGheDangDat: [],
    dsGheKhachKhacDangDat: [{ maGhe: 90795 }, { maGhe: 90796 }],
    tabActive: '1',
    isLoading: false,
    error: undefined,
};
const deepCopyFunction = (inObject) => {
    let outObject, value, key;

    if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }

    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
        value = inObject[key];

        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = deepCopyFunction(value);
    }

    return outObject;
};
const quanLyDatVeSlice = createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
        datGhe: (state, action) => {

            let danhSachGheCapNhat = deepCopyFunction(state.danhsachGheDangDat);

            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.payload.ghe.maGhe);

            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.payload.ghe)
            }
            return { ...state, danhsachGheDangDat: danhSachGheCapNhat }
        },
        changeTab: (state, action) => {
            let tabActiveNew = deepCopyFunction(state.tabActive)
            console.log(action.payload);
            tabActiveNew = action.payload
            return { ...state, tabActive: tabActiveNew }
        },
        datGhe: (state, action) => {
            
        }
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
            })
            .addCase(datVe.fulfilled, (state, action) => {
                state.danhsachGheDangDat = []
                console.log(action.payload.data);
                if (action.payload.data.statusCode === 200) {
                    toast.success(action.payload.data.content)
                }
                state.tabActive = '2'
            })
    },
})
export const quanLyDatVeReducer = quanLyDatVeSlice.reducer;

export const quanLyDatVeAction = quanLyDatVeSlice.actions;