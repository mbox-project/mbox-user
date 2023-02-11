import React from "react";
import Layout from "../../components/PagesLayout/Layout";
import { orderProducts } from "../../components/data";
import DisputePage from "../../components/DisputePage";

const index = () => {
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
        {orderProducts.map((prod) => {
          return <DisputePage product={prod} key={prod.id} />;
        })}
      </section>

      <div className="flex justify-end mt-5 space-x-3">
        <p className="text-brightRed underline">Show More</p>
      </div>
    </Layout>
  );
};

export default index;
