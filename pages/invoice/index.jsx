import React from "react";
import Header from "../../components/Header";
import Edit from "../../components/InvoicePage/Edit";
import Receipt from "../../components/InvoicePage/Receipt";
import MainFooter from "../../components/MainFooter";
const index = () => {
  return (
    <div>
      <Header />
      <div className="flex poppins pl-24 pt-5">
        <p>Home </p>
        <p className="pl-1">invoice</p>
      </div>
      <Edit />
      <Receipt />
      <MainFooter />
    </div>
  );
};
export default index;
