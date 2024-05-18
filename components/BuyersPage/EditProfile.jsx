import { Tabs } from "antd";
import { useState } from "react";
import { PersonalDetails, BankInformation } from "../MerchantPages/Tabs";
import { useMemo } from "react";
import React from "react";
const onChange = (key) => {
  console.log(key);
};

const EditProfile = ({ data, setData }) => {
  const [activeKey, setActiveKey] = useState("1");
  const items = useMemo(
    () => [
      {
        key: "1",
        label: `Personal Details`,
        children: <PersonalDetails data={data} setData={setData} setActiveKey={setActiveKey} />,
      },
      {
        key: "2",
        label: `Bank Information`,
        children: (
          <BankInformation
            data={data}
            setData={setData}
            setActiveKey={setActiveKey}
          />
        ),
      },
    ],
    []
  );
  return (
    <Tabs
      tabBarStyle={{ color: "#333" }}
      defaultActiveKey="1"
      // activeKey={activeKey}
      items={items}
      onChange={onChange}
    />
  );
};
export default EditProfile;
