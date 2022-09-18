import axios from "axios";

//'proxy' setting in the package.json automatically maps the http://localhost:5000 to this endpoint ...
const API_URL = "http://54.174.220.112/api/";

//Register user
const register = async (registerData) => {
  const response = await axios.post(`${API_URL}/User/register`, registerData);
  console.log("Response", response);
  if (response.data) {
    //stringify the response and stored it in the localStorage ..
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log("Response", response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  logout,
};
export default authService;
