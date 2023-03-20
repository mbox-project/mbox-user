import React from "react";
import { useState } from "react";
import UploadImages from "../antd/UploadImages";

export const ProductInformation = () => {
  return (
    <section className="card rectCard flex flex-col py-2 space-2">
      <div className="flex flex-col">
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-md text-gray-500">
            Product Name <span className="text-brightRed">*</span>
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
          <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
            Product Qty <span className="text-brightRed">*</span>
          </label>
          <input
            type="number"
            id="qty"
            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
            placeholder="e.g 10"
            required
          />
          {/* <select
              id="prodcategory"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              required
            >
              <option disabled selected>
                Select Category
              </option>
              <option value="m">Electronics</option>
              <option value="f">Furnitures</option>
            </select> */}
        </div>
        <div className="mb-2">
          <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
            Product Tags<span className="text-brightRed">*</span>
          </label>
          <input
            type="text"
            id="tags"
            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
            placeholder="e.g clothes, shoes, belt"
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
            className="block p-4 w-full text-sm 
                  text-gray-900 bg-gray-50 rounded-md border border-gray-300"
            placeholder="Write something about the product. "
          ></textarea>
        </div>
      </div>
      {/* <div className="mb-2">
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
        </div> */}
    </section>
  );
};

export const ProductPicture = () => {
  const [res, setRes] = useState([]);
  return (
    <section className="card rectCard flex flex-col py-2 space-2">
      <UploadImages setData={setRes} />
      {/* <div className="flex flex-col">
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
      </div> */}
    </section>
  );
};

export const ProductPrice = () => {
  return (
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
  );
};

export const ProductVariation = () => {
  return (
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
  );
};
