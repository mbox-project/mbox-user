import React from "react";
import Header from "../../components/Header";
import Edit from "../../components/InvoicePage/Edit";
import Receipt from "../../components/InvoicePage/Receipt";
import MainFooter from "../../components/MainFooter";
import Spinner from "../../components/Spinner";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getInvoice } from "../../store/invoice/invoiceSlice";
import { useState } from "react";
import invoiceService from "../../store/invoice/invoiceService";
const invoiceID = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const invoiceID = router.query.invoiceID;
  const [data, setData] = useState(null);
  useEffect(() => {
    dispatch(getInvoice(invoiceID)).then((action) => {
      console.log(action);
      setData(action.payload.data);
    });
  }, []);
  const { isLoading } = useSelector((state) => state.invoice);
  return (
    // <div>
    //   <Header />
    //   <div className="flex poppins pl-24 pt-5">
    //     <p>Home </p>
    //     <p className="pl-1">invoice</p>
    //   </div>
    //   <Edit />
    //   {data && <Receipt data={data} />}
    //   <MainFooter />
    // </div>
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <div className="flex poppins pl-24 pt-5">
            <p>Home </p>
            <p className="pl-1">invoice</p>
          </div>
          <Edit />
          {data && <Receipt data={data} />}
          <MainFooter />
        </div>
      )}
    </>
  );
};
export default invoiceID;

// export async function getServerSideProps(context) {
//   const id = context.params.invoiceID;
//   const data = invoiceService.getInvoice(id);
//   return {
//     props: { data },
//   };
// }
