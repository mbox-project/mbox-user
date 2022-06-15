import React from "react";
import Button from "../Button";
import Image from "next/dist/client/image";
import picture from "../../public/images/generateinvoiceimg.png";
import pics from "../../public/images/generateinvoiceimg2.png";
const GenerateInvoice = () => {
  return (
    <section className="featurebg">
      <div className="max-w-screen-lg  px-4 py-6 mx-auto sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 gap-1 mt-0 lg:mt-0 lg:grid-cols-5 lg:gap-y-6">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className=" md:m-6 lg:m-0">
              <h2 className="text-2xl font-bold mt-0 m md:mt-4 lg:mt-16  lg:text-4xl ">
                Generate/Pay <span className="text-orange-600">Invoice</span>
              </h2>

              <p className="mt-6 text-gray-400 lg:max-w-xs">
                Prepare an invoice for their customers to transaction via an
                ESCROW. For optimum financial security.
              </p>

              <Button className="w-full h-12 px-6 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  lg:text-lg  font-bold tracking-wide  text-orange-600 sm:flex-shrink-0 sm:w-auto mt-3 md:mt-7 bg-white border-2 border-orange-600  lg:ml-0">
                Generate/Pay Invoice
              </Button>
            </div>
          </div>

          <div className="hidden md:flex col-span-1 lg:col-span-3 lg:flex ml-2  lg:ml-44">
            <Image src={picture} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div className=" hidden md:flex col-span-1 lg:col-span-3 lg:flex">
            <Image src={pics} className="ml-20" />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="mt-10">
              <h2 className="text-2xl font-bold  lg:text-4xl text-orange-600 ">
                Endorse <span className="text-black">Businesses</span>
              </h2>

              <p className="mt-6 text-gray-400">
                Express your support for friends business by endorsing their
                business on Mbox. We rise by lifting others.
              </p>

              <Button className="w-full h-12 px-6 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-28 text-sm  lg:text-lg font-bold tracking-wide  text-orange-600  sm:flex-shrink-0 sm:w-auto mt-3 bg-white border-2 border-orange-600  lg:ml-0">
                Endorse a business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenerateInvoice;
