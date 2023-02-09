import { Tabs } from "antd";
import { PersonalDetails, BankInformation, StoreInformation } from "./Tabs";
import React from "react";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Personal Details`,
    children: <PersonalDetails />,
  },
  {
    key: "2",
    label: `Store Information`,
    children: <StoreInformation />,
  },
  {
    key: "3",
    label: `Bank Information`,
    children: <BankInformation />,
  },
];
const VendorEditProfile = () => (
  <Tabs
    tabBarStyle={{ color: "#998" }}
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);
export default VendorEditProfile;
