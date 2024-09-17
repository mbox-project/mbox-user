"use client";

import { useState } from "react";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import QuestionMark from "/public/img/merchant-dashboard/noun-question-2803104 1.svg";

const ConfirmationModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleProceed = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        type="button"
        onClick={showModal}
        className="bg-green-600 text-white hover:bg-green-500"
      >
        Show Confirmation Modal
      </button>

      {/* Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
        className="!p-0 rounded-lg overflow-hidden"
        closeIcon={null}
        aria-modal="true"
      >
        <div className="p-4 bg-[#26A17B] text-white flex justify-between">
          <h3 className="text-xl font-semibold">Redirecting...</h3>
          <button onClick={handleCancel} type="button" aria-label="Close">
            <IoClose className="size-6" />
          </button>
        </div>
        <div className="bg-[#EAFFF9] py-2 px-4">
          <p className="text-sm text-[#9A9A9A] font-medium">
            Press proceed to continue, or Cancel to stay on the current page
          </p>
        </div>

        <div className="p-6 text-center">
          <div className="flex justify-center">
            <Image
              src={QuestionMark}
              alt="question mark"
              className="w-[90px] h-[90px]"
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#26A17B]">
              Are you sure you want to navigate away from this page?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6">
              Please understand that the only way to guarantee your financial
              security is when you use the
              <span className="font-bold"> escrow service</span>. Tell the
              vendor to generate an invoice for and pay through that invoice.
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:flex gap-8 md:gap-16 pt-4 text-lg">
            <button
              type="button"
              onClick={handleCancel}
              className="lg:w-[316px] w-full p-4 rounded-lg border border-[#444444] text-[#444444] font-medium hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleProceed}
              className="lg:w-[316px] w-full p-4 rounded-lg bg-[#26A17B] text-[#FAFAFA] font-medium hover:bg-[#26A17B]/90 shadow-md shadow-[#26A17B12]"
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
