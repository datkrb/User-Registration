import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/auth";

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Sử dụng React Query để xử lý việc gọi API
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      alert("Đăng ký thành công! Bạn sẽ được chuyển sang trang đăng nhập.");
      console.log("Kết quả:", data);
      navigate("/login"); // Chuyển trang nếu thành công
    },
    onError: (error: any) => {
      // Lấy thông báo lỗi từ Backend trả về
      const message = error.response?.data?.message || "Đăng ký thất bại!";
      alert("Lỗi: " + message);
    },
  });

  const onSubmit = (data: any) => {
    // Gọi hàm mutate để bắt đầu gửi dữ liệu
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Đăng Ký Tài Khoản
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email là bắt buộc" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: { value: 6, message: "Mật khẩu phải hơn 6 ký tự" },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Nút Đăng ký */}
          <button
            type="submit"
            disabled={mutation.isPending} // Khóa nút khi đang gửi
            className={`w-full py-2 px-4 rounded-md text-white transition ${
              mutation.isPending
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {mutation.isPending ? "Đang xử lý..." : "Đăng Ký"}
          </button>

          {/* Hiển thị lỗi chung nếu có */}
          {mutation.isError && (
            <div className="p-2 bg-red-100 text-red-700 text-sm rounded text-center">
              {mutation.error instanceof Error
                ? mutation.error.message
                : "Có lỗi xảy ra"}
            </div>
          )}
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
