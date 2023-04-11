import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
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

export const makeStore = () => {
  const isClient = typeof window !== undefined;
  if (isClient) {
    const { persistStore, persistReducer } = require("redux-persist");

    const PersisitConfig = {
      key: "root",
      blacklist: ["wallet", "invoice"],
      storage,
    };

    const persistedReducer = persistReducer(PersisitConfig, masterReducer);
    const store = configureStore({
      reducer: persistedReducer,
    });
    store.__persistor = persistStore(store);
    return store;
  } else {
    return configureStore({ reducer: masterReducer });
  }
};

export const wrapper = createWrapper(makeStore);
