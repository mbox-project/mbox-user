import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import { orderProducts } from "../../components/data";
import DisputePage from "../../components/DisputePage";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeals, getVendorAllDeals } from "../../store/deals/dealService";

const index = () => {
  const dispatch = useDispatch();
  const [deals, setDeals] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const dealStatus = 2;
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if(user?.role === "user"){
      dispatch(getAllDeals({ dealStatus, pageNumber, pageSize })).unwrap()
      .then((res) => {
        console.log(res?.data?.items?.$values);
        setDeals(res?.data?.items?.$values || []);
      })
      .catch((error) => console.log(error));
    }else {
      dispatch(getVendorAllDeals({ dealStatus, pageNumber, pageSize })).unwrap()
      .then((res) => {
        console.log(res?.data?.items?.$values);
        setDeals(res?.data?.items?.$values || []);
      })
      .catch((error) => console.log(error));;
    }
  
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
        <DisputePage product={product} key={product.id} />
        // <PendingProducts key={product.id} product={product} />
    ));
  };

  const renderPaginationButtons = () => {
    return (
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded-md ${pageNumber === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
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
      <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
        <h4 className="text-2xl font-medium mt-5">Disputes</h4>
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
      <section className="card rectCard flex flex-col space-y-5">
      {renderDeals()}
        {/* {orderProducts.map((prod) => {
          return <DisputePage product={prod} key={prod.id} />;
        })} */}
      </section>
      {renderPaginationButtons()}

      <div className="flex justify-end mt-5 space-x-3">
        <p className="text-brightRed underline">Show More</p>
      </div>
    </Layout>
  );
};

export default index;
