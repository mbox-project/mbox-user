import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getBuyerMostBought = createAsyncThunk(
  "Buyer/mostBought",
  async (data) => {
    const response = await getApi("DashBoard/buyer/most-bought-product");
    return response.data;
  }
);
export const getBuyerMostPurchasedStore = createAsyncThunk(
  "Buyer/mostPurchasedStore",
  async (data) => {
    const response = await getApi("DashBoard/buyer/most-purchased-store");
    return response.data;
  }
);
