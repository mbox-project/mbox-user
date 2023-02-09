import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMerchant: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    activateMerchant: (state) => {
      state.isMerchant = true;
    },
  },
});

export const { activateMerchant } = userSlice.actions;
export default userSlice.reducer;
