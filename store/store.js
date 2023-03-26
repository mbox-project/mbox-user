import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
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

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload.auth,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);
