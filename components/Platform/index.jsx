import React from "react";
import Image from "next/image";
import platformimg from "../../public/images/platformimg.png";

import Button from "../Button";
const Platform = () => {
  return (
    <section className="bg-white">
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4  py-3 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h4 className=" text-lg lg:text-xl abouttext lg:tracking-wider">
              <span className="text-orange-600">Vendors </span> attain
              satisfaction of selling their desired items anywhere, anytime with
              maximum security and also reboost sales
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-20 mt-8 lg:mt-5  lg:gap-y-16">
            <div className="col-span-2 lg:col-span-1">
              <Image src={platformimg} />
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <div className="flex py-5">
                <h4>Our Platform</h4>
                <p>
                  Mbox is Africa’s first digital marketplace that allows SMEs
                  create a digital version of their business with- out a
                  website. With just your username, businesses can connect with
                  millions of buyers protected via escrow. Buying and selling
                  safely over the internet is not that difficult. You are just a
                  sign up away!
                </p>

                <Button className="w-full h-12 px-12 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 sm:flex-shrink-0 sm:w-auto mt-3 md:ml-28 bg-orange-600 lg:ml-24">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Platform;
