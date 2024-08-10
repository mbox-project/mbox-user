import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import SuccessIcon from "/public/img/success.svg";
import ErrorIcon from "/public/img/error.svg";
import Image from "next/image";

const CustomAlertModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [secondaryAction, setSecondaryAction] = useState(null);

  const show = (type, message, description = "", secondaryFunc = null) => {
    setModalProps({ type, message, description });
    setSecondaryAction(() => secondaryFunc);
    setIsVisible(true);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleButtonClick = () => {
    if (secondaryAction) {
      secondaryAction();
    } else {
      handleOk();
    }
  };

  useEffect(() => {
    CustomAlertModal.show = show;
  }, []);

  const renderIcon = () => {
    switch (modalProps.type) {
      case "success":
        return (
          <span className="size-[100px]">
            <Image
              src={SuccessIcon}
              width={100}
              height={100}
              alt="success"
              className="w-max"
            />
          </span>
        );
      case "warning":
      case "error":
        return (
          <span className="size-[100px]">
            <Image
              src={ErrorIcon}
              width={100}
              height={100}
              alt="error"
              className="w-max"
            />
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={isVisible}
      footer={null}
      onCancel={handleCancel}
      className="!h-[514px]"
    >
      <div className="text-center flex flex-col gap-10 pt-6">
        {renderIcon()}
        <span className="space-y-2">
          <h2 className="text-[20px] lg:text-[40px] leading-[60px] font-semibold text-gray-700">
            {modalProps.message}
          </h2>
          {modalProps.description && (
            <p className="text-[#9A9A9A] text-base lg:text-[24px] lg:leading-[36px]">
              {modalProps.description}
            </p>
          )}
        </span>
        <button
          onClick={handleButtonClick}
          type="button"
          className={`rounded-md px-8 py-3 font-semibold text-[31.6px] text-white ${
            modalProps.type === "error" || modalProps.type === "warning"
              ? "bg-red-600"
              : modalProps.type === "success"
              ? "bg-green-600"
              : ""
          }`}
        >
          {modalProps.type === "success" ? "Continue" : "Retry"}
        </button>
      </div>
    </Modal>
  );
};

CustomAlertModal.show = () => {};

export default CustomAlertModal;
