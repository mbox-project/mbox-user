import PropTypes from "prop-types";
import Link from "next/link";

import { Tabs } from "antd";
// import {
//   ProductInformation,
//   ProductPicture,
//   ProductPrice,
//   ProductVariation,
// } from "./AddNewProductsTabs";
import {
  ProductInformation,
  ProductPicture,
  ProductVariation,
} from "./AddNewProductsTabs";
import React, { useMemo, useState } from "react";
const onChange = (key) => {
  console.log(key);
};
const AddNewProduct = ({ data, setData, handleProdVisiblity,fetchVendorProducts }) => {
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
          <ProductInformation
            data={data}
            setData={setData}
            setActiveKey={setActiveKey}
          />
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
        children: (
          <ProductVariation
            data={data}
            setData={setData}
            setActiveKey={setActiveKey}
            handleProdVisiblity={handleProdVisiblity}
            fetchVendorProducts={fetchVendorProducts}
          />
        ),
      },
      // {
      //   key: "4",
      //   label: (
      //     <div className="text-gray-500" onClick={() => setActiveKey("4")}>
      //       Product Price
      //     </div>
      //   ),
      //   children: (
      //     <ProductPrice
      //       data={data}
      //       setData={setData}
      //       setActiveKey={setActiveKey}
      //     />
      //   ),
      // },
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
    </>
  );
};



export default AddNewProduct;
