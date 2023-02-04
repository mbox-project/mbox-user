import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
const invoiceModal = () => {
  return (
    <div className=" border rounded-md mx-10 md:mx-28 py-4 lg:mx-96 my-10 lg:my-20 shadow-lg">
      <div className=" px-3 md:px-5 lg:px-5 pt-4">
        <Label
          className="text-[#C1C1C1]  text-xs "
          htmlFor="text"
          title="Invoice Tag"
        />
        <Input
          name="tag"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
          required
        />
      </div>
    </div>
  );
};
export default invoiceModal;
