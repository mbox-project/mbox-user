import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import Products from "../../components/MerchantPages/Products";
import { ProductsData } from "../../components/prodata";
import { useSelector } from "react-redux";
import AddNewProduct from "../../components/MerchantPages/AddNewProduct";
import useGetUser from "../../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { getVendorProducts } from "../../store/product/productService";

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
    dispatch(getVendorProducts({ pageNumber, pageSize })).unwrap()
    .then((res) => {
      setProducts(res.data?.items?.$values || []);
    })
    .catch((error) => console.log(error));;
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
    <>
      <Layout>
        {showAddProduct ? (
          <>
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
            <section className="flex flex-col space-y-4 items-center justify-center">
              <h3 className="text-lg text-center mt-5">
                Click on the button below to upload a new product
              </h3>
              <button
                className="p-6 bg-brightRed text-white text-center rounded-md w-4/5"
                onClick={handleProdVisiblity}
              >
                Upload a new Product Here
              </button>
            </section>
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
