import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import user from "./users/userSlice";
import auth from "./auth/authSlice";

// Adding all the reducers to the global Store..

export const makeStore = () =>
  configureStore({
    reducer: {
      user,
      auth,
    },
  });

export const wrapper = createWrapper(makeStore);
