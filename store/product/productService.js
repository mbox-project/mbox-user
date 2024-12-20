import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  deleteApi,
  patchApi
} from "../../config/api";

export const getProductCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const response = await getApi("Category/getallcategories");
    return response.data;
  }
);
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await getApi("Product/products");
    return response.data;
  }
);
export const getProductsId = createAsyncThunk(
  "products/getProductId",
  async (id) => {
    const response = await getApi(`Product/${id}`);
    return response.data;
  }
);
export const getProductCategoryId = createAsyncThunk(
  "products/getCategoriesId",
  async (id) => {
    const response = await getApi(`Category/getcategorybyid?catid=${id}`);
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
export const uploadProductImage = createAsyncThunk(
  "products/image",
  async (body) => {
    const response = await postApi("Product/upload-gallery-images", body);
    return response.data;
  }
);
export const editProduct = createAsyncThunk(
  "products/edit",
  async (body) => {
    const response = await patchApi("Product/update", body);
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    const response = await deleteApi(`Product/${id}`);
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
