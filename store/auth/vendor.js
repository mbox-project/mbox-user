import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/api";

export const createVendor = createAsyncThunk(
  "auth/createvendor",
  async (body) => {
    const response = await postApi("", body);
    return response.data;
  }
);
