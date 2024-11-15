import { Tabs } from "antd";
import { useState } from "react";

import { useMemo } from "react";
import React from "react";
import { PersonalDetails, BankInformation, PasswordDetails } from "./Tabs";
const onChange = (key) => {
  console.log(key);
};

const EditProfile = ({ data, setData, userData }) => {
  const [activeKey, setActiveKey] = useState("1");
  const items = useMemo(
    () => [
      {
        key: "1",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("1")}>
            Personal Details
          </div>
        ),
        children: <PersonalDetails data={data} userData={userData} setData={setData} setActiveKey={setActiveKey} />,
      },
      {
        key: "2",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("2")}>
           Change Password
          </div>
        ),
        children: (
          <PasswordDetails
            data={data}
            setData={setData}
            //setActiveKey={setActiveKey}
          />
        ),
      },
      {
        key: "3",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("3")}>
            Bank Information
          </div>
        ),
        children: (
          <BankInformation
            data={data}
            setData={setData}
            //setActiveKey={setActiveKey}
          />
        ),
      },
    ],
    [data]
  );
  return (
    <Tabs
      tabBarStyle={{ color: "#333", backgroundColor: "white", padding:"12px", paddingBottom: "0", borderTopRightRadius: "10px", borderTopLeftRadius:"10px", margin: "0" }}
      defaultActiveKey={activeKey}
      activeKey={activeKey}
       //activeKey={activeKey}
      items={items}
      onChange={onChange}
      //tabBarStyle="  p-3"
      className="mt-7"
    />
  );
};
export default EditProfile;
