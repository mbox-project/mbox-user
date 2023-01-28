import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
const promoteBusiness = () => {
  return (
    <div className=" border rounded-md lg:mx-96 my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-4 px-4 text-white font-poppins text-xl">
          Suggested Store Form
        </p>
      </div>
      <div className="bg-lightPink ">
        <p className=" py-3 px-4 font-poppins text-xs text-[#F16A2D]">
          Dear Merchant, please provide the following information correctly
        </p>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className=" px-4 pt-4">
          <Label
            className="text-[#C1C1C1] text-sm"
            htmlFor="text"
            title="Duration"
          />
          <Input
            name="tag"
            type="text"
            placeHolder=""
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] bg-[#FAFAFA] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <div className=" px-4 pt-3">
          <Label
            className="text-[#C1C1C1]  text-sm"
            htmlFor="text"
            title="Listing Type"
          />
          <Input
            name="issuer"
            type="text"
            placeHolder=""
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA] md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <div className=" px-4 pt-2">
          <Label
            className="text-[#C1C1C1] text-sm"
            htmlFor="text"
            title="ts on:"
          />
          <Input
            name="issuer"
            type="text"
            placeHolder=""
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA]  md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>
        <div className=" px-4 pt-2">
          <Label
            className="text-[#C1C1C1] text-sm"
            htmlFor="text"
            title="Ends on:"
          />
          <Input
            name="issuer"
            type="text"
            placeHolder=""
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA] md:border-2  md:rounded-md shadow-sm rounded-none"
            required
          />
        </div>

        <p className=" font-poppins font-semibold text-sm text-[#717171] px-4 pt-4 ">
          Select Payment Option
        </p>
        <div className=" flex px-4 pt-4">
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <p className="px-5 text-xs poppins pt-1 text-semibold">
              MBOX-Wallet -$3,050
            </p>
          </div>
          <div>
            <Button className="bg-[#034694] relative left-72 rounded text-xs py-1.5 px-2 text-white">
              Fund Wallet
            </Button>
          </div>
        </div>
        <div>
          <p className="text-[#F16A2D] px-4 py-3 text-xs">
            This offer would cost you a flat rate of #500 (five hundred naira
            only)
          </p>
        </div>

        <Button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default promoteBusiness;
