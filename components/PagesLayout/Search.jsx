import React from "react";

const Search = () => {
  return (
    <form className="hidden relative space-x-2 md:flex md:flex-1 md:items-center">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        className="focus:ring-2 focus:ring-brightRed-500 focus:outline-none appearance-none 
                                w-full text-md leading-6 text-slate-900 placeholder-slate-400 py-2 rounded-md
                                pl-10 ring-1 ring-slate-200"
        type="text"
        placeholder="What are you looking for ?... "
      />
      <button className="p-2 px-6 text-white bg-brightRed rounded-lg baseline">
        Search
      </button>
    </form>
  );
};

export default Search;
