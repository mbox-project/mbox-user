import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import VendorReport from "../../components/MerchantPages/report";
import BuyerReport from "../../components/BuyersPage/report";
import { selectRole } from "../../store/selectors/selectors";

const Report = () => {
  const role = useSelector(selectRole);

  return (
    <>
    {
      role === "vendor" ? <VendorReport /> : <BuyerReport />
    }
     
    </>
  );
};

export default Report;
