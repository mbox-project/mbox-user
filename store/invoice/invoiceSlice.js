import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceService from "./invoiceService";

const initialState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Generate Invoice
export const invoice = createAsyncThunk(
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
    builder
      .addCase(invoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(invoice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(invoice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = invoiceSlice.actions;
export default invoiceSlice.reducer;
