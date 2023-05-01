import React from "react";
import StaffDataTable from "./StaffDataTable";
import { TbDotsVertical } from "react-icons/tb";

const StaffTable = () => {
  return (
    <section>
      <div className=" w-full bg-white text-slate-700 font-poppins rounded-md">
        <div className="flex justify-between p-5 border-b">
          <div>
            <h2 className="p-2 text-xl font-medium">All Staffs</h2>
          </div>
          <div className="flex gap-10">
            <div>
              <select className=" w-40 h-9 p-2 text-sm text-slate-400 border border-slate-400 bg-neutral-100 rounded">
                <option value="sort-by" selected>
                  All Department
                </option>
                <option value="name">Frontend</option>
                <option value="price">backend</option>
                <option value="status">Sales</option>
                <option value="day">Markrting</option>
              </select>
            </div>
            <div>
              <select className=" w-40 h-9 p-2 text-sm text-slate-400 border border-slate-400 bg-neutral-100 rounded">
                <option value="sort-by" selected>
                  Sort By
                </option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="status">Status</option>
                <option value="day">Day</option>
              </select>
            </div>
            <div>
              <a>
                <TbDotsVertical size={30} />
              </a>
            </div>
          </div>
        </div>

        <StaffDataTable />
      </div>
    </section>
  );
};

export default StaffTable;
