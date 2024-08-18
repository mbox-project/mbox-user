import React, { useState } from "react";
import { Modal } from "antd";
import Shorts from "/public/img/shorts.png";
import Image from "next/image";

const TransactionDetailsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={showModal}
        className="bg-amber-600 py-3 px-9 text-white font-medium text-lg"
      >
        Open Modal
      </button>

      <Modal
        title={<h2 className="text-[28px] font-medium">Transaction Details</h2>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={null}
      >
        <hr />

        <div className="!text-[#444444] flex flex-col gap-8 py-4 pb-8">
          <div className="flex gap-2 lg:gap-8 justify-between items-center">
            <div className="flex gap-2">
              <div className="bg-white rounded-[5px] shadow-lg p-4 shadow-[#9A9A9A12] w-[150px] h-[131px] flex items-center justify-center">
                <Image src={Shorts} alt="item" />
              </div>
              <span className="flex flex-col gap-1 justify-center">
                <p className="text-sm text-[#9A9A9A]">
                  Purchased from Giveon’s Crib
                </p>
                <p className="text-[22px] font-semibold">Men’s Swim Short</p>
                <p className="text-base">Today, 09:41 PM</p>
              </span>
            </div>
            <h3 className="text-[36px] text-[#034694] leading-tight font-semibold">
              $99.99
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <span className="flex gap-8 justify-between text-xl capitalize">
              <p className="text-[#9A9A9A]">Quantity</p>
              <p className="font-medium normal-case">x2</p>
            </span>
            <span className="flex gap-8 justify-between text-xl capitalize">
              <p className="text-[#9A9A9A]">Brand</p>
              <p className="font-medium">Nike</p>
            </span>
            <span className="flex gap-8 justify-between text-xl capitalize">
              <p className="text-[#9A9A9A]">Color</p>
              <p className="font-medium">Black</p>
            </span>
            <span className="flex gap-8 justify-between text-xl capitalize">
              <p className="text-[#9A9A9A]">Size</p>
              <p className="font-medium uppercase">xxl</p>
            </span>
          </div>

          <div className="flex gap-12 justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#9A9A9A]">Store Address</p>
              <span className="flex gap-4 items-center">
                <DotIcon />
                <p className="text-lg">1901 Cresent GRA, VI, Lagos.</p>
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#9A9A9A]">Drop off Location</p>
              <span className="flex gap-4 items-center">
                <CheckIcon />
                <p className="text-lg">1801 Cresent GRA, VI, Lagos.</p>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default TransactionDetailsModal;

const DotIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="size-[18px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        transform="matrix(1 0 0 -1 1 25)"
        fill="#EDF8FF"
        stroke="#034694"
        stroke-width="2"
      />
      <circle
        cx="8"
        cy="8"
        r="8"
        transform="matrix(1 0 0 -1 5.00037 20.998)"
        fill="#034694"
      />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="size-[18px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="12" fill="#EAFFF9" />
      <circle cx="13" cy="13" r="12" stroke="#26A17B" stroke-width="2" />
      <circle cx="13" cy="13" r="12" stroke="#26A17B" stroke-width="2" />
      <path
        d="M8.03626 11.9228L11.5599 15.9128C13.1663 12.4409 15.6018 9.48724 18.4518 7L19.3845 8.03638C15.8089 11.1455 13.7881 14.0472 11.9745 18.4L7 12.8555L8.03638 11.9228L8.03626 11.9228Z"
        fill="#26A17B"
        stroke="#26A17B"
      />
    </svg>
  );
};
