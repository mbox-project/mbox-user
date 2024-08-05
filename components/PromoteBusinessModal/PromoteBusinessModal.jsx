import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import Input from "../Input";
import Label from "../Label";
import { useRouter } from "next/router";

const PromoteBusinessModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className="border rounded-md lg:mx96 my20 shadow-lg">
        <div className="bg-brightRed ">
          <p className=" py-4 px-4 text-white font-poppins text-xl">
            Suggested Store Form
          </p>
        </div>
        <div className="bg-lightPink ">
          <p className=" py-3 px-4 font-poppins text-xs text-[#F16A2D]">
            Dear Merchant, please provide the following information correctly
          </p>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className=" px-4 pt-4">
            <Label
              className="text-[#C1C1C1] text-sm"
              htmlFor="text"
              title="Duration"
            />
            <Input
              name="tag"
              type="text"
              placeHolder=""
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] bg-[#FAFAFA] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>
          <div className=" px-4 pt-3">
            <Label
              className="text-[#eab3b3]  text-sm"
              htmlFor="text"
              title="Listing Type"
            />
            <Input
              name="issuer"
              type="text"
              placeHolder=""
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA] md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>
          <div className=" px-4 pt-2">
            <Label
              className="text-[#C1C1C1] text-sm"
              htmlFor="text"
              title="ts on:"
            />
            <Input
              name="issuer"
              type="text"
              placeHolder=""
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA]  md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>
          <div className=" px-4 pt-2">
            <Label
              className="text-[#C1C1C1] text-sm"
              htmlFor="text"
              title="Ends on:"
            />
            <Input
              name="issuer"
              type="text"
              placeHolder=""
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA] md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>

          <p className=" font-poppins font-semibold text-sm text-[#717171] px-4 pt-4 ">
            Select Payment Option
          </p>
          <div className="flex justify-between pt-4 px-[5%]">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="px-5 text-xs poppins pt-1 text-semibold">
                Marketbox-Wallet -$3,050
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="w-full my-4 rounded-md shadow-lg bg-brightRed p-[0.5rem] text-white text-base poppins"
                type="submit"
              >
                Fund Wallet
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#F16A2D] px-4 py-3 text-xs">
              This offer would cost you a flat rate of #500 (five hundred naira
              only)
            </p>
          </div>

          <button
            className="w-full my-4 rounded-md shadow-lg bg-brightRed py-[0.5rem] text-white text-base poppins"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default PromoteBusinessModal;
