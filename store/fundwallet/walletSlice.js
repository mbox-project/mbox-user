import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getWallet,
  getTransactions,
  getTransactionDetails,
  paystackFundWallet,
  paystackVerifyPayment,
  withdrawFundPaystack,
  createWallet,
  payInvoice,
} from "./walletService";
// import { HYDRATE } from "next-redux-wrapper";

/**
 *
 **/

const initialState = {
  wallet: null,
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//paystack payment gateway
export const payStackFund = createAsyncThunk(
  "wallet/fund",
  async (fundWalletData, thunkAPI) => {
    try {
      return await paystackFundWallet(fundWalletData);
    } catch (error) {
      console.log("pay stack error", error);
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const withdrawPaystack = createAsyncThunk(
  "wallet/withdraw",
  async (data, thunkAPI) => {
    try {
      return await withdrawFundPaystack(data);
    } catch (error) {
      console.log("withdraw error", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//create the walletReducer...
export const walletSlice = createSlice({
  name: "wallet",
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
    builder
      .addCase(paystackFundWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(paystackFundWallet.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(paystackFundWallet.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(paystackVerifyPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(paystackVerifyPayment.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(paystackVerifyPayment.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(withdrawFundPaystack.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(withdrawFundPaystack.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(withdrawFundPaystack.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wallet = action.payload.data;
      })
      .addCase(getWallet.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wallet = action.payload.data;
      })
      .addCase(createWallet.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload.data.$values;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTransactionDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactionDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload.data;
      })
      .addCase(getTransactionDetails.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(payInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(payInvoice.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(payInvoice.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase("LOGOUT", (state) => {
        state = initialState;
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;
