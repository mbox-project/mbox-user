import React from "react";
import Sidebar from "../../components/PagesLayout/Sidebar";
import Navbar from "../../components/PagesLayout/Navbar";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
const endorse = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-[#FAFAFA]">
        <Sidebar />
        <div className="w-full  mx-20">
          <div className=" mt-10">
            <p className="bg-white  pt-5 pb-2 px-4 poppins rounded-sm border-b">
              Endorse a store{" "}
            </p>
          </div>
          <div className="bg-white  pt-5 pb-2 px-4 poppins rounded-sm">
            <div className=" px-4 pt-3">
              <Label
                className="text-[#C1C1C1]  text-sm"
                htmlFor="text"
                title="Full Name"
              />
              <Input
                name="issuer"
                type="text"
                placeHolder="Taylor Mason"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />
            </div>
            <div className=" px-4 pt-3">
              <Label
                className="text-[#C1C1C1]  text-sm"
                htmlFor="text"
                title="Store Name"
              />
              <Input
                name="issuer"
                type="text"
                placeHolder="Giveon's Crib"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />
            </div>
            <div className=" px-4 pt-3">
              <Label
                className="text-[#C1C1C1]  text-sm"
                htmlFor="text"
                title="Comment (Optional)"
              />
              <Input
                name="issuer"
                type="text"
                placeHolder=""
                className="w-full p-1 md:p-2 lg:py-12  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />
            </div>
            <Button className=" w-24 my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white relative left-96 text-base poppins">
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between pl-24 pt-5  text-sm poppins ">
          <p className="flex text-[#76C2AA]">Endorse Businesses</p>
          <form>
            <select
              id="sort"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
            >
              <option disabled selected>
                Sort By
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
          <hr />
        </div>
        <div className="flex justify-between">
          <div>Store Name</div>
          <div>Date & Time</div>
          <div> Reason</div>
        </div>
        <div className="flex justify-between">
          <div>Giveons Crib</div>
          <div>09.01.2022,06:34am</div>
          <div> Reason</div>
        </div>
        <div className="flex justify-between">
          <div>Giveons Crib</div>
          <div>09.01.2022,06:34am</div>
          <div> Reason</div>
        </div>
        <div className="flex justify-between">
          <div>Giveons Crib</div>
          <div>09.01.2022,06:34am</div>
          <div> Reason</div>
        </div>
      </div>
    </div>
  );
};
export default endorse;
