import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkwalletApi } from "../../config/invoiceApi";
import { getApi, postApi } from "../../config/api";

export const getWallet = createAsyncThunk("Wallet/balance", async (email) => {
  const response = await checkwalletApi(email);
  return response.data;
});

export const createWallet = createAsyncThunk(
  "createWallet/wallet",
  async () => {
    const response = await postApi("Wallet/create", {});
    return response.data;
  }
);

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
    const response = await getApi(`Wallet/transactions/${id}`);
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
    
    const response = await postApi("Wallet/paystack/withdraw", data);
    console.log(response, response.data);

    return response.data;
  }
);

export const paystackVerifyPayment = createAsyncThunk(
  "paystackVerifyPayment/wallet",
  async (reference) => {
    const response = await getApi(`Wallet/paystack/verify?reference=${reference}`);
    return response.data;
  }
);

export const payInvoice = createAsyncThunk(
  "payInvoice/wallet",
  async (invoiceId) => {
    const response = await postApi(
      `wallet/payforinvoice?invoiceTag=${invoiceId}`,
      {}
    );
    return response.data;
  }
);
