import React from "react";
import { BiFilter } from "react-icons/bi";
const Filter = () => {
  return (
    <div className="flex lg:hidden  justify-center py-20 px-10 newsletterbg">
      <button className="poppins flex  px-10 py-2 border-2 ml-5 rounded-sm border-lightGray">
        <BiFilter className="pt-1" /> Filter
      </button>
      <button className="poppins px-10 py-2 border-2 ml-5 rounded-sm border-lightGray">
        {" "}
        Sort By
      </button>
    </div>
  );
};
export default Filter;
