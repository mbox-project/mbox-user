import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isMerchant: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activateMerchant: (state) => {
      state.isMerchant = true;
    },
  },
  extraReducers: (builder) => {
    //the extraReducers modify or updates the state accordingly...to this side effects..
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  }
});

export const { activateMerchant } = userSlice.actions;
export default userSlice.reducer;
