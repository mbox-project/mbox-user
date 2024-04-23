import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceService from "./invoiceService";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  invoiceLog: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  invoice: []
};

//Generate Invoice
export const generateinvoice = createAsyncThunk(
  "generateinvoice",
  async (invoiceData, thunkAPI) => {
    try {
      return await invoiceService.invoice(invoiceData);
    } catch (error) {
      // console.log("Errors", error.response);
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

export const getInvoice = createAsyncThunk(
  "getinvoice",
  async (id, thunkAPI) => {
    // try {
    //   return await invoiceService.getInvoice(id);
    // } catch (error) {
    //   // console.log("Errors", error.response);
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();
    //   return thunkAPI.rejectWithValue(message);
    // }
    return await invoiceService.getInvoice(id);
  }
);
export const getAllInvoice = createAsyncThunk(
  "getallinvoice",
  async () => {
    return await invoiceService.getAllInvoice();
  }
);
//create the invoiceReducer...
export const invoiceSlice = createSlice({
  name: "invoice",
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
    builder.addCase(generateinvoice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(generateinvoice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // state.message = action.payload.message;
      state.invoiceLog = action.payload.data;
    });
    builder.addCase(generateinvoice.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getInvoice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInvoice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
       state.invoice = action.payload;
      // state.invoiceLog = action.payload.data;
    });
    builder
      .addCase(getInvoice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
      })
      .addCase("LOGOUT", (state) => {
        state = initialState;
      });
  },
});

export const { reset } = invoiceSlice.actions;
export default invoiceSlice.reducer;
