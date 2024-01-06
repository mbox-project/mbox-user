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

export const getVendorProducts = createAsyncThunk(
  "Product/getVendorProducts",
  async (data) => {
    //console.log(data.pageNumber, data.pageSize, 7777)
    const response = await getApi(`Product/getVendorProducts?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);
