import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import user from "./users/userSlice";
import auth from "./auth/authSlice";
import invoice from "./invoice/invoiceSlice";
import wallet from "./fundwallet/walletSlice";

// Adding all the reducers to the global Store..
const rootReducer = combineReducers({
  user,
  auth,
  invoice,
  wallet,
});
export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore);
