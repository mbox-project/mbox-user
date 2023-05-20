import { createSlice } from "@reduxjs/toolkit";
import { getProductCategories, uploadProduct } from "./productService";

const initialState = {
  products: [],
  categories: [],
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
        state.categories = action.payload.data;
      })
      .addCase(getProductCategories.rejected, (state) => {
        state.isLoading = false;
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
