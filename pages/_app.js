import React from "react";
import "../styles/globals.css";
import { wrapper } from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  useEffect(() => {
    console.log("running");
    console.log(user);
  });
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </>
  );
};

export default wrapper.withRedux(MyApp); //this allows all of the pages in the application to have access to the store ...
