import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getAllDeals = createAsyncThunk(
  "Deal/all",
  async (data) => {
    //console.log(data.pageNumber, data.pageSize, 7777)
    const response = await getApi(`Deal/all/${data.dealStatus}?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);
export const getVendorAllDeals = createAsyncThunk(
  "VendorDeal/all",
  async (data) => {
    //console.log(data.pageNumber, data.pageSize, 7777)
    const response = await getApi(`Deal/all/vendor/${data.dealStatus}?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`);
    return response.data;
  }
);

export const approveDeal = createAsyncThunk(
  "Deal/approve",
  async (dealId) => {
    //console.log(dealId, 7777)
    const response = await postApi("Deal/approve", dealId);
    console.log(response)
    return response.data;
  }
);

export const disputeDeals = createAsyncThunk(
  "Deal/dispute",
  async (body) => {
    //console.log(dealId, 7777)
    const response = await postApi("Deal/dispute", body);
    return response.data;
  }
);


export const cancelDeals = createAsyncThunk(
  "Deal/cancel",
  async (body) => {
    const response = await postApi("Deal/cancel", body);
    return response.data;
  }
);

export const ratingDeals = createAsyncThunk(
  "Deal/rating",
  async (body) => {
    const response = await postApi("Deal/ratings", body);
    return response.data;
  }
);




