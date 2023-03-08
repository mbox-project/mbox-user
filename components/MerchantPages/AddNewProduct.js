import PropTypes from "prop-types";
import Link from "next/link";

import { Tabs } from "antd";
import {
  ProductInformation,
  ProductPicture,
  ProductPrice,
  ProductVariation,
} from "./AddNewProductsTabs";
import React, { useMemo, useState } from "react";
const onChange = (key) => {
  console.log(key);
};
const AddNewProduct = ({ data, setData, handleProdVisiblity }) => {
  const [activeKey, setActiveKey] = useState("1");
  const items = useMemo(() => {
    return [
      {
        key: "1",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("1")}>
            Product Information
          </div>
        ),
        children: (
          <ProductInformation data={data} setActiveKey={setActiveKey} />
        ),
      },
      {
        key: "2",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("2")}>
            Product Pictures
          </div>
        ),
        children: (
          <ProductPicture
            data={data}
            setData={setData}
            setActiveKey={setActiveKey}
          />
        ),
      },
      {
        key: "3",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("3")}>
            Product Variation
          </div>
        ),
        children: <ProductVariation data={data} setData={setData} />,
      },
      {
        key: "4",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("4")}>
            Product Price
          </div>
        ),
        children: <ProductPrice data={data} setData={setData} />,
      },
    ];
  }, [data]);
  return (
    <>
      <Tabs
        tabBarStyle={{ color: "#998" }}
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        items={items}
        onChange={onChange}
      />
      <section className="flex flex-col space-y-4 items-center justify-center mt-5">
        <button className="p-3 bg-brightRed text-white text-center rounded-md w-4/5">
          <Link href="/productpicture">Next</Link>
        </button>
        <button
          className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5"
          onClick={handleProdVisiblity}
        >
          Preview Products
        </button>
      </section>
    </>
  );
};

// const AddNewProduct = ({ handleProdVisiblity }) => {
//   return (
//     <>
//       <div className="mt-10 flex p-4 border-2   font-bold text-lg">
//         Add Product
//       </div>
//       <div className="flex text-md justify-between card border-b-2 rectCard">
//         <h2 className="">Product Information</h2>
//         <h2 className=" ">Product Pictures</h2>
//         <h2 className="   ">Product Variation</h2>
//         <h2 className="  ">Product Price</h2>
//       </div>
//       <section className="card rectCard flex flex-col py-2 space-2">
//         <div className="flex flex-col">
//           <div className="mb-2">
//             <label htmlFor="name" className="block mb-2 text-md text-gray-500">
//               Product Name <span className="text-brightRed">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
//               placeholder="Product Name"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
//               Product Qty <span className="text-brightRed">*</span>
//             </label>
//             <input
//               type="number"
//               id="qty"
//               className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
//               placeholder="e.g 10"
//               required
//             />
//             {/* <select
//               id="prodcategory"
//               className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
//               required
//             >
//               <option disabled selected>
//                 Select Category
//               </option>
//               <option value="m">Electronics</option>
//               <option value="f">Furnitures</option>
//             </select> */}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
//               Product Tags<span className="text-brightRed">*</span>
//             </label>
//             <input
//               type="text"
//               id="tags"
//               className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
//               placeholder="e.g clothes, shoes, belt"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="desc" className="block mb-2 text-md text-gray-500">
//               Description
//             </label>
//             <textarea
//               id="desc"
//               rows="4"
//               className="block p-4 w-full text-sm
//                   text-gray-900 bg-gray-50 rounded-md border border-gray-300"
//               placeholder="Write something about the product. "
//             ></textarea>
//           </div>
//         </div>
//         {/* <div className="mb-2">
//           <label
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             htmlFor="file_input"
//           >
//             Picture
//           </label>
//           <input
//             type="file"
//             className="bg-gray-50 border rounded-md block w-full p-2"
//             aria-describedby="file_input_pics"
//             id="file_input"
//           />
//           <p className="mt-1 text-sm dark:text-gray-300" id="file_input_pics">
//             PNG or JPG (Max size of 500kb).
//           </p>
//         </div> */}
//       </section>

//       {/* <h2 className="card rectCard mt-10 text-lg border-b-2 ">Product Price</h2>
//        */}
//       <section className="flex flex-col space-y-4 items-center justify-center mt-5">
//         <button className="p-3 bg-brightRed text-white text-center rounded-md w-4/5">
//           <Link href="/productpicture">Next</Link>
//         </button>
//         <button
//           className="p-3 border border-brightRed text-center text-brightRed rounded-md w-4/5"
//           onClick={handleProdVisiblity}
//         >
//           Preview Products
//         </button>
//       </section>
//     </>
//   );
// };

//props validation

// AddNewProduct.propTypes = {
//   handleProdVisiblity: PropTypes.func.isRequired,
// };

export default AddNewProduct;
