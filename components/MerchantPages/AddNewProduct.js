import React from "react";
import PropTypes from "prop-types";

const AddNewProduct = ({ handleProdVisiblity }) => {
  return (
    <>
      <div className="mt-10 flex p-4 bg-brightRed text-white font-bold text-lg">
        Add Product
      </div>
      <h2 className="card text-lg border-b-2 rectCard">Product Information</h2>
      <section className="card rectCard flex flex-col py-2 space-2">
        <div className="flex flex-col">
          <div className="mb-2">
            <label htmlFor="name" className="block mb-2 text-md text-gray-500">
              Name <span className="text-brightRed">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="category"
              className="block mb-2 text-md text-gray-500"
            >
              Category <span className="text-brightRed">*</span>
            </label>
            <select
              id="prodcategory"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              required
            >
              <option disabled selected>
                Select Category
              </option>
              <option value="m">Electronics</option>
              <option value="f">Furnitures</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
              Qty <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="qty"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="desc" className="block mb-2 text-md text-gray-500">
              Description
            </label>
            <textarea
              id="desc"
              rows="4"
              className="block p-2.5 w-full text-sm 
                  text-gray-900 bg-gray-50 rounded-md border border-gray-300"
              placeholder="Enter product description "
            ></textarea>
          </div>
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="file_input"
          >
            Picture
          </label>
          <input
            type="file"
            className="bg-gray-50 border rounded-md block w-full p-2"
            aria-describedby="file_input_pics"
            id="file_input"
          />
          <p className="mt-1 text-sm dark:text-gray-300" id="file_input_pics">
            PNG or JPG (Max size of 500kb).
          </p>
        </div>
      </section>

      <h2 className="card rectCard mt-10 text-lg border-b-2 ">Product Price</h2>
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
        </div>
      </section>
      <section className="flex flex-col space-y-4 items-center justify-center mt-5">
        <button className="p-3 bg-brightRed text-white text-center rounded-md w-4/5">
          Save & Upload Item
        </button>
        <button
          className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5"
          onClick={handleProdVisiblity}
        >
          All Products
        </button>
      </section>
    </>
  );
};

//props validation

AddNewProduct.propTypes = {
  handleProdVisiblity: PropTypes.func.isRequired,
};

export default AddNewProduct;
