import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi, patchApi } from "../../config/api";

export const createVendor = createAsyncThunk(
  "auth/createvendor",
  async (body) => {
    const response = await postApi("vendor/convert-to-vendor", body);
    return response.data;
  }
);

export const updateVendor = createAsyncThunk(
  "auth/updateVendor",
  async (body) => {
    const response = await patchApi("vendor/updateVendor", body);
    return response.data;
  }
);

export const registerVendor = createAsyncThunk(
  "auth/registerVendor",
  async (body) => {
    const response = await postApi("Vendor/registerVendor", body);
    return response.data;
  }
);
export const convertToVendor = createAsyncThunk(
  "auth/convertToVendor",
  async (body) => {
    const response = await postApi("Vendor/convert-to-vendor", body);
    return response.data;
  }
);
export const getVendor = createAsyncThunk(
  "auth/getVendor",
  async () => {
    const response = await getApi(`Vendor`);
    return response.data;
  }
);
export const reportBuyer = createAsyncThunk(
  "auth/reportBuyer",
  async (body, thunkAPI) => {
    try {
      const response = await postApi(`Report/buyer`, body);
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getReport = createAsyncThunk(
  "auth/getReport",
  async () => {
    const response = await getApi(`Report`);
    return response.data;
  }
);
const vendorService = {
  createVendor,
  registerVendor,
  updateVendor,
  getVendor,
  reportBuyer,
  getReport
};

export default vendorService;
