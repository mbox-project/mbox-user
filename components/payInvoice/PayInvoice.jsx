import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import Input from "../Input";
import Label from "../Label";
import { useRouter } from "next/router";

const PayInvoiceModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [option, setOption] = useState(false);
  const [invoiceTag, setInvoiceTag] = useState("");
  const onChangeInput = (e) => {
    setInvoiceTag(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    push(`/invoice/byTag/${invoiceTag}`);
  };

  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className="overflow-y-scroll h-full w-full">
        <form
          onSubmit={onSubmitHandler}
          className="border rounded-md shadow-lg mx-auto relative"
        >
          <div className="bg-brightRed sticky top-0">
            <p className=" py-4 px-10 text-white font-poppins text-xl">
              Pay an Invoice
            </p>
          </div>
          <div className="bg-lightPink ">
            <p className=" py-3 px-12 font-poppins text-sm">
              Please ensure the information accurate and then select your
              payment option.
            </p>
          </div>
          <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Invoice Tag"
            />
            <Input
              name="tag"
              type="text"
              placeHolder="GC-10234"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={invoiceTag}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="mx-auto w-[80%] my-1">
            <div>Select Payment Option</div>
            <div className="flex items-center gap-[0.6rem]">
              <input
                type="checkbox"
                id="option"
                value={true}
                onChange={(e) => setOption(e.target.value)}
              />
              <label>Marketbox Wallet</label>
            </div>
            <button
              className="w-full my-4 rounded-md shadow-lg bg-brightRed py-[0.5rem] text-white text-base poppins"
              type="submit"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default PayInvoiceModal;
