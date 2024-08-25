import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  deleteApi,
  patchApi
} from "../../config/api";

export const bannerRequest = createAsyncThunk(
  "promoteStore/banner",
  async (body) => {
    const response = await postApi("Promotestore/banner", body);
    return response.data;
  }
);
export const categoryRequest = createAsyncThunk(
  "promoteStore/Category",
  async (body) => {
    const response = await postApi("Promotestore/Category", body);
    return response.data;
  }
);
export const getPromotions = createAsyncThunk(
  "promoteStore/getPromotions",
  async () => {
    const response = await getApi("Promotestore/promotions");
    return response.data;
  }
);

