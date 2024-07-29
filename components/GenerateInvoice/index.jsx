import React from "react";
import Button from "../Button";
import Image from "next/dist/client/image";
// import picture from "../../public/images/generateinvoiceimg.png";
import pics from "../../public/images/generateinvoiceimg2.png";
import Link from "next/link";
const GenerateInvoice = () => {
  return (
    <section className="bg-grayColor lg:bg-featureColor">
      <div className="max-w-screen-lg  mt-0  md:pt-0 md:-mt-0 px-4 py-6 mx-auto sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 gap-1 mt-0 lg:mt-0 lg:grid-cols-5 lg:gap-y-6">
          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className=" md:m-6 lg:m-0">
              <h2 className="text-xl lg:text-4xl flex justify-center tracking-wide poppins mt-7 md:block font-bold md:mt-4 lg:mt-16   ">
                Generate/Pay{" "}
                <span className="text-orange-600 px-2">Invoice</span>
              </h2>

              <p className="mt-3 text-center md:text-left md:mt-6 lg:mt-2 poppins text-sm md:text-base  text-gray-400 lg:max-w-xs">
                Prepare an invoice for their customers to transaction via an
                ESCROW. For optimum financial security.
              </p>

              <Button className=" w-full h-12 px-6 py-3 lg:px-8 lg:cursor-pointer  uppercase lg:normal-case hover:-translate-y-1 hover:scale-110 duration-300 lg:rounded-md  lg:mt-6 text-sm  lg:text-xl font-bold tracking-wide  text-orange-600  sm:flex-shrink-0 sm:w-auto mt-6 bg-lightPink border-2 border-orange-600  lg:ml-0">
                <Link href={""}>Generate/Pay Invoice</Link>
              </Button>
            </div>
          </div> */}

          {/* <div className="hidden md:flex col-span-1 lg:col-span-3 lg:flex ml-2  lg:ml-44">
            <Image src={picture} />
          </div> */}
        </div>
        <div className="flex  lg:gap-y-16">
          <div className=" hidden md:flex col-span-1 lg:col-span-3 lg:flex">
            <Image src={pics} className="ml-20" />
          </div>
          <div className="col-span-2 lg:pl-36 md:col-span-2 lg:col-span-2">
            <div className=" mt-3 md:mt-10 lg:mt-20">
              <h2 className=" font-bold flex justify-center poppins tracking-wide md:block text-xl md:text-3xl lg:text-4xl md:pl-10 text-brightRed ">
                Endorse <span className="text-black px-2">Businesses</span>
              </h2>

              <p className="mt-3 md:mt-6 md:pl-10 lg:mt-3 text-center md:text-justify  poppins lg:max-w-xs  leading-loose text-gray-400 text-base  md:text-xl">
                Express your support for friends business by endorsing their
                business on Marketbox. We rise by lifting others.
              </p>

              <Button className=" w-full h-12 px-6 py-3 lg:px-8 lg:cursor-pointer  uppercase lg:normal-case hover:-translate-y-1 hover:scale-110 duration-300 lg:rounded-md  lg:mt-6 text-sm  md:text-lg lg:text-xl font-bold tracking-wide  md:ml-10 text-orange-600  md:mt-7 sm:flex-shrink-0 sm:w-auto mt-6 bg-lightPink border-2 border-orange-600  lg:ml-10">
                <Link href={""}>Endorse a business</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenerateInvoice;
