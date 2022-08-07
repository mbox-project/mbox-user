import React from "react";

const Pagenation = () => {
  return (
    <div className="flex justify-end mt-5 space-x-3">
      <button
        type="button"
        className="bg-brightPurple text-white text-center rounded-lg  p-2 px-6"
      >
        Previous
      </button>
      <button
        type="button"
        className="bg-brightPurple text-white text-center rounded-lg  p-2 px-6"
      >
        Next
      </button>
    </div>
  );
};

export default Pagenation;
