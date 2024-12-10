import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../config/api";

export const getVendorTopSellingItems = createAsyncThunk(
  "Vendor/topSellingItem",
  async (data) => {
    const response = await getApi("DashBoard/vendor/top-selling-items");
    return response.data;
  }
);
export const getVendorTopSelling = createAsyncThunk(
  "Vendor/topSelling",
  async (data) => {
    const response = await getApi("DashBoard/vendor/top-selling");
    return response.data;
  }
);
export const getVendorTopBuyer = createAsyncThunk(
  "Vendor/topBuyers",
  async (data) => {
    const response = await getApi("DashBoard/vendor/top-buyers");
    return response.data;
  }
);
export const getVendorTopSales = createAsyncThunk(
  "Vendor/topSales",
  async (data) => {
    const response = await getApi("DashBoard/today-sales");
    return response.data;
  }
);
export const getVendorTimeSeries = createAsyncThunk(
  "Vendor/TimeSeries",
  async (time) => {
    const response = await getApi(
      `DashBoard/vendor/sales/time-series?period=${time}`
    );
    return response.data;
  }
);
export const getVendorActiveBuys = createAsyncThunk(
  "Vendor/ActiveBuy",
  async (period) => {
    const response = await getApi(
      `DashBoard/vendor/active-buyers?period=${period}`
    );
    return response.data;
  }
);
export const getVendorTotalRev = createAsyncThunk(
  "Vendor/TotalRev",
  async (data) => {
    const response = await getApi("DashBoard/total-revenue");
    return response.data;
  }
);
