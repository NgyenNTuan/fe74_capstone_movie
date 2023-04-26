import http from "../constant/api";

export const quanLyNguoiDungServices = {
   register: (payload) => http.post("QuanLyNguoiDung/DangKy", payload),
   login: (payload) => http.post("QuanLyNguoiDung/DangNhap", payload),
   updateThongTinUser: (payload) => http.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload),
   layThongTin: () => http.post("QuanLyNguoiDung/ThongTinTaiKhoan"),
};
