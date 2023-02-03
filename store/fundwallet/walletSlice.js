import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import walletService from "./walletService";

/**
 *
 **/

const initialState = {
  wallet:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wallet"))
      : null,
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
      return await walletService.paystackFundWallet(fundWalletData);
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
      return await walletService.withdrawFundPaystack(data);
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
      .addCase(payStackFund.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(payStackFund.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.wallet = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(payStackFund.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.wallet = null;
      })
      .addCase(withdrawPaystack.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(withdrawPaystack.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.wallet = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(withdrawPaystack.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.wallet = null;
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;