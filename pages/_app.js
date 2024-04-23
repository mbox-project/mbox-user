import React from "react";
import "../styles/globals.css";
import "../styles/flier.css"
import { wrapper } from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore((store) => store);
  return (
    <>
      <PersistGate persistor={store.__persistor} loading={null}>
        <Component {...pageProps} />
        <ToastContainer theme="colored" />
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(MyApp); //this allows all of the pages in the application to have access to the store ...
