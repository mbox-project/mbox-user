import axios from "axios";
import { getApi, postApi, patchApi } from "../../config/api";
import { API_URL } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
const register = async (registerData) => {
  const response = await postApi("User/register", registerData);
  //console.log("RegisterResp", response);
  return response.data;
};

const login = async (loginData) => {
  const response = await postApi("User/login", loginData);
  //console.log("LoginResponse", response);
  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getUser = async () => {
  const response = await getApi("user");
  return response.data;
};

const verifyEmail = async (body) => {
  const response = await postApi("user/confirmemail", { ...body });
  return response.data;
};

const forgotPassword = async (body) => {
  const response = await postApi("user/forgotpassword", { ...body });
  return response.data;
};

const resetPassword = async (body) => {
  const response = await patchApi("user/resetpassword", { ...body });
  return response.data;
};

// const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  getUser,
  verifyEmail,
  resetPassword,
  forgotPassword,
};
export default authService;
