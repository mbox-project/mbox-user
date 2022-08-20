import React from "react";
import Image from "next/image";
import buynowimg from "../../public/images/buynowimg.png";
import buynowicon from "../../public/images/buynowicon.png";
import buynowicon1 from "../../public/images/buynowicon1.png";
import buynowicon2 from "../../public/images/buynowicon2.png";
import Button from "../Button";
import Link from "next/link";
const BuyNow = () => {
  return (
    <section className="aboutbg">
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className=" mt-3 mb-4 md:mb-0 md:mt-0">
            <h4 className=" text-lg lg:text-xl abouttext  lg:tracking-wider poppins">
              <span className="text-orange-600">Buyers </span>
              <span className="text-brightPurple">
                attain satisfaction of getting their desired items anywhere,
                anytime with maximum security and also{" "}
              </span>
              <span className="text-orange-600"> shopping confidence</span>
            </h4>
          </div>
          <div className=" block md:grid grid-cols-2 gap-4 md:gap-10 lg:gap-20 mt-8 lg:mt-5  lg:gap-y-16">
            <div className=" w-full md:mt-5 lg:mt-0">
              <Image src={buynowimg} />
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1 ">
              <div className="flex py-5">
                <div className="md:mt-1 lg:mt-0 hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={buynowicon1} />
                </div>
                <div className="px-5 ">
                  <p className="font-bold text-base text-lightGray lg:pl-4 lg:text-xl md:text-lg poppins ">
                    Make Payment with Ease
                  </p>
                  <p className="text-sm text-gray-600 pt-3 lg:pt-2  lg:pl-4 poppins">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={buynowicon2} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-base text-lightGray lg:pl-4 lg:text-xl md:text-lg poppins ">
                    Enjoy Phy-digital Experience
                  </p>
                  <p className="text-sm text-gray-600 lg:pl-4 pt-3  lg:pt-2 poppins">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5">
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
              </div>
              <Button className="w-full h-12 px-12 lg:px-44 poppins py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 md:ml-10 sm:flex-shrink-0 sm:w-auto mt-3 bg-orange-600 lg:ml-24">
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
