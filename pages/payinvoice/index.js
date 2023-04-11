import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Label from "../../components/Label";
import Input from "../../components/Input";
import { getInvoice } from "../../store/invoice/invoiceSlice";

const index = () => {
  const dispatch = useDispatch();
  const [invoiceTag, setInvoiceTag] = useState("");
  const [invoiceData, setInvoiceData] = useState("");
  const GetInfo = async (id) => {
    await dispatch(getInvoice(id))
      .unwrap()
      .then((action) => {
        setInvoiceData(action.data);
      })
      .catch((error) => {});
  };
  return (
    <div className=" border rounded-md lg:mx-96 my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-4 px-10 text-white font-poppins text-xl">
          Pay an Invoice
        </p>
      </div>
      <div className="bg-lightPink ">
        <p className=" py-3 px-12 font-poppins text-sm">
          Please ensure the information accurate and then select your payment
          option.
        </p>
      </div>
      <div className=" px-14 pt-4">
        <Label
          className="text-lightAsh text-sm"
          htmlFor="text"
          title="Product Tag"
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
      <div className=" px-14 pt-3">
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
          value={invoiceData?.issuer}
          required
        />
      </div>
      <div className=" px-14 pt-2">
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
          value={invoiceData.productDescription}
          required
        />
      </div>
      <div className=" px-14 pt-2">
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
          value={invoiceData.quantity}
          required
        />
      </div>
      <div className=" px-14 pt-2">
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
          value={invoiceData.price}
          required
        />
      </div>
      <p className=" flex justify-end text-xs pt-2 pr-20">
        Add more than one product
      </p>
      <div className=" px-14 pt-3">
        <Label
          className="text-lightAsh text-sm"
          htmlFor="text"
          title="Total price"
        />
        <Input
          name="subtotal"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
          value={subtotal}
          required
          disabled={true}
        />
      </div>
      <Button
        className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins"
        onClick={onSubmitHandler}
      >
        Generate Invoice
      </Button>
    </div>
  );
};

export default index;
