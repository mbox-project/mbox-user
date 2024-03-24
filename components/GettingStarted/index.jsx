import React from "react";
import Image from "next/image";
import vendorstarted from "../../public/images/vendorstarted.png";
import buyerstarted from "../../public/images/buyerstarted.png";

const GettingStarted = () => {
  return (
    <div className="w-full text-[#444444]">
      <div className="px-2">
        <h3 className="py-2 text-sm text-[#EF5612]">
          GETTING STARTED WITH MBOX
        </h3>
        <div className="block md:flex justify-between">
          <div className="w-full md:w-6/12 py-3">
            <p className="text-xl text-balance md:text-2xl font-medium">
              Incredibly Outstanding Services For E-vendors and Online Shoppers{" "}
            </p>
          </div>
          <button className="w-full md:w-auto h-12 px-5 p-2  text-white bg-[#EF5612] rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      <div className="block md:flex justify-around w-full py-5 gap-5">
        <div>
          <Image src={vendorstarted} />
        </div>
        <div>
          <Image src={buyerstarted} />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
