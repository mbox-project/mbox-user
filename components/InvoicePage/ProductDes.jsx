import React from "react";
const ProductDes = ({ data }) => {
  return (
    <>
      <div>
        <table className="w-full">
          <tr className="bg-brightRed border mx-8 text-white mt-8 py-4">
            <th className="py-[1rem]">SN</th>
            <th className="py-[1rem]">Product Description</th>
            <th className="py-[1rem]">Price</th>
            <th className="py-[1rem]">Qty</th>
            <th className="py-[1rem]">Total</th>
          </tr>
          {data?.products?.$values.map((e, i) => (
            <tr className="py-8 text-center">
              <td className="py-[2rem]">{i + 1}</td>
              <td className="py-[2rem]">{e?.productDescription}</td>
              <td className="py-[2rem]">N{e?.price}</td>
              <td className="py-[2rem]">{e?.quantity}</td>
              <td className="py-[2rem]">N{e?.price * e?.quantity}</td>
            </tr>
          ))}
        </table>
        <div className="flex items-center justify-end p-[1rem]">
          <div className="grid grid-cols-2 justify-items-end gap-2">
            <span>Sub Total</span>
            <span className="text-right w-[50%]">N{data?.subTotal}</span>
            <span>Escrow fee(5%)</span>
            <span className="text-right w-[50%]">N{data?.escFee}</span>
          </div>
        </div>
        <div className="bg-brightRed w-full px-[1rem] py-[0.5rem] text-white text-[1.2rem] font-[600]">
          <div className="flex items-center justify-end gap-[2rem]">
            <span>Total:</span>
            <span>N{data?.total}</span>
          </div>
        </div>
      </div>
      <div className="pt-6 px-6 font-poppins">
        <p className="text-brightRed text-base text-bold">
          {" "}
          Terms & Conditions
        </p>
        <p className="text-xs w-64  pt-3 leading-5">We Strongly Advise</p>
        <p className="py-6 text-extrabold">THANK YOU FOR TRUSTING US!</p>
      </div>
    </>
  );
};
export default ProductDes;
