import { createSlice } from "@reduxjs/toolkit";
import { getProductCategories,
   uploadProduct, 
   getProductCategoryId,
   getProducts,
   deleteProduct,
   editProduct
  } from "./productService";

const initialState = {
  products: [],
  categories: [],
  subCategory: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.data.$values;
      })
      .addCase(getProductCategories.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductCategoryId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategoryId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.data;
        state.subCategory = action.payload.data.subCategories.$values;
         // Update categories array
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data.$values;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.isLoading = false;
        //state.products = action.payload.data.$values;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        //state.products = action.payload.data.$values;
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data.$values;
      })
      .addCase(uploadProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadProduct.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(uploadProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase("LOGOUT", (state) => {
        state = initialState;
      });
  },
});

export default productSlice.reducer;
