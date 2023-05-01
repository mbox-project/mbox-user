import React from "react";

const approveDealModal = () => {
  return (
    <div className=" border rounded-md mx-10 md:mx-28 px-0 py-8 lg:mx-96 my-10 lg:my-20 shadow-lg">
      <h4 className="text-[#26A17B] text-lg flex  pt-2 justify-evenly font-poppins">
        Are you sure you are satisfied with this product?
      </h4>
      <p className="pl-10 leading-7 text-sm font-poppins pt-1">
        Please understand that clicking "Yes,I am", means you are satisfied with
        the product, Hence money would be released to the vendor
      </p>
      <div className="flex justify-end mt-5 space-x-3 pr-4">
        <button
          type="button"
          className="bg-white border border-black text-center rounded-lg  p-2 px-6"
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-[#26A17B] text-white text-center rounded-lg  p-2 px-6 "
        >
          Yes,I am
        </button>
      </div>
    </div>
  );
};
export default approveDealModal;
