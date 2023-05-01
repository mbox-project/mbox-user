import React, { useState } from "react";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
const invoiceInformation = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className=" border rounded-md mx-10 md:mx-28 lg:mx-96 my-10 lg:my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-3 lg:py-4 px-4 text-white font-poppins text-base md:text-2xl lg:text-xl">
          Pay an Invoice
        </p>
      </div>
      <div className="bg-[#FFF0E9] ">
        <p className=" py-3 px-4 font-poppins text-sm md:text-base lg:text-xs text-[#ADAAA9]">
          Please ensure the information is accurate and then select your payment
          option
        </p>
      </div>
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <p className="text-sm text-extrabold poppins py-2 border-b  border-t-0 border-x-0  mx-3 mt-2 md:mt-0 md:mx-0 pt-4  shadow-sm bg-white px-4 ">
          Invoice Information
        </p>
        <Label
          className="text-[#C1C1C1]  text-xs "
          htmlFor="text"
          title="Invoice Tag"
        />
        <Input
          name="tag"
          type="text"
          placeHolder="GC-10234"
          disabled={isDisabled}
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <Label
          className="text-[#C1C1C1]  text-xs"
          htmlFor="text"
          title="Store Name"
        />
        <Input
          name="issuer"
          type="text"
          placeHolder="GC-10234"
          disabled={isDisabled}
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <Label
          className="text-[#C1C1C1]  text-xs"
          htmlFor="text"
          title="Product Description"
        />
        <Input
          name="productDescription"
          type="text"
          placeHolder="Air Force II, Skando Limited Edition"
          disabled={isDisabled}
          className="w-full p-1 md:p-2 lg:py-10  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <Label
          className="text-[#C1C1C1]  text-xs"
          htmlFor="text"
          title="Product Qty"
        />
        <Input
          name="quantity"
          type="number"
          placeHolder="GC-10234"
          disabled={isDisabled}
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <Label
          className="text-[#C1C1C1]  text-xs"
          htmlFor="text"
          title="Unit Price"
        />
        <Input
          name="price"
          type="number"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          disabled={isDisabled}
          required
        />
      </div>

      <div className=" px-3 md:px-5 lg:px-5 pt-2">
        <Label
          className="text-[#C1C1C1]  text-xs"
          htmlFor="text"
          title="Total Amount"
        />
        <Input
          name="total"
          type="text"
          placeHolder="GC-10234"
          disabled={isDisabled}
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
      <p className="  px-5 pt-4 text-extrabold text-sm font-poppins">
        Select Payment Option
      </p>
      <div className="flex px-3 md:px-5 pt-2">
        <div>
          <input type="checkbox" />
        </div>
        <div>
          <p className="px-2 text-xs poppins pt-1 ">MBOX-3500</p>
        </div>
      </div>
      <Button
        className=" w-full my-6  rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins"
        // onClick={onSubmitHandler}
      >
        Pay Now ($4000)
      </Button>
    </div>
  );
};
export default invoiceInformation;
