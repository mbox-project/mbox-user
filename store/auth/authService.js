import axios from "axios";
import { getApi, postApi } from "../../config/api";
import { API_URL } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

//const API_URL = "http://54.174.220.112/api/";

//Register user
const register = async (registerData) => {
  const response = await postApi("User/register", registerData);
  //console.log("RegisterResp", response);
  return response.data;
};

const login = async (loginData) => {
  const response = await postApi("User/login", loginData);
  //console.log("LoginResponse", response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getUser = async () => {
  const response = await getApi("user");
  return response.data;
};

// const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  getUser,
};
export default authService;
