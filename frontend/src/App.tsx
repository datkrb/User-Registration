import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

// Trang chủ đơn giản
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Hệ Thống User</h1>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100"
        >
          Đăng Nhập
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700"
        >
          Đăng Ký
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
