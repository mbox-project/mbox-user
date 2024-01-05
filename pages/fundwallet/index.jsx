import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import { useRouter } from "next/router";
// import { payStackFund, reset } from "../../store/fundwallet/walletSlice";
import { paystackFundWallet } from "../../store/fundwallet/walletService";

const fundWallet = () => {
  // Add rememberMe property to it later..
  const [fundWalletData, setFundWalletData] = useState({
    amount: "",
  });

  const { amount } = fundWalletData;
  const onChangeInput = (e) => {
    setFundWalletData({ ...fundWalletData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading } = useSelector((state) => state.wallet);
  const { email } = useSelector((state) => state.auth.user);
  //check for error messages   typeof window !== "undefined" ?
  // useEffect(() => {
  //   if (isError) {
  //     toastify.alertError(message, 3000);
  //   }

  //   if (isSuccess) {
  //     console.log("237237", wallet);
  //     router.push(wallet);
  //   }
  // }, [isError, message, isSuccess, wallet, dispatch, router]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (fundWalletData.amount == "") {
      toastify.alertWarning("Enter a valid ammount", 3000);
    } else {
      console.log(fundWalletData);
      dispatch(paystackFundWallet({ ...fundWalletData, email }))
        .unwrap()
        .then((action) => {
          // console.log(action);
          // window.open(action.data);
        })
        .catch((error) => {
          console.log(error);
          toastify.alertError(error, 3000);
        });
    }
  };

  return (
    <div className=" border rounded-md lg:mx-96 my-20 shadow-lg">
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
            placeHolder="4000"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            required
            onChange={onChangeInput}
          />
        </div>
        {/* <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0 mx-12 mt-8  pt-4  shadow-sm bg-white px-4 ">
          Billing Information
            className="text-[#C1C1C1]  text-xs"
            title="Card Number"
          />
          <Input
            name="card_number"
            type="number"
            placeHolder="1357 0245 6456 9981"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            required
            onChange={onChangeInput}
          />
        </div> */}
        {/* <div className="flex px-8 pt-2 ">
          <div className="px-4 ">
            <Label
              className="text-[#C1C1C1] text-xs"
              htmlFor="text"
              title="expires"
            />
            <Input
              name="expiry_date"
              type="number"
              placeHolder="09/2028"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white  md:border-2  md:rounded-md shadow-sm rounded-none"
              required
              onChange={onChangeInput}
            />
          </div>
          <div className=" px-4">
            <Label
              className="text-[#C1C1C1] lg:pl-5 text-xs"
              htmlFor="text"
              title="CVV"
            />
            <Input
              name="cvv"
              type="number"
              placeHolder="334"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins lg:ml-4 mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
              required
              onChange={onChangeInput}
            />
          </div>
        </div> */}

        <div className=" flex px-12 pt-2">
          {/* <div>
            <input type="checkbox" />
          </div>
          <div>
            <p className="px-2 text-[#13519B] text-xs poppins pt-1 ">
              Saved card
            </p>
          </div> */}

          <Button
            className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins"
            onClick={onSubmitHandler}
          >
            Pay Now
          </Button>
        </div>
      </div>
      {/* <Button className=" w-full my-4 rounded-md shadow-lg  bg-brightRed  py-2  text-white  justify-center text-base poppins">
        Pay Now ($4000)
      </Button> */}
    </div>
  );
};
export default fundWallet;
