import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import vendorService from "./vendorService";
// import { HYDRATE } from "next-redux-wrapper";

// /**
//  * When the user login then we saved the userid, role, and token
//  * in the localStorage and then it in the store..
//  * inShort saved the user instance in the localStorage
//  */

const initialState = {
  user: {
    role: "",
    userId: "",
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//vendor service
const createVendor = vendorService.createVendor;
const registerVendor = vendorService.registerVendor;
const reportBuyer = vendorService.reportBuyer

//register user
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
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

//login user
export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      console.log(loginData);
      const response = await authService.login(loginData);
      console.log(response);
      return response;
    } catch (error) {
      // console.log("LoginError", error);
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
//login user
export const adminLogin = createAsyncThunk(
  "auth/admin/login",
  async (loginData, thunkAPI) => {
    try {
      console.log(loginData);
      const response = await authService.adminLogin(loginData);
      console.log(response);
      return response;
    } catch (error) {
      // console.log("LoginError", error);
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

// logout user

export const getUser = createAsyncThunk("auth/getUser", async () => {
  return await authService.getUser();
});

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (body) => {
    return await authService.verifyEmail(body);
  }
);

export const forgotpassword = createAsyncThunk(
  "auth/forgotpassword",
  async (body) => {
    return await authService.forgotPassword(body);
  }
);

export const resetpassword = createAsyncThunk(
  "auth/resetpassword",
  async (body) => {
    return await authService.resetPassword(body);
  }
);

//create the authReducer...
export const authSlice = createSlice({
  name: "auth",
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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(createVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(reportBuyer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(reportBuyer.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(reportBuyer.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerVendor.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerVendor.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyEmail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotpassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotpassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotpassword.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resetpassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetpassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetpassword.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase("LOGOUT", (state) => {
        state = initialState;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
