import { createAsyncThunk } from '@reduxjs/toolkit'
import { quanLyDatVeServices } from '../../services/quanLyDatVe.services'

export const getDatVe = createAsyncThunk(
    "quanLyDatVe/getDatVe",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await quanLyDatVeServices.getDatVe("?MaLichChieu=41234");
            return res.data.content;
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

