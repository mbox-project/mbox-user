import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/api";

const API_URL = "http://54.91.189.89:8003/api/";

export const createVendor = createAsyncThunk(
  "auth/createvendor",
  async (body) => {
    const response = await postApi(`${API_URL}vendor/convert-to-vendor`, body);
    return response.data;
  }
);

export const registerVendor = createAsyncThunk(
  "auth/registerVendor",
  async (body) => {
    const response = await postApi(`${API_URL}vendor/registerVendor`, body);
    return response.data;
  }
);

const vendorService = {
  createVendor,
  registerVendor
};

export default vendorService;
