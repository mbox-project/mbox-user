import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
const withdrawFunds = () => {
  return (
    <div className=" border rounded-md lg:mx-96 my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-4 px-4 text-white font-poppins text-xl">
          Withdraw Funds
        </p>
      </div>
      <div className="bg-lightPink ">
        <p className=" py-3 px-4 font-poppins text-xs text-[#ADAAA9]">
          please ensure you enter the following informations carefully and
          accurately
        </p>
      </div>
      <div className="bg-white">
        <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0 mx-12  pt-4  shadow-sm bg-white px-4 ">
          Enter Amount
        </p>
        <div className=" px-12 pt-6">
          <Label
            className="text-[#C1C1C1] text-xs"
            htmlFor="text"
            title="Amount"
          />
          <Input
            name=""
            type="number"
            placeHolder="$4000"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0 mx-12 mt-8  pt-4  shadow-sm bg-white px-4 ">
          Funds Destination
        </p>
        <div className=" px-12 pt-3">
          <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Account Number"
          />
          <Input
            name=""
            type="number"
            placeHolder="1357 0245 6456 9981"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <div className=" px-12 pt-3">
          <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Bank Name"
          />
          <Input
            name=""
            type="text"
            placeHolder=""
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <div className=" px-12 pt-3">
          <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Account Name"
          />
          <Input
            name=""
            type="text"
            placeHolder="Taylor Mason"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>

        <Button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
          Withdraw Now ($4000)
        </Button>
      </div>
    </div>
  );
};
export default withdrawFunds;
