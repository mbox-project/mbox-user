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
          <tr className="py-8 text-center">
            <td className="py-[2rem]">1</td>
            <td className="py-[2rem]">{data?.productDescription}</td>
            <td className="py-[2rem]">${data?.price}</td>
            <td className="py-[2rem]">{data?.quantity}</td>
            <td className="py-[2rem]">${data?.total}</td>
          </tr>
        </table>
        {/* <div className="flex justify-around bg-brightRed border mx-8 text-white mt-8 py-4">
          <p>SN</p>
          <p>Product Description</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
        </div>
        <div>
          <div className="flex justify-around  py-8">
            <p>1</p>
            <p>{data.productDescription}</p>
            <p>${data.price}</p>
            <p>{data.quantity}</p>
            <p>${data.total}</p>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="flex justify-around  py-8">
            <p>2</p>
            <p>Air force II,skando Limited Edition</p>
            <p>$40.00</p>
            <p>5</p>
            <p>$80.00</p>
          </div>
          <hr></hr>
        </div> */}
      </div>
    </>
  );
};
export default ProductDes;
