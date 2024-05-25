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


