import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
const withdrawFunds = () => {
  return (
    <div className=" border rounded-md mx-10 md:mx-28 lg:mx-96 my-10 lg:my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className="py-3 lg:py-4 px-4 text-white font-poppins text-base md:text-2xl lg:text-xl">
          Withdraw Funds
        </p>
      </div>
      <div className="bg-lightPink ">
        <p className=" py-3 px-4 font-poppins text-sm md:text-base lg:text-xs text-[#ADAAA9]">
          please ensure you enter the following informations carefully and
          accurately
        </p>
      </div>
      <div className="bg-white">
        <p className="text-[#9A9A9A] text-sm md:text-2xl  lg:text-sm text-semibold poppins py-2 md:py-3 lg:py-2 border-b  border-t-0 border-x-0  mx-3 mt-2 md:mt-0 lg:mx-12  pt-4  shadow-sm bg-white px-4 ">
          Enter Amount
        </p>
        <div className=" px-3 md:px-5 lg:px-12 pt-6">
          <Label
            className="text-[#C1C1C1] text-xs md:text-base lg:text-xs"
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
        <p className="text-[#9A9A9A] text-sm text-semibold poppins py-2 border-b  border-t-0 border-x-0 mx-3 mt-4  lg:mx-12  md:mt-8  pt-4  shadow-sm bg-white px-4 ">
          Funds Destination
        </p>
        <div className=" px-3 md:px-5 lg:px-12 pt-3">
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
        <div className="px-3 md:px-5 lg:px-12 pt-3">
          <Label
            className="text-[#C1C1C1]  text-xs"
            htmlFor="text"
            title="Bank Name"
          />
          <div>
            <select
              name=""
              type="text"
              placeHolder=""
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  text-[#C1C1C1] mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            >
              <option disabled selected className=" pr-12 text-lg lg:text-xs  text-[#C1C1C1]">
                Choose a Bank Name
              </option>
              <option value="p">Eco </option>
              <option value="n">Access </option>
            </select>
          </div>

          <div className=" px-0 pt-3">
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
    </div>
  );
};
export default withdrawFunds;
