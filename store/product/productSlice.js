import { createSlice } from "@reduxjs/toolkit";
import { getProductCategories } from "./productService";

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
        (state.isLoading = false), (state.categories = action.payload.data);
      })
      .addCase(getProductCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
