import {
  configureStore,
  combineReducers,
  createAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import user from "./users/userSlice";
import auth from "./auth/authSlice";
import invoice from "./invoice/invoiceSlice";
import wallet from "./fundwallet/walletSlice";
import product from "./product/productSlice";
import deals from "./deals/dealsSlice"
import vendorAnalytic from "./dashboardAnalytics/vendorSlice";
import buyerAnalytic from "./dashboardAnalytics/buyerSlice";

// Adding all the reducers to the global Store..
const rootReducer = combineReducers({
  user,
  auth,
  invoice,
  wallet,
  product,
  deals,
  vendorAnalytic,
  buyerAnalytic,
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

export const LogOut = createAction("LOGOUT");

export const makeStore = () => {
  const isClient = typeof window !== undefined;
  if (isClient) {
    const { persistStore, persistReducer } = require("redux-persist");

    const PersisitConfig = {
      key: "root",
      blacklist: ["wallet", "invoice", "product"],
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
