import React from "react";
import { useState } from "react";
import UploadImages from "../antd/UploadImages";
import { uploadProduct } from "../../store/product/productService";
import { toastify } from "../../helpers";
import { useDispatch } from "react-redux";

export const ProductInformation = ({ setData, data, setActiveKey }) => {
  const handleChange = (e) => {
    setData((prev) => {
      const update = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return { ...update };
    });
    console.log(data);
  };
  const handleTagsChange = (e) => {
    setData((prev) => {
      const update = {
        ...prev,
        [e.target.name]: e.target.value.split(","),
      };
      return { ...update };
    });
    console.log(data);
  };
  return (
    <section className="card rectCard flex flex-col py-2 space-2">
      <div className="flex flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setActiveKey("2");
          }}
        >
          <div className="mb-2">
            <label htmlFor="name" className="block mb-2 text-md text-gray-500">
              Product Name <span className="text-brightRed">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="unitprice"
              className="block mb-2 text-md text-gray-500"
            >
              Unit Price <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="unitprice"
              name="price"
              value={data.price}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product unit price"
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
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="e.g 10"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="tags" className="block mb-2 text-md text-gray-500">
              Product Tags<span className="text-brightRed">*</span>
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={data.tags}
              onChange={handleTagsChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="e.g clothes, shoes, belt"
              required
            />
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="discount"
              className="block mb-2 text-md text-gray-500"
            >
              Discount <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={data.discount}
              onChange={handleChange}
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product discount in percentage"
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
              name="description"
              value={data.description}
              onChange={handleChange}
              className="block p-4 w-full text-sm 
                  text-gray-900 bg-gray-50 rounded-md border border-gray-300"
              placeholder="Write something about the product. "
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 bg-brightRed text-white text-center rounded-md w-4/5"
          >
            Next
          </button>
        </form>
      </div>
    </section>
  );
};

export const ProductPicture = ({ setData, setActiveKey }) => {
  const [res, setRes] = useState([]);
  return (
    <section className="card rectCard flex flex-col py-2 space-2">
      <UploadImages setData={setRes} />
      <button
        onClick={() => {
          if (setRes.length > 0) {
            setData((prev) => {
              return { ...prev, images: [...res] };
            });
            setActiveKey("3");
          }
        }}
        type="submit"
        className="p-3 bg-brightRed text-white text-center rounded-md w-4/5"
      >
        Next
      </button>
    </section>
  );
};

export const ProductPrice = ({ data, setData, setActiveKey }) => {
  const handleChange = (e) => {
    setData((prev) => {
      const update = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return { ...update };
    });
    console.log(data);
  };
  return (
    <section className="card flex flex-col py-2 space-2 rectCard">
      <div className="flex flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-2">
            <label
              htmlFor="unitprice"
              className="block mb-2 text-md text-gray-500"
            >
              Unit Price <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="unitprice"
              name="price"
              value={data.price}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product unit price"
              required
            />
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="discount"
              className="block mb-2 text-md text-gray-500"
            >
              Discount <span className="text-brightRed">*</span>
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={data.discount}
              onChange={handleChange}
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product discount in percentage"
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
              name="quantitiy"
              value={data.quantity}
              onChange={handleChange}
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="Enter product discount"
              required
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-brightRed text-white text-center rounded-md w-4/5"
          >
            Next
          </button>
        </form>
      </div>
    </section>
  );
};

export const ProductVariation = ({
  data,
  setData,
  setActiveKey,
  handleProdVisiblity,
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData((prev) => {
      const update = {
        ...prev,
        [e.target.name]: e.target.value.split(","),
      };
      return { ...update };
    });
    console.log(data);
  };
  return (
    <section className="card flex flex-col py-2 space-2 rectCard">
      <div className="flex flex-col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-2">
            <label
              htmlFor="colors"
              className="block mb-2 text-md text-gray-500"
            >
              Available Colors <span className="text-brightRed">*</span>
            </label>
            <p className="text-brightRed text-xs mb-2">
              (type all available colors seperated by ",")
            </p>
            <input
              type="text"
              id="colors"
              name="colors"
              value={data.colors}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Select Colors"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="sizes" className="block mb-2 text-md text-gray-500">
              Available Sizes <span className="text-brightRed">*</span>
            </label>
            <p className="text-brightRed text-xs mb-2">
              (type all available sizes seperated by ",")
            </p>
            <input
              type="text"
              id="sizes"
              name="sizes"
              value={data.sizes}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="small, medium, large"
              required
            />
          </div>
          <button
            className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5"
            // onClick={handleProdVisiblity}
            onClick={() => {
              dispatch(uploadProduct(data))
                .unwrap()
                .then((res) =>
                  toastify.alertSuccess(
                    "product uploaded successfully",
                    3000,
                    handleProdVisiblity
                  )
                )
                .catch((error) => toastify.alertError(error, 3000));
            }}
          >
            Preview Products
          </button>
        </form>
      </div>
    </section>
  );
};
