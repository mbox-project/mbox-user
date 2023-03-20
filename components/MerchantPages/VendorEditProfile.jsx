import { Tabs } from "antd";
import { PersonalDetails, BankInformation, StoreInformation } from "./Tabs";
import React, { useMemo, useState } from "react";
const onChange = (key) => {
  console.log(key);
};
const VendorEditProfile = ({ data, setData }) => {
  const [activeKey, setActiveKey] = useState("1");
  const items = useMemo(() => {
    return [
      {
        key: "1",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("1")}>
            Personal Details
          </div>
        ),
        children: <PersonalDetails data={data} setActiveKey={setActiveKey} />,
      },
      {
        key: "2",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("3")}>
            Store Information
          </div>
        ),
        children: (
          <StoreInformation
            data={data}
            setData={setData}
            setActiveKey={setActiveKey}
          />
        ),
      },
      {
        key: "3",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("2")}>
            Bank Information
          </div>
        ),
        children: <BankInformation data={data} setData={setData} />,
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
      <div className="mb-6">
        <p>
          You have reported 4 buyers so far, would you like to review decisions?
        </p>
        <span className="text-red-500">CLICK HERE</span>
      </div>
    </>
  );
};
export default VendorEditProfile;
