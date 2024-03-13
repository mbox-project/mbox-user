import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { withdrawFundPaystack } from "../../store/fundwallet/walletService";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { banks } from "../../components/data";
import SearchSelect from "../../components/combobox";
import { toastify } from "../../helpers";
import { Modal } from "antd";

const Withdraw = ({ open, setOpen }) => {
    const { isLoading } = useSelector((state) => state.wallet);

    const dispatch = useDispatch();
    const { email } = useSelector((state) => state.auth.user);
    const [amount, setAmount] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const onSubmitHandler = (e) => {
      e.preventDefault();
      if (amount && bankName && accountNumber && bankName !== banks[0]) {
        const data = {
          amount: Number(amount),
          email,
          accountNumber,
          bankName: bankName.name,
        };
        dispatch(withdrawFundPaystack(data))
          .unwrap()
          .then((action) => console.log(action))
          .catch((error) => {
            console.log(error);
            toastify.alertError(error, 3000);
          });
      }
    };


    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className="">
        {isLoading && <Spinner />}

        <div className="bg-brightRed">
          <p className=" py-4 px-4 text-white font-poppins text-xl">
            Withdraw
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
          <div className="px-3 md:px-5 lg:px-12 pt-6">
            <Label
              className="text-[#C1C1C1] text-xs"
              htmlFor="text"
              title="Amount"
            />
            <Input
                name=""
                type="number"
                placeHolder="Enter Amount Here"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
          </div>
          <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0 mx-12 mt-8  pt-4  shadow-sm bg-white px-4 ">
            Funds Destination
          </p>
          <div className="px-12 pt-3">
            <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Account Number"
            />
            <Input
            name=""
            type="number"
            placeHolder="Enter Account Number"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            required
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            />
        </div>
        <div className="px-12 pt-3">
            <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Bank Name"
            />
            <SearchSelect
            data={banks}
            selected={bankName}
            setSelected={setBankName}
            />
        </div>
          <div className=" flex px-12 pt-2">
        <Button
            onClick={onSubmitHandler}
            className=" w-[95%] mx-auto my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins"
        >
            Withdraw Now
        </Button>
          </div>
        </div>
      </div>
    </Modal>
    );
};

export default Withdraw;