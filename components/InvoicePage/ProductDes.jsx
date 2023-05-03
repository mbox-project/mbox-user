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
          {data?.products.map((e, i) => (
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
    </>
  );
};
export default ProductDes;
