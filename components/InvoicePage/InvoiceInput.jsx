import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { generateinvoice, reset } from "../../store/invoice/invoiceSlice";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

import { FiMinusCircle } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { getVendorProducts } from "../../store/product/productService";
import { Select } from "antd";

const InvoiceInput = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const product = {
    price: "",
    quantity: "",
  };
  const [productsList, setProductsList] = useState([product]);
  const [invoiceData, setInvoiceData] = useState({
    products: productsList,
    buyer: "",
    status: true,
  });
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    dispatch(getVendorProducts({ pageNumber, pageSize }))
      .unwrap()
      .then((res) => {
        setProducts(res.data?.items?.$values || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [dispatch, pageNumber, pageSize]);

  const onChangeInput = (e) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onProductChangeInput = (value, name, index) => {
    setProductsList((prevState) => {
      const newProductsList = [...prevState];
      newProductsList[index] = { ...newProductsList[index], [name]: value };
      
      if (name === "quantity" || name === "price") {
        const total = newProductsList.reduce(
          (accum, curr) => accum + (parseFloat(curr.quantity) || 0) * (parseFloat(curr.price) || 0),
          0
        );
        setSubtotal(total);
      }
      
      return newProductsList;
    });
  };

  const { isLoading } = useSelector((state) => state.invoice);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...invoiceData,
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
              <div className="bg-lightPink">
                <p className="py-3 text-center font-poppins text-sm">
                  Please ensure you enter the following requirement carefully
                  and accurately
                </p>
              </div>
            </div>

            <div className="w-[90%] pt-3 mx-auto">
              <Label
                className="text-lightAsh text-sm"
                htmlFor="buyer"
                title="Buyer's Email"
              />
              <Input
                name="buyer"
                type="text"
                placeHolder="test@email.com"
                className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
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
                    htmlFor="tag"
                    title="Product Tag"
                  />
                  <Select
                    name="tag"
                    type="text"
                    placeholder="Select Product"
                    className="w-full h-[100%] p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    onChange={(value) => onProductChangeInput(value, "tag", i)}
                    options={products?.map((e) => ({
                      value: e?.tag,
                      label: e?.name,
                    }))}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-lightAsh text-sm"
                    htmlFor="productDescription"
                    title="Product Description"
                  />
                  <Input
                    name="productDescription"
                    type="text"
                    placeHolder="Air Force II, Skando Limited Edition"
                    className="w-full p-1 md:p-2 lg:py-10 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    value={e.productDescription}
                    onChange={(cur) => onProductChangeInput(cur.target.value, "productDescription", i)}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-lightAsh text-sm"
                    htmlFor="price"
                    title="Unit Price"
                  />
                  <Input
                    name="price"
                    type="number"
                    placeHolder="Unit Price"
                    className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    value={e.price}
                    onChange={(cur) => onProductChangeInput(cur.target.value, "price", i)}
                    required
                  />
                </div>
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-lightAsh text-sm"
                    htmlFor="quantity"
                    title="Product Qty"
                  />
                  <Input
                    name="quantity"
                    type="number"
                    placeHolder="Quantity"
                    className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    value={e.quantity}
                    onChange={(cur) => onProductChangeInput(cur.target.value, "quantity", i)}
                    required
                  />
                </div>
                {productsList.length > 1 && (
                  <div className="cursor-pointer">
                    <p
                      className="flex items-center gap-1 justify-end text-xs pt-2 pr-[4rem]"
                      onClick={() => {
                        setProductsList((prevState) => {
                          const final = prevState.filter((item, index) => i !== index);
                          const total = final.reduce(
                            (accum, curr) => accum + (parseFloat(curr.quantity) || 0) * (parseFloat(curr.price) || 0),
                            0
                          );
                          setSubtotal(total);
                          return final;
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
            <div className="flex justify-end">
              <p
                className="w-fit flex items-center gap-1 text-xs pt-2 pr-[4rem] cursor-pointer"
                onClick={() => setProductsList((prevState) => [...prevState, product])}
              >
                <span>Add more product</span>
                <MdOutlineAddCircleOutline className="text-brightRed text-[1rem]" />
              </p>
            </div>
            <div className="w-[90%] pt-3 mx-auto">
              <Label
                className="text-lightAsh text-sm"
                htmlFor="subtotal"
                title="Total price"
              />
              <Input
                name="subtotal"
                type="text"
                placeHolder="GC-10234"
                className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#444444] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
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

export default InvoiceInput;
