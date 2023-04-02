import React from "react";
import Input from "../Input";
import Scroll from "../Scroll";
import Alloptions from "./Alloptions";
const AllPayoutRequest = () => {
  return (
    <section className=" mt-12  bg-white">
      <div className="">
        <div className="bg-white hidden lg:flex  px-5 lg:justify-between  ml-0  poppins pt-4 pl-4">
          <h5 className="font-medium poppins text-md">All Payout Request</h5>
          <form>
            <select
              id="sort"
              className="bg-gray-10 border text-gray-500 text-sm rounded-md p-2.5 px-10"
            >
              <option disabled selected>
                All Request
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
          <form>
            <select
              id="sort"
              className="bg-gray-10 border text-gray-500 text-sm rounded-md p-2.5 px-10 "
            >
              <option disabled selected>
                Sort By
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
        </div>

        <div className="bg-white hidden lg:flex justify-between  ml-0  poppins pt-8 pl-4">
          <div className=" flex">
            <Input type="checkbox" />
            <p className="pl-4">Merchant</p>
          </div>
          <div className=" flex">
            <p>Store Name</p>
          </div>
          <div className=" flex">
            <p>Amount</p>
          </div>
          <div className=" flex">
            <p>Requested on</p>
          </div>
          <div className=" flex">
            <p className="pr-6">Options</p>
          </div>
        </div>
      </div>

      <Alloptions />
      <Scroll />
    </section>
  );
};
export default AllPayoutRequest;
