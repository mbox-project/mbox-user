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
