import React from "react";
import Layout from "../../../components/AdminPagesLayout/Layout";
import Input from "../../../components/Input";
import Createnew from "../../../components/AdminMerchantDashboard/Createnew";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
const pricing = () => {
  return (
    <>
      <div className="newsletterbg">
        <Layout>
          <div className=" mt-8  flex justify-between">
            <h2 className="text-2xl">Pricing</h2>
            <Createnew />
          </div>
          <form className="flex justify-start">
            <Input
              name="search"
              type="text"
              placeHolder="Search pricing here..."
              className="w-64 p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor  poppins mt-2 border-lightGray border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
              required
            />
          </form>
          <div className="bg-white mt-10 pb-6">
            <p className="text-black flex pt-6  pb-0 px-9 ">Pricing</p>
            <div className=" px-3 md:px-5 lg:px-12 pt-6">
              <Label
                className="text-[#C1C1C1] text-xs md:text-base lg:text-xs"
                htmlFor="text"
                title="Escrow fee"
              />
              <Input
                name=""
                type="number"
                placeHolder="Enter amount (%)"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />
            </div>

            <div className=" px-3 md:px-5 lg:px-12 pt-3">
              <Label
                className="text-[#C1C1C1]  text-xs"
                htmlFor="text"
                title="Category Listing"
              />
              <Input
                name=""
                type="number"
                placeHolder="Enter amount (%)"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />
            </div>
            <div className="px-3 md:px-5 lg:px-12 pt-3">
              <Label
                className="text-[#C1C1C1]  text-xs"
                htmlFor="text"
                title="Banner Fee"
              />
              <Input
                name=""
                type="number"
                placeHolder="Enter amount (%)"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                required
              />

              <Button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
                Save
              </Button>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};
export default pricing;
