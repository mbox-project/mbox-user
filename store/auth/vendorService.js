import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/api";

const API_URL = "http://54.91.189.89:8003/api/";

export const createVendor = createAsyncThunk(
  "auth/createvendor",
  async (body, { rejectWithValue }) => {
    try {
      const response = await postApi(
        `${API_URL}vendor/convert-to-vendor`,
        body
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const vendorService = {
  createVendor,
};

export default vendorService;
