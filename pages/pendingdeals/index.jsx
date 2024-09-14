import React, { useEffect, useState } from "react";
import Layout from "../../components/PagesLayout/Layout";
import { orderProducts } from "../../components/data";
import PendingDeals from "../../components/PendingDeals";
import Pagenation from "../../components/Pagenation";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeals, getVendorAllDeals } from "../../store/deals/dealService";
import { Skeleton } from "antd";
import { SET_PENDING_DEALS } from "../../store/deals/dealsSlice";

const index = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pendingDeals, setPendingDeals] = useState([])
  const [loading , setLoading] = useState(false)
  const counter = pendingDeals?.length;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const pendingdState = useSelector((state) => state.deals.pendingDeal)
  
  useEffect(() => {
    setLoading(true)
    if (user?.role === "user" || pendingdState) {
      dispatch(getAllDeals({ dealStatus: 0, pageNumber, pageSize }))
        .unwrap()
        .then((response) => (
          console.log(response),
          setLoading(false),
          dispatch(SET_PENDING_DEALS(false)),
          setPendingDeals(response?.data?.items?.$values)
        ))
        .catch((error) => (
          console.log(error),
          setLoading(false)
        ));
      console.log("effect");
    } 
    if (user?.role === "vendor" || pendingdState)  {
      dispatch(getVendorAllDeals({ dealStatus: 0, pageNumber, pageSize }))
        .unwrap()
        .then((response) => (
          console.log(response),
          setLoading(false),
          dispatch(SET_PENDING_DEALS(false)),
          setPendingDeals(response?.data?.items?.$values)
        ))
        .catch((error) => (
          console.log(error),
          setLoading(false)
        ));
      console.log("effect");
    }

  }, [pageNumber, pageSize, pendingdState]);


  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row !bg-[#FAFAFA] !shadow-none ">
        <h4 className="text-2xl font-medium mt-5">Pending Deals ({counter})</h4>
        <form>
          <select
            id="sort"
            className=" border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="date">Date</option>
            <option value="type">Type</option>
          </select>
        </form>
      </section>
      {/* Saved Content  */}
      {
        loading ? <Skeleton active className=" mt-5"/> : 
        (
          <section className="card rectCard flex flex-col  space-y-5 !bg-[#FAFAFA]">
          {pendingDeals?.map((prod) => {
            return <PendingDeals product={prod} key={prod.id} />;
          })}
        </section>
        )
      }
    
      <Pagenation />
    </Layout>
  );
};

export default index;
