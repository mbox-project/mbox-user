import React from "react";
import Layout from "../../components/PagesLayout/Layout";
import Link from "next/link";
const productPicture = () => {
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

      <section className="card rectCard flex flex-col py-2 space-2">
        <div className="flex flex-col">
          <div className="mb-2">
            <label htmlFor="name" className="block mb-0 text-md text-gray-500">
              Gallery Images<span className="text-brightRed">*</span>
            </label>
            <p className="text-brightRed text-xs mb-2">(Upload 4 images)</p>
            <div className="flex">
              <input
                type="text"
                id="name"
                className="bg-white border  text-sm rounded-md block w-full p-2.5"
                placeholder="Choose File"
                required
              />
              <button className="bg-gray-50 border text-sm rounded-md block ml-3 w-24 p-2.">
                {" "}
                Browse
              </button>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="name" className="block mb-0 text-md text-gray-500">
              Thumbnail Images<span className="text-brightRed">*</span>
            </label>
            <p className="text-brightRed text-xs mb-2">(Upload 4 images)</p>
            <div className="flex">
              <input
                type="text"
                id="name"
                className="bg-white border  text-sm rounded-md block w-full p-2.5"
                placeholder="Choose File"
                required
              />
              <button className="bg-gray-50 border text-sm rounded-md block ml-3 w-24 p-2.">
                {" "}
                Browse
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-4 items-center justify-center mt-5">
        <button className="p-3 bg-brightRed text-white text-center rounded-md w-4/5">
          <Link href="/productvariation">Next</Link>
        </button>
        <button className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5">
          Preview Products
        </button>
      </section>
    </Layout>
  );
};
export default productPicture;
