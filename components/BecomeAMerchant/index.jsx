import React from "react";
import Image from "next/image";
import becomeamerchantimg from "../../public/images/becomeamerchantimg.png";
import becomeamerchant1 from "../../public/images/becomeamerchant1.png";
import becomeamerchant2 from "../../public/images/becomeamerchant2.png";
import Button from "../Button";
import Link from "next/link";
const BecomeAMerchant = () => {
  return (
    <section className="aboutbg">
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4  py-3 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h4 className="  leading-loose text-lg md:text-2xl lg:text-xl abouttext md:leading-10 lg:leading-none md:tracking-wider">
              <span className="text-orange-600">Vendors </span> attain
              satisfaction of selling their desired items anywhere, anytime with
              maximum security and also reboost sales
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-5  lg:gap-y-16">
            <div className="col-span-2 lg:col-span-1 ">
              <div className="flex py-5 md:mt-8 lg:mt-10">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={becomeamerchant1} />
                </div>
                <div className="px-5  ">
                  <p className="font-bold text-lg  md:text-2xl lg:text-lg ">
                    Improve Business Reach
                  </p>
                  <p className="text-base leading-loose md:text-xl lg:text-sm md:leading-8  text-gray-600 pt-3">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5 md:mt-4 lg:mt-2">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <Image src={becomeamerchant2} />
                </div>
                <div className="px-5 ">
                  <p className="font-bold text-lg md:text-2xl lg:text-lg ">
                    Get Reviews From Real Buyers
                  </p>
                  <p className="text-base leading-loose md:text-xl lg:text-sm md:leading-8   text-gray-600 pt-3">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              {/* <div className="flex py-5">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-3 lg:ml-3 ">
                  <Image src={becomeamerchant3} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-base md:text-xl lg:text-lg md:ml-5 ">
                    Have Your Store Online Without a Website
                  </p>
                  <p className="text-sm md:text-lg lg:text-sm  text-gray-600 pt-3 md:ml-5">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div> */}
              <Button className="w-full h-12 md:px-10 lg:h-20 lg:px-20 py-3 hover:-translate-y-1 hover:scale-110  duration-300  uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm md:text-xl  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 sm:flex-shrink-0 sm:w-auto mt-3 md:ml-24 bg-orange-600 lg:ml-24">
                <Link href={""}>Become A Merchant</Link>
              </Button>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Image src={becomeamerchantimg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BecomeAMerchant;
