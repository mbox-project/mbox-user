import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBuyerEndorsedMerchant,
  getBuyerMostBought,
  getBuyerMostPurchasedStore,
  getBuyerReportedMerchant,
} from "./buyerAnalytics";

// import { HYDRATE } from "next-redux-wrapper";

// /**
//  * When the user login then we saved the userid, role, and token
//  * in the localStorage and then it in the store..
//  * inShort saved the user instance in the localStorage
//  */

const initialState = {
  TopPurchased: [],
  BuyerTopStore: [],
  BuyerReportedStore: [],
  BuyerEndorsedStore: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create the authReducer...
export const buyerAnalyticSlice = createSlice({
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

      .addCase(getBuyerMostBought.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.TopPurchased = action.payload.data.data;
        state.message = action.payload.message;
      })
      .addCase(getBuyerMostPurchasedStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.BuyerTopStore = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getBuyerReportedMerchant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.BuyerReportedStore = action.payload.data.data;
        state.message = action.payload.message;
      })
      .addCase(getBuyerEndorsedMerchant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.BuyerEndorsedStore = action.payload.data.data;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = buyerAnalyticSlice.actions;
export default buyerAnalyticSlice.reducer;
