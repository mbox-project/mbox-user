import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { generateinvoice, reset } from "../../store/invoice/invoiceSlice";
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
    productDescription: "",
    quantity: "",
    price: "",
    buyer: "",
  });
  const [subtotal, setSubtotal] = useState(0);

  const onChangeInput = (e) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "price")
      setSubtotal(e.target.value * invoiceData.quantity);
    if (e.target.name === "quantity")
      setSubtotal(e.target.value * invoiceData.price);
  };

  const { isLoading } = useSelector((state) => state.invoice);
  // destructure the loginData object

  // useEffect(() => {
  //   console.log("rendered", invoiceState.invoiceLog);
  //   if (invoiceState.isError) {
  //     toastify.alertError(message, 3000);
  //   }
  //   if (invoiceState.isSuccess)
  //     router.push(`/invoice/${invoiceState.invoiceLog.id}`);
  //   // dispatch(reset());
  // }, [invoiceState.isError, invoiceState.isSuccess]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // simple validation
    console.log(invoiceData);
    if (
      invoiceData.buyer &&
      invoiceData.price &&
      invoiceData.productDescription &&
      invoiceData.quantity &&
      invoiceData.tag
    ) {
      try {
        const data = {
          ...invoiceData,
          price: Number(invoiceData.price),
          quantity: Number(invoiceData.quantity),
          issuer: "merchant",
          date: new Date().toISOString(),
          escFee: (invoiceData.price / 100) * 5,
          total: subtotal + (invoiceData.price / 100) * 5,
          subtotal,
        };
        dispatch(generateinvoice(data)).then((action) => {
          console.log(action);
          if (action.payload.data) {
            router.push(`/invoice/${action.payload.data.id}`);
          }
          if (action.error) toastify.alertError("An error occured", 3000);
        });
        console.log("dispatched", invoiceState.invoiceLog, data);
      } catch (error) {
        console.log(error);
      }
    } else {
      toastify.alertError("A field cannot be empty", 3000);
    }
  };
  return (
    <>
      {isLoading && <Spinner />}
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
            value={invoiceData?.tag}
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
            value={invoiceData.productDescription}
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
            type="number"
            placeHolder="GC-10234"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            value={invoiceData.quantity}
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
            type="number"
            placeHolder="GC-10234"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            value={invoiceData.price}
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
            name="subtotal"
            type="text"
            placeHolder="GC-10234"
            className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
            value={subtotal}
            onChange={onChangeInput}
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
    </>
  );
};
export default invoiceInput;
