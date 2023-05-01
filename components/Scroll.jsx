import React from "react";

const Scroll = () => {
  return (
    <div className="flex justify-center py-10 space-x-10">
      <button
        type="button"
        className="bg-white text-brightPurple border-2 border-brightPurple text-center rounded-lg  p-2 px-6"
      >
        Previous
      </button>
      <div className="flex space-x-4 ">
        <p className="bg-brightPurple p-3  font-bold text-white rounded-full  flex items-center justify-center ">
          1
        </p>
        <p className="pt-3"> 2</p>
        <p className="pt-3">3</p>
        <p className="pt-3">4</p>
        <p className="pt-3">5</p>
      </div>
      <button
        type="button"
        className="bg-white text-brightPurple border-2 border-brightPurple text-center rounded-lg  p-2 px-6"
      >
        Next
      </button>
    </div>
  );
};

export default Scroll;
