import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { generateinvoice, reset } from "../../store/invoice/invoiceSlice";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import { FiMinusCircle } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md"
const invoiceInput = () => {
  // Add rememberMe property to it later.
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  //const fullname = useSelector((state) => state.user.fullname);
  const router = useRouter();
  const product = {
    price: "",
    quantity: "",
  };
  const [productsList, setProductsList] = useState([product]);
  const [invoiceData, setInvoiceData] = useState({
   // tag: "",
    products: productsList,
    buyer: "",
  });
  const [subtotal, setSubtotal] = useState(0);

  const onChangeInput = (e) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onProductChangeInput = (e, index) => {
    setProductsList((init) => {
      const target = init[index];
      const newTarget = { ...target, [e.target.name]: e.target.value };
      init[index] = newTarget;
      const result = [...init];
      if (e.target.name === "quantity" || "price") {
        const total = result.reduce(
          (accum, curr) => accum + curr.quantity * curr.price,
          0
        );
        setSubtotal(total);
      }

      return result;
    });
  };

  const { isLoading } = useSelector((state) => state.invoice);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...invoiceData,
        //issuer: fullname,
        date: new Date().toISOString(),
        products: productsList,
        escFee: (subtotal / 100) * 5,
        total: subtotal + (subtotal / 100) * 5,
        subtotal,
        issuer: user?.userId,
      };
      dispatch(generateinvoice(data))
        .unwrap()
        .then((action) => {
          toastify.alertSuccess(action?.message, 3000, () =>
            router.push(`invoice/${action?.data}`)
          );
        })
        .catch((error) => toastify.alertError(error, 3000));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading && <Spinner />}
      <div className="font-poppins w-full">
        <div className="pt-5">
          <div className="border rounded-md shadow-lg w-full md:w-[60%] mx-auto relative">
            <div className="bg-brightRed sticky top-0">
              <p className="py-4 px-2 md:px-10 text-white text-xl text-center">
                Generate an Invoice
              </p>
              <div className="bg-lightPink ">
                <p className="py-3 text-center font-poppins text-sm">
                  Please ensure you enter the following requirement carefully
                  and accurately
                </p>
              </div>
            </div>

            <div className="w-[90%] pt-3 mx-auto">
              <Label
                className="text-lightAsh text-sm"
                htmlFor="text"
                title="Buyers Email"
              />
              <Input
                name="buyer"
                type="text"
                placeHolder="test@email.com"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                value={invoiceData?.buyer}
                onChange={onChangeInput}
                required
              />
            </div>
            {productsList.map((e, i) => (
              <div key={i}>
                <div className="w-[90%] pt-2 mx-auto">
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
                    value={e.tag}
                    onChange={(cur) => onProductChangeInput(cur, i)}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
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
                    value={e.productDescription}
                    onChange={(cur) => onProductChangeInput(cur, i)}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-lightAsh text-sm"
                    htmlFor="text"
                    title="Unit Price"
                  />
                  <Input
                    name="price"
                    type="number"
                    placeHolder="Unit Price"
                    className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                    value={e.price}
                    onChange={(cur) => onProductChangeInput(cur, i)}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-lightAsh text-sm"
                    htmlFor="text"
                    title="Product Qty"
                  />
                  <Input
                    name="quantity"
                    type="number"
                    placeHolder="Quantity"
                    className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                    value={e.quantity}
                    onChange={(cur) => onProductChangeInput(cur, i)}
                    required
                  />
                </div>
                {productsList.length > 1 && (
                  <div className="cursor-pointer">
                    <p
                      className="flex items-center gap-1 justify-end text-xs pt-2 pr-[4rem]"
                      onClick={() => {
                        setProductsList((init) => {
                          const final = productsList.filter(
                            (e, index) => i !== index
                          );
                          const result = [...final];
                          const total = result.reduce(
                            (accum, curr) => accum + curr.quantity * curr.price,
                            0
                          );
                          setSubtotal(total);
                          return result;
                        });
                      }}
                    >
                      <span>Remove product</span>
                      <FiMinusCircle className="text-brightRed text-[1rem]" />
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="cursor-pointer">
              <p
                className="flex items-center gap-1 justify-end text-xs pt-2 pr-[4rem]"
                onClick={() => {
                  setProductsList((init) => {
                    const final = [...init, product];
                    return final;
                  });
                }}
              >
                <span>Add more product</span>
                <MdOutlineAddCircleOutline className="text-brightRed text-[1rem]" />
              </p>
            </div>
            <div className="w-[90%] pt-3 mx-auto">
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
              className="w-[90%] mx-auto my-4 rounded-md shadow-lg bg-brightRed py-2 text-white flex justify-center text-base poppins"
              onClick={onSubmitHandler}
            >
              Generate Invoice
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default invoiceInput;
