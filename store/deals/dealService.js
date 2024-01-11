import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getAllDeals = createAsyncThunk(
  "Deal/all",
  async (data) => {
    //console.log(data.pageNumber, data.pageSize, 7777)
    const response = await getApi(`Deal/all/${1}?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);

export const approveDeal = createAsyncThunk(
  "Deal/approve",
  async (dealId) => {
    //console.log(dealId, 7777)
    const response = await postApi("Deal/approve", { dealId: dealId.toString() }, {
      headers: {
        'Content-Type': 'application/json', // Ensure correct content type
      },
    });
    return response.data;
  }
);

export const disputeDeals = createAsyncThunk(
  "Deal/dispute",
  async (dealId) => {
    //console.log(dealId, 7777)
    const response = await postApi("Deal/dispute", { dealId: dealId.toString() }, {
      headers: {
        'Content-Type': 'application/json', // Ensure correct content type
      },
    });
    return response.data;
  }
);




