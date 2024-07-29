import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import Spinner from "../Spinner";
import { toastify } from "../../helpers";
// import { payStackFund, reset } from "../../store/fundwallet/walletSlice";
import { paystackFundWallet } from "../../store/fundwallet/walletService";

const FundWallet = ({ openFund, setOpenFund }) => {
  // Add rememberMe property to it later..
  const { isLoading } = useSelector((state) => state.wallet);
  const { email } = useSelector((state) => state.auth.user);
  const [fundWalletData, setFundWalletData] = useState({
    amount: 0,
  });
  const dispatch = useDispatch();
  const onChangeInput = (e) => {
    setFundWalletData({ ...fundWalletData, [e.target.name]: e.target.value });
  };

  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (fundWalletData.amount === "") {
      toastify.alertWarning("Enter a valid amount", 3000);
    } else {
      console.log({ ...fundWalletData, email });
      dispatch(paystackFundWallet({ ...fundWalletData, email }))
        .unwrap()
        .then((action) => {
          //console.log(action?.data)
          window.location.href = action?.data;
        })
        .catch((error) => {
          console.log(error);
          toastify.alertError(error, 3000);
        });
    }
  };

  return (
    <Modal open={openFund} onCancel={() => setOpenFund(false)} footer={null}>
      <div className="">
        {isLoading && <Spinner />}

        <div className="bg-brightRed">
          <p className=" py-4 px-4 text-white font-poppins text-xl">
            Fund your wallet
          </p>
        </div>
        <div className="bg-lightPink ">
          <p className=" py-3 px-4 font-poppins text-sm md:text-base lg:text-xs text-[#ADAAA9]">
            please ensure you enter the following informations carefully and
            accurately
          </p>
        </div>
        <div className="bg-white">
          <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0  mx-3 mt-2 md:mt-0 md:mx-12 pt-4  shadow-sm bg-white px-4 ">
            Enter Amount
          </p>
          <div className=" px-3 md:px-5 lg:px-12 pt-6">
            <Label
              className="text-[#C1C1C1] text-xs"
              htmlFor="text"
              title="Amount"
            />
            <Input
              name="amount"
              type="number"
              placeHolder="enter amount"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              required
              value={fundWalletData.amount}
              onChange={onChangeInput}
            />
          </div>

          <div className=" flex px-12 pt-2">
            <Button
              className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins"
              onClick={onSubmitHandler}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default FundWallet;
