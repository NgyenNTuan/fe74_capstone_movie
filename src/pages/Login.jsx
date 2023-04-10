import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/quanLyNguoiDung/thunkAction";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm({
      // defaultValues: { // state},
   });

   // useEffect(() => {
   //    // thông tin cần phải đợi api
   //    reset({
   //       taiKhoan: "viethai",
   //       matKhau: "12342",
   //    });
   //    reset({...user});
   // }, [user]);

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const { user } = useSelector((state) => state.quanLyNguoiDung);

   if (user) {
      return <Navigate to={"/home"} />;
   }

   return (
      <div className="max-w-screen-xl mx-auto p-4">
         <h2 className="text-center text-2xl">Register</h2>
         <form
            className="mt-10"
            onSubmit={handleSubmit(async (value) => {
               dispatch(login(value));
            })}
         >
            <div className="grid gap-6 mb-6">
               <div>
                  <label
                     htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Tài khoản
                  </label>
                  <input
                     type="text"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Nhập tài khoản"
                     {...register("taiKhoan", {
                        required: "Vui lòng nhập tài khoản",
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
                  <p className="text-red-500 text-[13px]">
                     {errors?.taiKhoan?.message}
                  </p>
               </div>
               <div>
                  <label
                     htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Mật khẩu
                  </label>
                  <input
                     type="password"
                     id="last_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Nhập mật khẩu"
                     {...register("matKhau", {
                        required: "Vui lòng nhập mật khẩu",
                        pattern: {
                           value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                           message:
                              "Mật khẩu phải có 1 kí tự in hoa, 1 kí tự đặc biệt",
                        },
                     })}
                  />
                  <p className="text-red-500 text-[13px]">
                     {errors?.matKhau?.message}
                  </p>
               </div>
               <p>
                  Chưa có tài khoản?{" "}
                  <span
                     className="text-blue-400 cursor-pointer"
                     onClick={() => {
                        navigate("/register");
                     }}
                  >
                     Đăng ký
                  </span>{" "}
               </p>

               <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default Login;
