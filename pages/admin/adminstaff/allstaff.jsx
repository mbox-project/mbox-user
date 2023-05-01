import React from "react";
import Layout from "../../../components/AdminPagesLayout/Layout";
import StaffTable from "../../../components/AdminDataTable/StaffTable";
import { BsPlusCircle } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const AllStaff = () => {
  return (
    <Layout>
      <section>
        <div className=" py-10 p-2 w-full text-slate-700 font-poppins">
          <div className="">
            <div className=" flex justify-between py-5">
              <h2 className=" text-3xl font-medium">Admin</h2>
              <button className="flex w-fit h-10 p-2 gap-2 text-center text-white bg-orange-600 border rounded-md">
                <BsPlusCircle />
                Add New Staff
              </button>
            </div>
            <div>
              <form>
                <input
                  icon={<BsSearch />}
                  className=" w-60 h-10 text-sm px-2 bg-neutral-100 border border-slate-400 rounded-md"
                  type="text"
                  placeholder="Search Staffs here..."
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <StaffTable />
    </Layout>
  );
};

export default AllStaff;
