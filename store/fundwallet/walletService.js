import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi, checkwalletApi } from "../../config/invoiceApi";

export const getWallet = createAsyncThunk("getwallet/wallet", async (email) => {
  const response = await checkwalletApi(email);
  return response.data;
});

export const getTransactions = createAsyncThunk(
  "getTransactions/wallet",
  async () => {
    const response = await getApi("wallet/transactions");
    return response.data;
  }
);

export const getTransactionDetails = createAsyncThunk(
  "getTransactionDetails/wallet",
  async (id) => {
    const response = await getApi(`wallet/transactions/${id}`);
    return response.data;
  }
);

export const paystackFundWallet = createAsyncThunk(
  "paystackFundWallet/wallet",
  async (data) => {
    const response = await postApi("wallet/paystack/fund-wallet", data);
    return response.data;
  }
);

export const withdrawFundPaystack = createAsyncThunk(
  "withdrawFundPaystack/wallet",
  async (data) => {
    const response = await postApi("paystack/withdraw", data);
    return response.data;
  }
);

export const paystackVerifyPayment = createAsyncThunk(
  "paystackVerifyPayment/wallet",
  async (reference) => {
    const response = await getApi(`paystack/verify/${reference}`);
    return response.data;
  }
);
