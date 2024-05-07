import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function SearchSelect({ selected, setSelected, data }) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-[5px] text-left shadow-md focus:outline-none focus-visible:ring-2 focusvisible:ring-white focusvisible:ring-opacity-75 focusvisible:ring-offset-2 focusvisible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  text-[#000] mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
            displayValue={selected}
            placeholder="Select Bank Name"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <FiChevronDown />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person, i) => (
                <Combobox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "text-blue-400" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person?.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-blueTheme"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
