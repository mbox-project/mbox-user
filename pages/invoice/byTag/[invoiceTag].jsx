import React from "react";
import Edit from "../../../components/InvoicePage/Edit";
import Receipt from "../../../components/InvoicePage/Receipt";
import MainFooter from "../../../components/MainFooter";
import Spinner from "../../../components/Spinner";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getInvoiceByTag } from "../../../store/invoice/invoiceSlice";
import { useState } from "react";
import Navbar from "../../../components/PagesLayout/Navbar";
import { payInvoice } from "../../../store/fundwallet/walletService";
import Button from "../../../components/Button";
import { toastify } from "../../../helpers";
import CustomAlertModal from "../../../Utils/CustomAlertModal";

const invoiceID = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { invoiceTag } = router.query;
 useEffect(() => {
    if (invoiceID) {
      dispatch(getInvoiceByTag(invoiceTag))
        .unwrap()
        .then((action) => {
          setData(action);
          console.log(action);
        })
        .catch((error) => console.log(error));
    } 
  }, [dispatch, invoiceTag]);

  const { isLoading } = useSelector((state) => state.invoice);
  const { isLoading: isPaying } = useSelector((state) => state.wallet);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {isLoading || isPaying ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
          {/* <div className="flex poppins pl-24 pt-5">
            <p>Home </p>
            <p className="pl-1">invoice</p>
          </div> */}
          <div className="flex justify-end w-full py-10 pr-20">
            {user?.role === "user" ? (
              <Button
                onClick={() => {
                  dispatch(payInvoice(invoiceTag))
                    .unwrap()
                    .then((res) => {
                      CustomAlertModal.show("success", "Invoice Payment","You have successfully paid for this invoice",()=>router.push("/wallet") )
                    })
                    .catch((error) => {
                      toastify.alertError(
                        error?.message || "something went wrong",
                        3000
                      );
                    });
                }}
                className="rounded-[8px] bg-brightRed px-[3rem] py-[0.5rem] text-white"
              >
                Pay now
              </Button>
            ) : (
              <Edit data={data?.data?.id} tag={data?.data?.tag}/>
            )}
          </div>
          {data && <Receipt data={data?.data} />}
          <MainFooter />
        </div>
      )}
      <CustomAlertModal />
    </>
  );
};
export default invoiceID;
