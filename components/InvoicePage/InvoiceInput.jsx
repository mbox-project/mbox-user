import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { invoice, reset } from "../../store/invoice/invoiceSlice";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
const invoiceInput = () => {
  // Add rememberMe property to it later.
  const dispatch = useDispatch();
  const router = useRouter();
  const [invoiceData, setInvoiceData] = useState({
    productTag: "",
    buyersName: "",
    productDescription: "",
    productQty: "",
    unitPrice: "",
    totalPrice: "",
  });
  const {
    productTag,
    buyersName,
    productDescription,
    productQty,
    unitPrice,
    totalPrice
  } = invoiceData;

  const onChangeInput = (e) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { isError, isSuccess, isLoading, user, message } = useSelector(
    (state) => state.invoice
  );
  // destructure the loginData object

  useEffect(() => {
    if (isError) {
      toastify.alertError(message, 3000);
    }
    if (isSuccess) {
      if (message == "User created succesfully") {
        const mssg =
          "A verification mail has been sent to your email for account verification";
        toastify.alertSuccess(mssg, 5000);
      }
      router.push("/invoice");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, user, router, dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // simple validation
    if (
      invoiceData.productQty == "" ||
      invoiceData.productDescription == "" ||
      invoiceData.productTag == "" ||
      invoiceData.buyersName == "" ||
      invoiceData.unitPrice == "" ||
      invoiceData.totalPrice == ""
    ) {
      toastify.alertError("A field cannot be empty", 3000);
    } else {
      dispatch(invoice(invoiceData));
    }
  };
  return (
    <div className=" border rounded-md lg:mx-64 my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-4 px-10 text-white font-poppins text-3xl">
          Generate an Invoice
        </p>
      </div>
      <div className=" px-20 pt-10">
        <Label className="" htmlFor="text" title="Product Tag" />
        <Input
          name="productTag"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={productTag}
          onChange={onChangeInput}
          required
        />
      </div>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Buyers Name" />
        <Input
          name="buyersName"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={buyersName}
          onChange={onChangeInput}
          required
        />
      </div>
      <div className=" px-20 pt-10">
        <Label className="" htmlFor="text" title="Product Description" />
        <Input
          name="productDescription"
          type="text"
          placeHolder="Air Force II, Skando Limited Edition"
          className="w-full p-1 md:p-2 lg:py-10  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={productDescription}
          onChange={onChangeInput}
          required
        />
      </div>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Product Qty" />
        <Input
          name="productQty"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={productQty}
          onChange={onChangeInput}
          required
        />
      </div>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Unit Price" />
        <Input
          name="unitPrice"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={unitPrice}
          onChange={onChangeInput}
          required
        />
      </div>
      <p className=" flex justify-end pr-20">Add more than one product</p>
      <div className=" px-20 pt-6">
        <Label className="" htmlFor="text" title="Total price" />
        <Input
          name="totalPrice"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
          value={totalPrice}
          onChange={onChangeInput}
          required
        />
      </div>
      <Button
        className="mx-20 my-10 rounded-xl shadow-lg bg-brightRed w-full py-4  text-white flex justify-center text-xl poppins"
        onClick={onSubmitHandler}
      >
        Generate Invoice
      </Button>
    </div>
  );
};
export default invoiceInput;
