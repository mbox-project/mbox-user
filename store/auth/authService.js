import axios from "axios";

//'proxy' setting in the package.json automatically maps the http://localhost:5000 to this endpoint ...
const API_URL = "http://54.174.220.112/api/";

//Register user
const register = async (registerData) => {
  const response = await axios.post(`${API_URL}/User/register`, registerData);
  //console.log("RegisterResp", response);
  return response.data;
};

const login = async (loginData) => {
  const response = await axios.post(`${API_URL}/User/login`, loginData);
  //console.log("LoginResponse", response);
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
