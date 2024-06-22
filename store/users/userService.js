import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  deleteApi,
  patchApi
} from "../../config/api";



export const reportVendor = createAsyncThunk(
  "user/reportVendor",
  async (body) => {
    const response = await postApi("Report/businss", body);
    return response.data;
  }
);
export const getUserProfile = createAsyncThunk(
  "user/userProfile",
  async() => {
    const response = await getApi("User");
    return response.data;
  }
);
export const UpdateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async(body) => {
    const response = await patchApi("User/update", body);
    return response.data;
  }
);


