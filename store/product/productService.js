import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getProductCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const response = await getApi("category/getallcategories");
    return response.data;
  }
);

export const uploadProduct = createAsyncThunk(
  "products/create",
  async (body) => {
    const response = await postApi("product/create", body);
    return response.data;
  }
);
