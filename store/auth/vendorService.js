import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi, patchApi } from "../../config/api";

export const createVendor = createAsyncThunk(
  "auth/createvendor",
  async (body) => {
    const response = await postApi("vendor/convert-to-vendor", body);
    return response.data;
  }
);

export const registerVendor = createAsyncThunk(
  "auth/registerVendor",
  async (body) => {
    const response = await patchApi("vendor/updateVendor", body);
    return response.data;
  }
);

const vendorService = {
  createVendor,
  registerVendor,
};

export default vendorService;
