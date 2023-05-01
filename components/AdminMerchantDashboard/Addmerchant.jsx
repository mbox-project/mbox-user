import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Addmerchant = () => {
  return (
    <>
      <div className="flex  ">
        <button className="bg-brightRed flex space-x-2 text-white p-3 rounded-md ">
          <AiOutlinePlusCircle size={20} className="pt-1 pr-1" />
          Add a new merchant
        </button>
      </div>
    </>
  );
};
export default Addmerchant;
