import React from "react";
const ProductDes = () => {
  return (
    <>
      <div>
        <div className="flex justify-around bg-brightRed border mx-8 text-white mt-8 py-4">
          <p>SN</p>
          <p>Product Description</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
        </div>
        <div>
          <div className="flex justify-around  py-8">
            <p>1</p>
            <p>Air force II,skando Limited Edition</p>
            <p>$40.00</p>
            <p>5</p>
            <p>$80.00</p>
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
        </div>
      </div>
    </>
  );
};
export default ProductDes;
