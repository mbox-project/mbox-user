import axios from "axios";
import { API_URL } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

//const API_URL = "http://54.174.220.112/api/";

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

const getUser = async (id) => {
  const response = await axios.get(`${API_URL}/User/${id}`);
  return response.data;
};

// const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  getUser,
};
export default authService;
