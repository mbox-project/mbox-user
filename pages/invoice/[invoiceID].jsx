import React from "react";
import Edit from "../../components/InvoicePage/Edit";
import Receipt from "../../components/InvoicePage/Receipt";
import MainFooter from "../../components/MainFooter";
import Spinner from "../../components/Spinner";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getInvoice } from "../../store/invoice/invoiceSlice";
import { useState } from "react";
import Navbar from "../../components/PagesLayout/Navbar";
const invoiceID = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { invoiceID } = router.query;
  console.log(invoiceID);
  useEffect(() => {
    dispatch(getInvoice(invoiceID))
      .unwrap()
      .then((action) => {
        console.log(action);
        setData(action);
      })
      .catch((error) => console.log(error));
  }, [invoiceID]);
  const { isLoading } = useSelector((state) => state.invoice);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
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
//   const data = await invoiceService.getInvoice(id);
//   return {
//     props: { data },
//   };
// }
