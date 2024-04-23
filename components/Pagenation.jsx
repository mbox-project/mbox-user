import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="flex justify-end mt-5 space-x-3">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-brightPurple text-white text-center rounded-lg  p-2 px-6"
      >
        Previous
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-brightPurple text-white text-center rounded-lg  p-2 px-6"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
