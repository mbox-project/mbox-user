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
    const response = await postApi("PromoteStore/banner", body);
    return response.data;
  }
);
export const categoryRequest = createAsyncThunk(
  "promoteStore/Category",
  async (body) => {
    const response = await postApi("PromoteStore/Category", body);
    return response.data;
  }
);
export const getPromotions = createAsyncThunk(
  "promoteStore/getPromotions",
  async () => {
    const response = await getApi("PromoteStore/promotions");
    return response.data;
  }
);

