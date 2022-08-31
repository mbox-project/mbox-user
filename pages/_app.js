import React from "react";
import "../styles/globals.css";
import { wrapper } from "../store/store";


const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp); //this allows all of the pages in the application to have access to the store ...