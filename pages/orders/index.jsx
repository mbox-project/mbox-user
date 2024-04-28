import React, { useEffect, useState } from "react";
import Layout from "../../components/PagesLayout/Layout";
import { useDispatch } from "react-redux";
import { getAllInvoice } from "../../store/invoice/invoiceSlice";
import OrderProducts from "../../components/OrderProducts";
import Pagination from "../../components/Pagenation";

const Index = () => {
  const dispatch = useDispatch();
  const [orderProducts, setOrderProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // You can change this value to set how many products per page

  useEffect(() => {
    dispatch(getAllInvoice())
      .unwrap()
      .then((response) => {
        setOrderProducts(response?.$values);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = orderProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
        <h4 className="text-2xl font-medium mt-5">Orders</h4>
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
        {currentProducts?.map((prod) => (
          <OrderProducts product={prod} key={prod.id} />
        ))}
      </section>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={orderProducts?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Layout>
  );
};

export default Index;
