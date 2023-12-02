import React from "react";
import Layout from "../../../components/AdminPagesLayout/Layout";
import Input from "../../../components/Input";
import Addmerchant from "../../../components/AdminMerchantDashboard/Addmerchant";
import AllPayout from "../../../components/AdminMerchantDashboard/Allpayout";
const merchantPayout = () => {
  return (
    <>
      <div className="newsletterbg">
        <Layout>
          <div className=" mt-8  flex justify-between">
            <h2 className="text-2xl">Merchants</h2>
            <Addmerchant />
          </div>
          <form className="flex justify-start">
            <Input
              name="search"
              type="text"
              placeHolder="Search Payouts here..."
              className="w-64 p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor  poppins mt-2 border-lightGray border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
              required
            />
          </form>
          <AllPayout />
        </Layout>
      </div>
    </>
  );
};
export default merchantPayout;
