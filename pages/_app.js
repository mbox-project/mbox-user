import React from "react";
import "../styles/globals.css";
import { wrapper } from "../store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Component {...pageProps} />
        <ToastContainer theme="colored" />
    </>
    )
  
};

export default wrapper.withRedux(MyApp); //this allows all of the pages in the application to have access to the store ...