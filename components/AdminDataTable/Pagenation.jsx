import React from "react";
import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageInput, setPageInput] = useState("");

  const handleInputChange = (e) => {
    setPageInput(e.target.value);
  };

  const handleInputBlur = () => {
    const page = parseInt(pageInput, 10);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
    setPageInput("");
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleNumberClick = (number) => {
    onPageChange(number);
  };

  const renderNumberButtons = () => {
    const buttons = [];
    let start, end;

    if (totalPages <= 5) {
      start = 1;
      end = totalPages;
    } else if (currentPage <= 3) {
      start = 1;
      end = 5;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - 4;
      end = totalPages;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-1 w-8 h-8 rounded-full hover:border-violet-900 ${
            i === currentPage
              ? "bg-violet-900 text-white"
              : "font-medium text-gray-700 hover:bg-violet-900 hover:text-white"
          }`}
          onClick={() => handleNumberClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-between w-fit p-2 m-2 my-20 bg-neutral-100 rounded-md">
      <div className="flex items-center">
        <span className=" text-sm font-medium text-gray-500">
          Result {currentPage} of {totalPages}
        </span>
        <button
          className="mx-4 px-4 py-2 text-sm font-medium border-2 border-[#491546] rounded-md hover:bg-violet-900 hover:text-white"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        {renderNumberButtons()}
        <button
          className="mx-4 px-4 py-2 text-sm font-medium border-2 border-[#491546] rounded-md hover:bg-violet-900 hover:text-white"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <div className="flex items-center">
        <label htmlFor="page-input" className="text-gray-500 mr-2">
          Go to:
        </label>
        <input
          id="page-input"
          type="text"
          className="w-20 border-2 border-[#491546] rounded-md px-2 py-1 text-gray-700 hover:border-violet-900"
          value={pageInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="eg. 180"
        />
      </div>
    </div>
  );
};

export default Pagination;
