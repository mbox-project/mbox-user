import React from "react";
import Image from "next/dist/client/image";
import mboximg from "../../public/images/mboximg.png";
import InvoiceApi from "./InvoiceApi";
import PricetagApi from "./PricetagApi";
import ProductDes from "./ProductDes";
const Receipt = ({ data }) => {
  return (
    <div className="mx-2 md:mx-10 border rounded-md lg:mx-20 shadow-lg">
      <div className="flex justify-between">
        <div className="flex mt-3 ">
          <div className="ml-6">
            <Image src={mboximg} />
          </div>
          <div className="pl-2 font-poppins">
            <p className="pt-4 text-4xl poppins font-extrabold text-lightGray">
              Mbox
            </p>
            <p>Mbox Best Digital paltform there is!</p>
          </div>
        </div>
        <div className="">
          <p className="bg-brightRed border py-6 px-14 tracking-wider text-white poppins font-bold text-3xl">
            INVOICE
          </p>
        </div>
      </div>
      <div className="flex justify-between font-poppins">
        <div className="pl-7 mt-3">
          <p>Invoice to:</p>
              <div>
                <p className="font-bold pt-1">{data?.buyer}</p>
                <p className="pt-1">{data.Location}</p>
                <p className="pt-1">{data.City}</p>
                <p className="pt-1">{data.Telephone}</p>
              </div>  
        </div>
        <div className="pr-4 mt-2">
              <div>
                <div className="flex">
                  <p className="font-bold"> Invoice Tag :</p>
                  <p className="pl-2 pt-1">{data?.tag}</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Date:</p>
                  <p className="pl-2 ">
                    {new Date(data?.dateCreated).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex">
                  <p className="font-bold">Issued by:</p>
                  <p className="pl-2"> {data?.issuer}</p>
                </div>
              </div>
           
        
        </div>
      </div>
      <ProductDes data={data} />
    </div>
  );
};
export default Receipt;
