import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import { useRouter } from "next/router";
// import { payStackFund, reset } from "../../store/fundwallet/walletSlice";
import {
  paystackFundWallet,
  paystackVerifyPayment,
} from "../../store/fundwallet/walletService";

const fundWallet = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const queryParams = new URLSearchParams(window.location.search);
  const referenceFromURL = queryParams.get("reference");

  useEffect(() => {
    if (referenceFromURL) {
      //alert(referenceFromURL);
      dispatch(paystackVerifyPayment(referenceFromURL))
        .unwrap()
        .then((response) => {
          toastify.alertSuccess(response?.data, 3000);
          router.push("/wallet");
        })
        .catch((error) => {
          console.log(error);
          toastify.alertError(error || "Something went wrong", 3000);
        });
    }
  }, [referenceFromURL]);
  return (
    <>
      <Spinner />
    </>
  );
};
export default fundWallet;
