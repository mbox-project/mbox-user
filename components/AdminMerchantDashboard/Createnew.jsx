import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Createnew = () => {
  return (
    <>
      <div className="flex  ">
        <button className="bg-brightRed flex space-x-2 text-white p-3 rounded-md ">
          <AiOutlinePlusCircle size={20} className="pt-1 pr-1" />
          Create New
        </button>
      </div>
    </>
  );
};
export default Createnew;
