# IA03 – User Registration System

Dự án Fullstack xây dựng hệ thống đăng ký thành viên hoàn chỉnh, bao gồm Backend (NestJS API) và Frontend (ReactJS). Dự án đáp ứng các tiêu chuẩn về validation, bảo mật mật khẩu, giao diện responsive và đã được triển khai (Deploy).

## 🚀 Live Demo

- **Frontend (Giao diện):** https://user-registration-1-t3zc.onrender.com
- **Backend (API):** https://user-registration-u2ym.onrender.com

---

## 🛠 Công nghệ sử dụng

### Backend

- **Framework:** NestJS (Node.js)
- **Database:** MongoDB (kết nối qua Mongoose)
- **Security:** Bcrypt (mã hóa mật khẩu), CORS
- **Validation:** class-validator

### Frontend

- **Framework:** React (Vite, TypeScript)
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form
- **API Management:** TanStack Query (React Query) & Axios
- **Routing:** React Router DOM

---

## ⚙️ Hướng dẫn cài đặt & chạy Local

Để chạy dự án trên máy cá nhân:

### 1. Chuẩn bị

- Cài đặt [Node.js](https://nodejs.org/).
- Cài đặt MongoDB hoặc có tài khoản MongoDB Atlas.

### 2. Cài đặt Backend

Mở terminal tại thư mục gốc và chạy:

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục backend với nội dung:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster... # Điền chuỗi kết nối của bạn
PORT=3000
```

Chạy server backend:

```bash
npm run start:dev
```

Server sẽ chạy tại: `http://localhost:3000`

### 3. Cài đặt Frontend

Mở terminal mới và chạy:

```bash
cd frontend
npm install
```

Cấu hình API: Mở file `src/api/auth.ts`, sửa biến `API_URL` về localhost:

```ts
const API_URL = "http://localhost:3000";
// const API_URL = 'https://...onrender.com'; // Comment dòng này lại khi chạy local
```

Chạy dự án frontend:

```bash
npm run dev
```

Truy cập tại: `http://localhost:5173`
