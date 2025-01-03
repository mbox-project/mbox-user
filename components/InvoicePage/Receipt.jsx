import React from "react";
import Image from "next/dist/client/image";
import mboximg from "../../public/img/marketbox.png";
import ProductDes from "./ProductDes";
const Receipt = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
    const year = date.getFullYear();
    return `${day} | ${month} | ${year}`;
  };

  return (
    <div className="mx-2 md:mx-10 border rounded-md lg:mx-20 shadow-lg mb-10">
      <div className="flex gap-3 justify-between">
        <div className="flex mt-3 ">
          <div className="ml-6">
           
          </div>
          <div className="pl-2 font-poppins">
            <p className="pt-4 text-4xl poppins font-extrabold text-lightGray">
            <Image 
            src={mboximg}
            width={200}
            height={50}
             />
            </p>
          </div>
        </div>
        <div className="">
          <p className="bg-brightRed border py-6 px-5 md:px-14 tracking-wider text-white poppins font-bold text-3xl">
            INVOICE
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between font-poppins mb-5">
        <div className=" pl-2 md:pl-7 mt-3">
          <p>Invoice to:</p>
              <div>
                <p className="font-bold pt-1">{data?.buyerName}</p>
                <p className="font-bold pt-1">{data?.buyerAddress}</p>
               
              </div>  
        </div>
        <div className=" pl-2 md:pl-0 pr-4 mt-2">
              <div>
                <div className="flex items-center">
                  <p className="font-bold"> Invoice Tag :</p>
                  <p className="pl-2 pt-1">{data?.tag}</p>
                </div>
                <div className="flex mt-2">
                  <p className="font-bold">Date:</p>
                  <p className="pl-2 ">
                    {formatDate(data?.dateCreated)}
                  </p>
                </div>
                <div className="flex mt-2">
                  <p className="font-bold">Issued by:</p>
                  <p className="pl-2"> {data?.storeName}</p>
                </div>
              </div>
           
        
        </div>
      </div>
      
      <ProductDes data={data} />
    </div>
  );
};
export default Receipt;
