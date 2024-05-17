import React from "react";
const ProductDes = ({ data }) => {
  function formatMoney(amount, locale = 'en-NG', currency = 'NGN') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });
  
    return formatter.format(amount);
  }
  return (
    <>
      <div>
      <table className="w-full">
          <thead>
            <tr className="bg-brightRed border mx-8 text-white mt-8 py-4">
              <th className="py-[1rem]">SN</th>
              <th className="py-[1rem]">Product Description</th>
              <th className="py-[1rem]">Price</th>
              <th className="py-[1rem]">Qty</th>
              <th className="py-[1rem]">Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.invoiceProducts?.$values.map((e, i) => (
              <tr key={i} className="py-8 text-center ">
                <td className="py-[2rem] bg-slate-50">{i + 1}</td>
                <td className="py-[2rem]">{e?.productDescription}</td>
                <td className="py-[2rem] bg-slate-50">{formatMoney(e?.price)}</td>
                <td className="py-[2rem]">{e?.quantity}</td>
                <td className="py-[2rem] bg-slate-50">{formatMoney(e?.price * e?.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end p-[1rem] mt-5">
          <div className="grid grid-cols-2 justify-items-end gap-2">
            <span>Sub Total</span>
            <span className="text-right">{formatMoney(data?.subTotal)}</span>
            <span>Escrow fee(5%)</span>
            <span className="text-right ">{formatMoney(data?.escFee)}</span>
          </div>
        </div>
        <div className="bg-brightRed w-full px-[1rem] py-[0.5rem] text-white text-[1.2rem] font-[600]">
          <div className="flex items-center justify-end gap-[2rem]">
            <span>Total:</span>
            <span>{formatMoney(data?.total)}</span>
          </div>
        </div>
      </div>
      <div className="pt-6 px-6 font-poppins">
        <p className="py-6 text-extrabold">THANK YOU FOR TRUSTING US!</p>
      </div>
    </>
  );
};
export default ProductDes;
