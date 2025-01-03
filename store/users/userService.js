import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  patchApi
} from "../../config/api";




export const reportVendor = createAsyncThunk(
  "user/reportVendor",
  async (body, thunkAPI) => {
    try {
      const response = await postApi(`Report/businss`, body);
      return response.data;
    } catch (error) {
      const message = error;
      error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUserProfile = createAsyncThunk("user/userProfile", async () => {
  const response = await getApi("User");
  return response.data;
});

export const getUserById = createAsyncThunk(
  "user/userById",
  async(id) => {
    const response = await getApi(`User/getUser/${id}`);
    return response.data;
  }
);
export const getVendorDashboard = createAsyncThunk(
  "user/vendorDashboard",
  async() => {
    const response = await getApi(`DashBoard/vendor`);
    return response.data;
  }
);
export const getUserDashboard = createAsyncThunk(
  "user/userDashboard",
  async() => {
    const response = await getApi(`DashBoard/buyer`);
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
export const addUserBeneficiary = createAsyncThunk(
  "user/addBeneficiary",
  async(body) => {
    const response = await postApi("Beneficiary/add", body);
    return response.data;
  }
);
export const getBeneficiary = createAsyncThunk(
  "user/getBeneficiary",
  async() => {
    const response = await getApi("Beneficiary/all");
    return response.data;
  }
);
export const getBankList = createAsyncThunk(
  "user/getBankList",
  async() => {
    const response = await getApi("Beneficiary/banklist");
    return response.data;
  }
);

export const ResetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async(body) => {
    const response = await postApi("User/ResetOldPassword", body);
    return response.data;
  }
);
