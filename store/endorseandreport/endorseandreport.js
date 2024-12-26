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
export const endorseVendor = createAsyncThunk(
  "Endorsement/report",
  async (body) => {
    const response = await postApi(`Endorsement/report`, body);
    return response.data;
  }
);


