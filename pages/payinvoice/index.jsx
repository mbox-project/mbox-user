import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Label from "../../components/Label";
import Input from "../../components/Input";
import { getInvoice } from "../../store/invoice/invoiceSlice";
import { toastify } from "../../helpers";
import { useRouter } from "next/router";

const index = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [option, setOption] = useState(false);
  const [invoiceTag, setInvoiceTag] = useState("");
  const [invoiceData, setInvoiceData] = useState("");
  const onChangeInput = (e) => {
    setInvoiceTag(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    push(`/invoice/${invoiceTag}`);
  };
  const GetInfo = async (id) => {
    await dispatch(getInvoice(id))
      .unwrap()
      .then((action) => {
        setInvoiceData(action.data);
      })
      .catch((error) => {
        toastify.alertError(error, 3000);
      });
  };
  return (
    <div className="h-screen overflow-hidden w-full my-auto">
      <div className="overflow-y-scroll h-full">
        <form
          onSubmit={onSubmitHandler}
          className="border rounded-md shadow-lg w-[98%] md:w-[60%] mx-auto relative"
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
          {/* <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Buyers Name"
            />
            <Input
              name="buyer"
              type="text"
              placeHolder="GC-10234"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={""}
              disabled={true}
              required
            />
          </div> */}
          {/* <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Product Description"
            />
            <Input
              name="productDescription"
              type="text"
              placeHolder="Air Force II, Skando Limited Edition"
              className="w-full p-1 md:p-2 lg:py-10  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={""}
              disabled={true}
              required
            />
          </div> */}
          {/* <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Product Qty"
            />
            <Input
              name="quantity"
              type="number"
              placeHolder="GC-10234"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={""}
              disabled={true}
              required
            />
          </div> */}
          {/* <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Unit Price"
            />
            <Input
              name="price"
              type="number"
              placeHolder="GC-10234"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={""}
              disabled={true}
              required
            />
          </div> */}
          {/* <div className="w-[80%] pt-3 mx-auto">
            <Label
              className="text-lightAsh text-sm"
              htmlFor="text"
              title="Total Amount"
            />
            <Input
              name="subtotal"
              type="text"
              placeHolder="GC-10234"
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              value={""}
              required
              disabled={true}
            />
          </div> */}
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
    </div>
  );
};

export default index;
