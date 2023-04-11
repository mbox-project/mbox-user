import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import vendorService from "./vendorService";
// import { HYDRATE } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";

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

//create the authReducer...
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
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
      .addCase(createVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createVendor.rejected, (state, action) => {})
      .addCase(registerVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerVendor.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerVendor.rejected, (state, action) => {})
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
      });
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
