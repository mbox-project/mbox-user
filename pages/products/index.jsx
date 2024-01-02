import React, { useState } from "react";
import Layout from "../../components/PagesLayout/Layout";
import Products from "../../components/MerchantPages/Products";
import { ProductsData } from "../../components/prodata";
import { useSelector } from "react-redux";
import AddNewProduct from "../../components/MerchantPages/AddNewProduct";
import useGetUser from "../../hooks/useGetUser";

const Index = () => {
  useGetUser();
  const [showAddProduct, setShowAddProduct] = useState(true);
  const { vendorId } = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);
  useGetUser();
  console.log(user);
  const [data, setData] = useState({ vendorId: user?.id });
  const handleProdVisiblity = () => {
    setShowAddProduct(!showAddProduct);
    console.log("clicked", showAddProduct);
  };
  return (
    <>
      <Layout>
        {showAddProduct ? (
          <>
            <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
              <h4 className="text-2xl font-medium mt-5">
                Products ({ProductsData.length})
              </h4>
              <form>
                <select
                  id="sort"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
                >
                  <option disabled selected>
                    Sort By
                  </option>
                  <option value="p">price</option>
                  <option value="n">name</option>
                </select>
              </form>
            </section>

            <section className="card rectCard grid grid-cols-2 gap-10 mb-5 md:grid-cols-3">
              {ProductsData.map((prod) => {
                return (
                  <Products
                    products={prod}
                    key={prod.id}
                    showAddProduct={showAddProduct}
                  />
                );
              })}
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
