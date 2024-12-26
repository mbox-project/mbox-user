import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { generateinvoice, reset, updateInvoice } from "../../store/invoice/invoiceSlice";
import Spinner from "../../components/Spinner";
import { toastify } from "../../helpers";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import { FiMinusCircle } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { getInvoice } from "../../store/invoice/invoiceSlice";
import { LoadingOutlined } from "@ant-design/icons";
const InvoiceEdit = () => {
  const [data, setData] = useState(null);
  const [subTotal, setSubtotal] = useState(0);
  const [buyer, setBuyer] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { invoiceId } = router.query;
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    if (invoiceId) {
      dispatch(getInvoice(invoiceId))
        .unwrap()
        .then((action) => {
          setData(action);
          if (action && action.data.invoiceProducts.$values) {
            const mappedProducts = action.data.invoiceProducts.$values.map((product) => ({
              productId: product.productId,
              price: product.price,
              quantity: product.quantity,
              tag: product.productTag,
              productDescription: product.productDescription
            }));
            setProductsList(mappedProducts);
            setSubtotal(action.data.subTotal);
            setBuyer(action.data.buyerAddress);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [invoiceId, dispatch]);

  const onChangeInput = (e) => {
    setBuyer(e.target.value);
  };

  const onProductChangeInput = (e, index) => {
    const { name, value } = e.target;
    setProductsList((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index][name] = value;

      const total = updatedProducts.reduce(
        (accum, curr) => accum + curr.quantity * curr.price,
        0
      );
      setSubtotal(total);

      return updatedProducts;
    });
  };



  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const updatedInvoice = {
        buyer: buyer,
        products: productsList,
        escFee: (subTotal / 100) * 5,
        total: subTotal + (subTotal * 0.05),
        subTotal,
        issuer: user?.username,
        status: true,
        date: new Date().toISOString(),
      };
      dispatch(
        updateInvoice({ id: invoiceId, updateData: updatedInvoice })
      ).unwrap()
        .then((action) => {
          toastify.alertSuccess(action?.message, 3000, () =>
            router.push(`/invoice/${action?.data}`)
          );
          setLoading(false)
        })
        .catch((error) => {
          toastify.alertError(error, 3000)
          setLoading(false)
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full font-poppins">
        <div className="pt-5">
          <div className="border rounded-md shadow-lg w-full md:w-[60%] mx-auto relative">
            <div className="sticky top-0 bg-brightRed">
              <p className="px-2 py-4 text-xl text-center text-white md:px-10">
                Edit Invoice
              </p>
              <div className="bg-lightPink ">
                <p className="py-3 text-sm text-center font-poppins">
                  Please ensure you enter the following requirement carefully
                  and accurately
                </p>
              </div>
            </div>

            <div className="w-[90%] pt-3 mx-auto">
              <Label
                className="text-sm text-lightAsh"
                htmlFor="text"
                title="Buyers Email"
              />
              <Input
                name="buyer"
                type="text"
                placeHolder="test@email.com"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                value={buyer}
                onChange={onChangeInput}
                required
              />
            </div>
            {productsList.map((e, i) => (
              <div key={i}>
                
                <div className="w-[90%] pt-2 mx-auto">
                  <Label
                    className="text-sm text-lightAsh"
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
                    className="text-sm text-lightAsh"
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
                    className="text-sm text-lightAsh"
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

              >
                <span>Add more product</span>
                <MdOutlineAddCircleOutline className="text-brightRed text-[1rem]" />
              </p>
            </div>
            <div className="w-[90%] pt-3 mx-auto">
              <Label
                className="text-sm text-lightAsh"
                htmlFor="text"
                title="Total price"
              />
              <Input
                name="subtotal"
                type="text"
                placeHolder="GC-10234"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#444444] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
                value={subTotal}
                onChange={onChangeInput}
                required
                disabled={true}
              />
            </div>
            <Button
              className="w-[90%] mx-auto my-4 rounded-md shadow-lg bg-brightRed py-2 text-white flex justify-center text-base poppins"
              onClick={onSubmitHandler}
            >
              {
                loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : "Edit Invoice"
              }

            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvoiceEdit;
