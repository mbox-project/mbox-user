import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import { orderProducts } from "../../components/data";
import SuccessfulProducts from "../../components/SuccessfulProducts";
import PageScroll from "../../components/PageScroll";
import { useDispatch } from "react-redux";
import { getAllDeals } from "../../store/deals/dealService";

const index = () => {
  const dispatch = useDispatch();
  const [deals, setDeals] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const dealStatus = 2;

  useEffect(() => {
    dispatch(getAllDeals({ dealStatus, pageNumber, pageSize }))
      .unwrap()
      .then((res) => {
        console.log(res.data?.items?.$values);
        setDeals(res.data?.items?.$values || []);
      })
      .catch((error) => console.log(error));
  }, [dispatch, pageNumber, pageSize]);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const renderDeals = () => {
    return deals?.map((product) => (
      <SuccessfulProducts key={product.id} product={product} />
    ));
  };

  const renderPaginationButtons = () => {
    return (
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded-md ${
            pageNumber === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center !bg-[#FAFAFA] text-lg border-b-2 mt-8 md:flex-row ">
        <div className="mt-5">
          <h4 className="text-xl font-medium">Successful Deals</h4>
        </div>
        <form>
          <select
            id="sort"
            className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="d">date</option>
            <option value="c">type</option>
          </select>
        </form>
      </section>

      {/* Orders Content  */}
      <section className="flex flex-col bg-[#FAFAFA] py-5 space-y-5">
        {renderDeals()} 
        {/* {orderProducts.map((prod) => {
          return <SuccessfulProducts product={prod} key={prod.id} />;
        })} */}
      </section>
      {renderPaginationButtons()}
      {/* <PageScroll /> */}
    </Layout>
  );
};

export default index;
