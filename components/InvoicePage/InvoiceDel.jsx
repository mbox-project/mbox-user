import React from "react";
import Input from "../Input";
import Label from "../Label";
const invoiceDel = () => {
  return (
    <div className=" border rounded-md lg:mx-64 my-20 shadow-lg">
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Product Tag2" />
        <Input
          name="product tag"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          required
        />
      </div>

      <div className=" px-20 pt-10">
        <Label className="" htmlFor="text" title="Product Description" />
        <Input
          name="product tag"
          type="text"
          placeHolder="Air Force II, Skando Limited Edition"
          className="w-full p-1 md:p-2 lg:py-10  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Buyers Name" />
        <Input
          name="product Qty"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          required
        />
      </div>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Unit Price" />
        <Input
          name="product tag"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          required
        />
      </div>
      <p className=" flex justify-end pr-20">Remove the product</p>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Total price" />
        <Input
          name="product tag"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          required
        />
      </div>
    </div>
  );
};
export default invoiceDel;
