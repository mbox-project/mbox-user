import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  deleteApi,
  patchApi
} from "../../config/api";


export const createCategory = createAsyncThunk(
  "admin/category/create",
  async (body) => {
    const response = await postApi("Category/createCategory", body);
    return response.data;
  }
);
export const deleteCategory = createAsyncThunk(
  "admin/category/delete",
  async (id) => {
    const response = await deleteApi(`Category/deletecategory?catid=${id}`);
    return response.data;
  }
);
export const getAllProducts = createAsyncThunk(
  "admin/product/getall",
  async (data) => {
    const response = await getApi(`admin/products?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);
