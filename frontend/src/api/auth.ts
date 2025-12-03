import axios from "axios";

export const registerUser = async (userData: any) => {
  // Gửi POST request tới /user/register
  const response = await axios.post(`${API_URL}/user/register`, userData);
  return response.data;
};
const API_URL = "https://user-registration-u2ym.onrender.com";
