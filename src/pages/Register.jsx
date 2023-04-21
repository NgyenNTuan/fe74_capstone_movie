import React from "react";
import { useForm } from "react-hook-form";
import { quanLyNguoiDungServices } from "../services/quanLyNguoiDung.services";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "onChange" });
// dũng
   const navigate = useNavigate();

   return (
      <div className="max-w-screen-xl mx-auto p-4">
         <h2 className="text-center text-2xl">Register</h2>
         <form
            className="mt-10"
            onSubmit={handleSubmit(async (value) => {
               // console.log(value);
               try {
                  const res = await quanLyNguoiDungServices.register(value);
                  if (res.data.statusCode !== 400) {
                     message.success("Đăng ký tài khoản thành công");
                     navigate("/login");
                  }
               } catch (error) {
                  message.error("Dang ky that bai");
               }
            })}
         >
            <div className="grid gap-6 mb-6 md:grid-cols-2">
               <div>
                  <label
                     htmlFor="first_name"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Tài khoản
                  </label>
                  <input
                     type="text"
                     id="first_name"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John"
                     {...register("taiKhoan", {
                        required: "Vui long nhap tai khoan!",
                        maxLength: {
                           value: 10,
                           message: "Tài khoản chỉ được nhập tối đa 10 kí tự",
                        },
                        minLength: {
                           value: 5,
                           message: "Tài khoản ít nhất 5 kí tự",
                        },
                     })}
                  />
                  <p className="text-[13px] text-red-500">
                     {errors?.taiKhoan?.message}
                  </p>
               </div>
               <div>
                  <label
                     htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Mật khẩu
                  </label>
                  <input
                     type="text"
                     id="last_name"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Doe"
                     {...register("matKhau", {
                        pattern: {
                           value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                           message: "Vui lòng nhập đúng mật khẩu",
                        },
                     })}
                  />
                  <p className="text-[13px] text-red-500">
                     {errors?.matKhau?.message}
                  </p>
               </div>
               <div>
                  <label
                     htmlFor="company"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Email
                  </label>
                  <input
                     type="text"
                     id="company"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Flowbite"
                     {...register("email", {
                        pattern: {
                           value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                           message: "Vui lòng nhập đúng email",
                        },
                     })}
                  />
                  <p className="text-[13px] text-red-500">
                     {errors?.email?.message}
                  </p>
               </div>
               <div>
                  <label
                     htmlFor="phone"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Số điện thoại
                  </label>
                  <input
                     type="tel"
                     id="phone"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="123-45-678"
                     {...register("sodt")}
                  />
               </div>
               <div>
                  <label
                     htmlFor="website"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Mã nhóm
                  </label>
                  <input
                     type="url"
                     id="website"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="flowbite.com"
                     {...register("maNhom")}
                  />
               </div>
               <div>
                  <label
                     htmlFor="visitors"
                     className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                     Họ tên
                  </label>
                  <input
                     id="visitors"
                     className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Ho Ten"
                     {...register("hoTen")}
                  />
               </div>
            </div>

            <button
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default Register;
