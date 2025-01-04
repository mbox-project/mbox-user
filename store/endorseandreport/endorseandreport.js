import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getEndorsements = createAsyncThunk(
  "Endorsement/endorse",
  async (data) => {
    const response = await getApi(`Endorsement/endorse?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);

export const getReports = createAsyncThunk(
  "Endorsement/report",
  async (data) => {
    const response = await getApi(`Endorsement/report?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);
//export const endorseVendor = createAsyncThunk("Endorsement/endorse", async (body) => {
  //const response = await postApi(`Endorsement/endorse`, body);
  //return response.data;
//});


export const endorseVendor = createAsyncThunk(
  "Endorsement/endorse",
  async (body, thunkAPI) => {
    try {
      const response = await postApi(`Endorsement/endorse`, body);
      return response.data;
    } catch (error) {
      // Serialize the error object to extract meaningful and serializable data
      const message = {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        data: error.response?.data,
      };

      return thunkAPI.rejectWithValue(message);
    }
  }
);

