import React from "react";
import Layout from "../../components/PagesLayout/Layout";
import Link from "next/link";
const productPrice = () => {
  return (
    <Layout>
      <div className="mt-10 flex p-4 border-2   font-bold text-lg">
        Add Product
      </div>
      <div className="flex text-md justify-between card border-b-2 rectCard">
        <h2 className="">Product Information</h2>
        <h2 className=" ">Product Pictures</h2>
        <h2 className="   ">Product Variation</h2>
        <h2 className="  ">Product Price</h2>
      </div>

      <section className="card flex flex-col py-2 space-2 rectCard">
        <div className="flex flex-col">
          <div className="mb-2">
            <label
              htmlFor="unitprice"
              className="block mb-2 text-md text-gray-500"
            >
              Unit Price <span className="text-brightRed">*</span>
            </label>
            <input
              type="text"
              id="unitprice"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product unit price"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="discount"
              className="block mb-2 text-md text-gray-500"
            >
              Discount <span className="text-brightRed">*</span>
            </label>
            <input
              type="text"
              id="discount"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product discount"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="discount"
              className="block mb-2 text-md text-gray-500"
            >
              Quantity <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="qty"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product discount"
              required
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-4 items-center justify-center mt-5">
        <button className="p-3 bg-brightRed text-white text-center rounded-md w-4/5">
          <Link href="/productprice">Next</Link>
        </button>
        <button className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5">
          Preview Products
        </button>
      </section>
    </Layout>
  );
};
export default productPrice;
