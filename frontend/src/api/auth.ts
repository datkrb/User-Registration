import axios from "axios";

// Địa chỉ Backend (NestJS chạy ở port 3000)
const API_URL = "https://user-registration-u2ym.onrender.com";

export const registerUser = async (userData: any) => {
  // Gửi POST request tới /user/register
  const response = await axios.post(`${API_URL}/user/register`, userData);
  return response.data;
};
