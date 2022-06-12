import React from "react";
import Button from "../Button";
import Image from "next/dist/client/image";
import picture from "../../public/images/generateinvoiceimg.png";
import pics from "../../public/images/generateinvoiceimg2.png";
const GenerateInvoice = () => {
  return (
    <section className="featurebg">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div className="col-span-2">
            <div>
              <h2 className="text-2xl font-bold ">
                Generate/Pay <span className="text-orange-600">Invoice</span>
              </h2>

              <p className="mt-6 text-gray-400">
                Prepare an invoice for their customers to transaction via an
                ESCROW. For optimum financial security.
              </p>

              <Button className="w-full h-12 px-6 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-12 text-sm font-bold tracking-wide  text-orange-600 sm:ml-4 sm:flex-shrink-0 sm:w-auto mt-3 bg-white border-2 border-orange-600  lg:ml-0">
                Generate/Pay Invoice
              </Button>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-3 lg:flex lg:ml-96">
            <Image src={picture}
              />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div className="col-span-2 lg:col-span-3 lg:flex">
            <Image src={pics} className="ml-20 w-8" />
          </div>
          <div className="col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-orange-600 ">
                Endorse <span className="text-black">Businesses</span>
              </h2>

              <p className="mt-6 text-gray-400">
                Express your support for friends business by endorsing their
                business on Mbox. We rise by lifting others.
              </p>

              <Button className="w-full h-12 px-6 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-12 text-sm font-bold tracking-wide  text-orange-600 sm:ml-4 sm:flex-shrink-0 sm:w-auto mt-3 bg-white border-2 border-orange-600  lg:ml-0">
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
