import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getVendorActiveBuys,
  getVendorTimeSeries,
  getVendorTopBuyer,
  getVendorTopSales,
  getVendorTopSelling,
  getVendorTopSellingItems,
  getVendorTotalRev,
} from "./vendorAnalytics";
// import { HYDRATE } from "next-redux-wrapper";

// /**
//  * When the user login then we saved the userid, role, and token
//  * in the localStorage and then it in the store..
//  * inShort saved the user instance in the localStorage
//  */

const initialState = {
  TopSellingItems: {},
  VendorTopSelling: {},
  VendorTopBuyer: [],
  VendorTopSales: [],
  VendorTimeSeries: [],
  VendorActiveBuys: [],
  getVendorTotalRev: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create the authReducer...
export const vendorAnalyticSlice = createSlice({
  name: "VendorAnalytics",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //the extraReducers modify or updates the state accordingly...to this side effects..
    builder

      .addCase(getVendorTopSellingItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.TopSellingItems = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getVendorTopSelling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.VendorTopSelling = action.payload.$values;
        state.message = action.payload.message;
      })
      .addCase(getVendorTopBuyer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.VendorTopBuyer = action.payload.$values;
        state.message = action.payload.message;
      })
      .addCase(getVendorTopSales.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.VendorTopSales = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getVendorTimeSeries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.VendorTimeSeries = action.payload.dataPoints.$values;
        state.message = action.payload.message;
      })
      .addCase(getVendorActiveBuys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.VendorActiveBuys = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getVendorTotalRev.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.getVendorTotalRev = action.payload;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = vendorAnalyticSlice.actions;
export default vendorAnalyticSlice.reducer;
