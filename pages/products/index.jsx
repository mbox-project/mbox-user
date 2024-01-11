import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import Products from "../../components/MerchantPages/Products";
import { ProductsData } from "../../components/prodata";
import { useSelector } from "react-redux";
import AddNewProduct from "../../components/MerchantPages/AddNewProduct";
import useGetUser from "../../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { getVendorProducts } from "../../store/product/productService";
import UploadIcon from "../../components/assets/UploadIcon";
import PieCharts from "../../components/assets/PieChart";

//import axios from "axios";

const Index = () => {
  const dispatch = useDispatch();
  useGetUser();
  const [showAddProduct, setShowAddProduct] = useState(true);
  const { vendorId } = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);

  console.log(user, "user");

  useGetUser();

  const [data, setData] = useState({ vendorId: user?.id });
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(getVendorProducts({ pageNumber, pageSize }))
      .unwrap()
      .then((res) => {
        setProducts(res.data?.items?.$values || []);
      })
      .catch((error) => console.log(error));
  }, [dispatch, vendorId, pageNumber, pageSize]);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleProdVisiblity = () => {
    setShowAddProduct(!showAddProduct);
    console.log("clicked", showAddProduct);
  };

  const renderProducts = () => {
    return products?.map((product) => (
      <Products key={product.id} product={product} />
    ));
  };

  // const renderPaginationButtons = () => {
  //   return (
  //     <div>
  //       <button onClick={handlePrevPage} disabled={pageNumber === 1}>
  //         Previous
  //       </button>
  //       <button onClick={handleNextPage}>Next</button>
  //     </div>
  //   );
  // };
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
    <>
      <Layout>
        {showAddProduct ? (
          <>
            <div className="grid grid-cols-[60%_40%] gap-[0.5rem] py-[1rem]">
              <span className="bg-white rounded-[8px] border-[2px] border-solid border-[#E5E7EB] flex flex-col gap-[1%] items-center justify-center p-[4%]">
                <UploadIcon />
                <span className="flex gap-[5px] items-center justify-center">
                  <p className="text-[#444] text-[16px] font-[600]">
                    Click to upload
                  </p>
                  <p className="text-[#9A9A9A] font-[400] text-[16px]">
                    or drag and drop
                  </p>
                </span>
                <span className="flex gap-[5px] items-center justify-center">
                  <p className="text[#9A9A9A] text-[14px] font-[600]">
                    Max. File Size:
                  </p>
                  <p className="text-[#444] text-[14px] font-[600]">10MB</p>
                </span>
                <button
                  onClick={handleProdVisiblity}
                  className="text-[16px] font-[500] text-white rounded-[4px] bg-[#EF5612] py-[12px] px-[48px]"
                >
                  Upload a new product here
                </button>
              </span>
              <div className="rounded-[8px] border-[2px] border-[#E5E7EB] bg-white p-[4%] flex flex-col items-center justify-center">
                <p className="text-[#6B7280] text-[16px] font-[500] text-center">
                  All Uploaded Products (3,412)
                </p>
                <PieCharts />
                <span className="grid grid-cols-2">
                  <span className="flex gap-[0.5rem] items-center">
                    <span className="bg-[#26A17B] w-[5px] h-[5px] rounded-[2px]"></span>
                    <p className="text-[12px] text-[#9A9A9A] font-[400]">
                      Sold (54.55%)
                    </p>
                  </span>
                  <span className="flex gap-[0.5rem] items-center">
                    <span className="bg-[#EF5612] w-[5px] h-[5px] rounded-[2px]"></span>
                    <p className="text-[12px] text-[#9A9A9A] font-[400]">
                      In stock (29.50%)
                    </p>
                  </span>
                  <span className="flex gap-[0.5rem] items-center">
                    <span className="bg-[#FFBC00] w-[5px] h-[5px] rounded-[2px]"></span>
                    <p className="text-[12px] text-[#9A9A9A] font-[400]">
                      Pending (15.95%)
                    </p>
                  </span>
                </span>
              </div>
            </div>
            <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
              <h4 className="text-2xl font-medium mt-5">
                Products ({products?.length})
              </h4>
              <form>
                <select
                  id="sort"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
                >
                  <option disabled selected>
                    Sort By
                  </option>
                  <option value="p">Price</option>
                  <option value="n">name</option>
                </select>
              </form>
            </section>

            <section className="card rectCard grid grid-cols-2 gap-10 mb-5 md:grid-cols-3">
              {renderProducts()}
              {/* {ProductsData.map((prod) => {
                return (
                  <Products
                    products={prod}
                    key={prod.id}
                    showAddProduct={showAddProduct}
                  />
                );
              })} */}
            </section>
            {/* <section className="flex flex-col space-y-4 items-center justify-center">
              <h3 className="text-lg text-center mt-5">
                Click on the button below to upload a new product
              </h3>
              <button
                className="p-6 bg-brightRed text-white text-center rounded-md w-4/5"
                onClick={handleProdVisiblity}
              >
                Upload a new Product Here
              </button>
            </section> */}
            {renderPaginationButtons()}
          </>
        ) : (
          <>
            <AddNewProduct
              data={data}
              setData={setData}
              handleProdVisiblity={handleProdVisiblity}
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default Index;
