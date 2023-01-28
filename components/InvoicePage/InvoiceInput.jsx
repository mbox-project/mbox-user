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
    tag: "",
    issuer: "",
    productDescription: "",
    quantity: "",
    price: "",
    total: "",
  });
  const {
    tag,
    issuer,
    productDescription,
    quantity,
    price,
    total,
    invoiceData

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
      invoiceData.quantity == "" ||
      invoiceData.productDescription == "" ||
      invoiceData.tag == "" ||
      invoiceData.issuer == "" ||
      invoiceData.price == "" ||
      invoiceData.total == ""
    ) {
      toastify.alertError("A field cannot be empty", 3000);
    } else {
      dispatch(invoice(invoiceData));
    }
  };
  return (
    <div className=" border rounded-md lg:mx-96 my-20 shadow-lg">
      <div className="bg-brightRed ">
        <p className=" py-4 px-10 text-white font-poppins text-xl">
          Generate an Invoice
        </p>
      </div>
      <div className="bg-lightPink ">
        <p className=" py-3 px-12 font-poppins text-sm">
          Please ensure you enter the following requirement carefully and
          accurately
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
          value={tag}
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
          name="issuer"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
          value={issuer}
          onChange={onChangeInput}
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
          value={productDescription}
          onChange={onChangeInput}
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
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
          value={quantity}
          onChange={onChangeInput}
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
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
          value={price}
          onChange={onChangeInput}
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
          name="total"
          type="text"
          placeHolder="GC-10234"
          className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
          value={total}
          onChange={onChangeInput}
          required
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
export default invoiceInput;
