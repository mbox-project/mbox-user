import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

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
});

export const { activateMerchant } = userSlice.actions;
export default userSlice.reducer;
