import { createSlice } from "@reduxjs/toolkit";



const initialState= {
  pendingDeal: false,
};

const dealsSlice = createSlice({
  name: "Deals",
  initialState,
  reducers: {
    SET_PENDING_DEALS: (state, action) => {
      return {
        ...state,
        pendingDeal: action.payload,
      };
    },
   
  },
});

export default dealsSlice.reducer;
export const {
    SET_PENDING_DEALS,
 
} = dealsSlice.actions;
