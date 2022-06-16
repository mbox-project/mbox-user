import React from "react";
import Image from "next/image";
import becomeamerchantimg from "../../public/images/becomeamerchantimg.png";
import becomeamerchant1 from "../../public/images/becomeamerchant1.png";
import becomeamerchant2 from "../../public/images/becomeamerchant2.png";
import becomeamerchant3 from "../../public/images/becomeamerchant3.png";
import Button from "../Button";
const BecomeAMerchant = () => {
  return (
    <section className="aboutbg">
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h4 className=" text-lg lg:text-xl abouttext lg:tracking-wider">
              <span className="text-orange-600">Vendors </span> attain
              satisfaction of selling their desired items anywhere, anytime with
              maximum security and also reboost sales
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-5  lg:gap-y-16">
            <div className="col-span-2 lg:col-span-1 ">
              <div className="flex py-5">
                <div className=" ">
                  <Image src={becomeamerchant1} />
                </div>
                <div className="px-5 ">
                  <p className="font-bold text-lg ">Improve Business Reach</p>
                  <p className="text-sm text-gray-600 pt-3">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5">
                <div className=" ">
                  <Image src={becomeamerchant2} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-lg  ">
                    Get Reviews From Real Buyers
                  </p>
                  <p className="text-sm text-gray-600 pt-3">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <div className="flex py-5">
                <div className=" ml-3 lg:ml-3 ">
                  <Image src={becomeamerchant3} />
                </div>
                <div className="px-5">
                  <p className="font-bold text-lg md:ml-5 ">
                    Have Your Store Online Without a Website
                  </p>
                  <p className="text-sm text-gray-600 pt-3 md:ml-5">
                    Dealer in various type of whatever as want randing from this
                    to that to those and here!
                  </p>
                </div>
              </div>
              <Button className="w-full h-12 px-12 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 sm:flex-shrink-0 sm:w-auto mt-3 md:ml-28 bg-orange-600 lg:ml-24">
                Become A Merchant
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
