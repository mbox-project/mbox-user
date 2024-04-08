import PropTypes from "prop-types";
import Link from "next/link";

import { Tabs } from "antd";

import {
  ProductInformation,
  ProductPicture,
  ProductVariation,
} from "./editProductTab";
import React, { useMemo, useState } from "react";
const onChange = (key) => {
  console.log(key);
};
const EditProduct = ({ data, setData }) => {
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
          />
        ),
      },
     
    ];
  }, [data]);
  return (
    <>
       <div className=" pt-5 font-medium text-4xl">Edit Product</div>
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



export default EditProduct;
