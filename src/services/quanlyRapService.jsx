import { query } from 'express'
import http from '../constant/api'
export const quanLyRapService = {
    layDanhSachHeThongRap: (query = "") => http.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13}`),
    layThongTinLichChieu: (query = "") => http.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${query}`),
    layThongTinHeThongRap: (query = "") => http.get(`QuanLyRap/LayThongTinHeThongRap`),
}