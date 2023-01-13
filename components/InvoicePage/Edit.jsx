import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

const Edit = () => {
  return (
    <div className="flex   justify-end py-10 pr-20 ">
      <button className="poppins flex  px-10 py-2 border-2 ml-5 rounded-sm border-lightGray">
        <AiOutlineEdit className="pt-1" /> Edit
      </button>
      <button className="poppins px-10  flex py-2 border-2 ml-5  bg-brightPurple text-white rounded-sm border-lightGray">
        {" "}
        <AiOutlineEdit className="pt-1" />
        Send Invoice
      </button>
    </div>
  );
};
export default Edit;
