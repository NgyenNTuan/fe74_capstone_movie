import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const User = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const { user } = useSelector((state) => state.quanLyNguoiDung);

   useEffect(() => {
      if (!user) return;
      reset({ ...user, sodt: user.soDT });
   }, [user]);

   return (
      <div>
         <div className="max-w-screen-xl mx-auto p-4">
            <h2 className="text-center text-2xl">Thông tin tài khoản</h2>

            <form
               className="mt-10"
               onSubmit={handleSubmit(async (value) => {})}
            >
               <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                     <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Tài khoản
                     </label>
                     <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        {...register("taiKhoan", {
                           required: "Vui lòng nhập tài khoản",
                           maxLength: {
                              value: 10,
                              message:
                                 "Tài khoản chỉ được nhập tối đa 10 kí tự",
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
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
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
                  <div>
                     <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Email
                     </label>
                     <input
                        type="text"
                        id="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Số điện thoại
                     </label>
                     <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        {...register("sodt")}
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Mã nhóm
                     </label>
                     <input
                        id="website"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="flowbite.com"
                        {...register("maNhom")}
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Họ tên
                     </label>
                     <input
                        id="visitors"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Vui lòng nhập họ tên"
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
      </div>
   );
};

export default User;
