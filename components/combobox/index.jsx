import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function SearchSelect({
  selected,
  setSelected,
  suffix,
  data,
  label,
}) {
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
    <div className="text-[16px] leading-[160%] py-[0.3rem]">
      <div className="font-[600] text-[#181336]">{label}</div>
      <Combobox value={selected?.name} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-[5px] text-left shadow-md focus:outline-none focus-visible:ring-2 focusvisible:ring-white focusvisible:ring-opacity-75 focusvisible:ring-offset-2 focusvisible:ring-offset-teal-300 sm:text-sm">
            {suffix && (
              <div className="w-[8%] absolute left-[3%] translate-y-[-50%] top-[50%]">
                <div className="flex items-center justify-around">
                  <img
                    className="w-[25px] h-[25px] mr-[0.4rem]"
                    src={selected?.suffix}
                  />
                  <span className="block text-[22px] text-[#B8C9C9]">|</span>
                </div>
              </div>
            )}
            <Combobox.Input
              className="w-full font-[400] rounded-[5px] pl-[12%] md:pl[12%] py-[12px] px-[16px] border-solid  border-[1.5px] bg-gray-100 text-[#899A9A] focus-visible:outline-[#3180E7]"
              displayValue={selected?.name}
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
                        active ? "bg-blueTheme text-white" : "text-gray-900"
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
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                            "/"
                          </span>
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
    </div>
  );
}
