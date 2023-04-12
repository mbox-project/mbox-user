import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/productApi";

export const getProductCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const response = await getApi("category/getallcategories");
    return response.data;
  }
);
