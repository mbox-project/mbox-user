import { Tabs } from "antd";
import { PersonalDetails, BankInformation, StoreInformation } from "./Vendortabs";
import React, { useMemo, useState, useRef, useEffect } from "react"
import { useRouter } from "next/router";
import { GrStatusGood } from "react-icons/gr";
import { Modal } from 'antd';
import { LogOut, makeStore } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
const onChange = (key) => {
  console.log(key);
};
const BecomeVendor = ({ data, setData }) => {
  const [activeKey, setActiveKey] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const store = makeStore();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      intervalRef.current = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 1) {
            clearInterval(intervalRef.current);
             router.push("/auth/login"); // Redirect to login page
            store.__persistor
            .purge()
            .then(() => console.log("state cleared"))
            .catch(() => console.log("error"));
            if (typeof window !== undefined) {
              sessionStorage.removeItem("token");
            }
            dispatch(LogOut());
            router.push("/auth/login");
          
            return 0; // Ensure countdown stops at 0
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    } else {
      // If the modal is closed, clear the interval
      clearInterval(intervalRef.current);
    }
  
    return () => clearInterval(intervalRef.current); // Cleanup interval
  }, [isModalOpen]);
  
  const items = useMemo(() => {
    return [
      {
        key: "1",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("1")}>
            Personal Details
          </div>
        ),
        children: <PersonalDetails data={data} setData={setData} setActiveKey={setActiveKey} />,
      },
      {
        key: "2",
        label: (
          <div className="text-gray-500" onClick={() => setActiveKey("2")}>
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
          <div className="text-gray-500" onClick={() => setActiveKey("3")}>
            Bank Information 
          </div>
        ),
        children: (
          <>
            <BankInformation data={data} setData={setData} showModal={showModal} />

          </>

        ),
      },
    ];
  }, [data, setData, showModal]);
  return (
    <>
      <Tabs
        tabBarStyle={{ color: "#998" }}
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        items={items}
        onChange={onChange}
      />

      <Modal title="Upgrade to vendor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} maskClosable={false} footer={null}>
        <div className=" text-center text-lime-500">
          You are now a vendor!
        </div>
        <div className=" w-full flex justify-center text-lime-500 text-7xl font-extrabold">
        <GrStatusGood />
        </div>
        <p className=" text-center">You will be redirected to login again</p>
        <p>Redirecting in {countdown} seconds...</p>
      </Modal>

    </>
  );
};
export default BecomeVendor;
