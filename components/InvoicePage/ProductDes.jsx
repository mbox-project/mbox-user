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
        <div>
          <div className="flex justify-around  py-8">
            <p>3</p>
            <p>Air force II,skando Limited Edition</p>
            <p>$40.00</p>
            <p>5</p>
            <p>$80.00</p>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="flex justify-around  py-8">
            <p>4</p>
            <p>Air force II,skando Limited Edition</p>
            <p>$40.00</p>
            <p>5</p>
            <p>$80.00</p>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="flex justify-around  py-8">
            <p>5</p>
            <p>Air force II,skando Limited Edition</p>
            <p>$40.00</p>
            <p>5</p>
            <p>$80.00</p>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="font-poppins px-10 text-base pt-5 text-extrabold ">
        <p className="flex justify-end">Subtotal:</p>
        <p className="flex justify-end">Escrow fee:</p>
      </div>
      <div className="bg-brightRed ">
        <p className=" py-2 px-10 mt-4   flex justify-end font-poppins text-base md:text-2xl lg:text-xl">
          Total :
        </p>
      </div>
      <div className="pt-6 px-6 font-poppins">
        <p className="text-brightRed text-base text-bold">
          {" "}
          Terms $ Conditions
        </p>
        <p className="text-xs w-64  pt-3 leading-5">
          Open your eyes well and don't go and do giveaweay with your money. A
          word is enough for the wise.
        </p>

        <p className="py-6 text-extrabold">THANK YOU FOR TRUSTING US!</p>
      </div>
    </>
  );
};
export default ProductDes;
