import React from "react";
import Image from "next/image";
import buynowimg from "../../public/images/buynowimg.png";
// import buynowicon from "../../public/images/buynowicon.png";
import buynowicon1 from "../../public/images/buynowicon1.png";
import buynowicon2 from "../../public/images/buynowicon2.png";
import Button from "../Button";
import Link from "next/link";
const BuyNow = () => {
  return (
    <section className="aboutbg">
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className="hidden md:flex mt-3 mb-4 md:mb-0 md:mt-7 lg:mt-0">
            <h4 className=" md:text-2xl lg:text-xl abouttext leading-loose lg:tracking-wider poppins">
              <span className="text-orange-600">Buyers </span>
              <span className="text-brightPurple">
                attain satisfaction of getting their desired items anywhere,
                anytime with maximum security and also{" "}
              </span>
              <span className="text-orange-600"> shopping confidence</span>
            </h4>
          </div>
          <div className=" flex lg:hidden w-full md:mt-5 lg:mt-0">
            <Image src={buynowimg} />
          </div>

          <div className=" md:hidden mt-3 mb-4">
            <h4 className=" text-lg abouttext leading-loose poppins">
              <span className="text-orange-600">Buyers </span>
              <span className="text-brightPurple">
                attain satisfaction of getting their desired items anywhere,
                anytime with maximum security and also{" "}
              </span>
              <span className="text-orange-600"> shopping confidence</span>
            </h4>
          </div>
          <div className=" block lg:grid lg:grid-cols-2 lg:gap-20 mt-8 lg:mt-5  lg:gap-y-16">
            <div className="hidden lg:flex w-full md:mt-5 lg:mt-0">
              <Image src={buynowimg} />
            </div>

            <div className="col-span-2 mt-2 md:mt-4 lg:mt-7 md:col-span-1 lg:col-span-1 ">
              <div className="flex py-5">
                <div className="md:mt-3 lg:mt-4 hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={buynowicon1} />
                </div>
                <div className="px-5 ">
                  <p className="font-bold text-lg leading-loose pt-1 md:pt-5 text-lightGray lg:pl-4 lg:text-xl md:text-2xl poppins ">
                    Make Payment with Ease
                  </p>
                  <p className="text-base leading-loose md:text-xl lg:text-base text-gray-600 pt-3 lg:pt-2  lg:pl-4 poppins">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5 md:mt-3 lg:mt-1">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={buynowicon2} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-lg leading-loose text-lightGray lg:pl-4 lg:text-xl md:text-2xl poppins ">
                    Enjoy Phy-digital Experience
                  </p>
                  <p className="text-base leading-loose md:text-xl lg:text-base text-gray-600 lg:pl-4 pt-3  lg:pt-2 poppins">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              {/* <div className=" hidden md:flex py-5">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={buynowicon} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-base text-lightGray lg:pl-4 lg:text-xl md:text-lg poppins ">
                    Escrow Policy
                  </p>
                  <p className="text-sm text-gray-600 lg:pl-4 poppins pt-3 lg:pt-2">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div> */}
              <Button className="w-full h-12  lg:h-20 px-12 lg:px-44 poppins py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  md:text-lg   lg:text-xl font-bold tracking-wide  text-white sm:ml-4 md:ml-20 sm:flex-shrink-0 sm:w-auto mt-3 bg-orange-600 lg:ml-24">
                <Link href={""}>Buy Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyNow;
