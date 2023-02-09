import { Tabs, ConfigProvider } from "antd";
import { PersonalDetails, BankInformation } from "./Tabs";
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
    label: `Bank Information`,
    children: <BankInformation />,
  },
];
const EditProfile = () => (
  <Tabs
    tabBarStyle={{ color: "#333" }}
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);
export default EditProfile;
