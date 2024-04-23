import React from "react";
import Image from "next/image";
import vendorstarted from "../../public/images/vendorstarted.png";
import buyerstarted from "../../public/images/buyerstarted.png";
import vendors from "../../public/images/vendors-male.png";
import buyers from "../../public/images/buyers-female.png";

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

      <div className="block md:flex justify-around w-full py-5 gap-5 text-[#444444]">
        <div>
          <Image src={vendorstarted} />
        </div>

        {/* vendor */}

        {/* <div className="shadow-md rounded-[10px] flex pl-8 relative max-h-[410px]">
          <span className="flex flex-col gap-4 justify-around">
            <h2 className="text-[26px] font-medium">
              WHY <span className="text-[#EF5612]">VENDORS</span> PREFER US👇
            </h2>
            <p>
              Life as an{" "}
              <span className="text-[#EF5612]"> online business owner </span> is
              can be challenging.{" "}
              <span className="text-[#EF5612]">We provide</span> ease by
              allowing vendors.
            </p>
            <ul className="text-base list-disc">
              <li>Boost sales with or without social media experience</li>
              <li>Establish a credible online business reputation</li>
              <li>Enjoy cost effective marketing</li>
            </ul>
          </span>
          <Image src={vendors} alt="vendor" className="rounded-r-[10px]" />
        </div> */}

        <div>
          <Image src={buyerstarted} />
        </div>

        {/* buyer */}

        {/* <div className="shadow-md rounded-[10px] flex pl-8 relative max-h-[410px]">
          <span className="flex flex-col gap-4 justify-around">
            <h2 className="text-[26px] font-medium">
              WHY <span className="text-[#EF5612]">VENDORS</span> PREFER US👇
            </h2>
            <p>
              Life as an{" "}
              <span className="text-[#EF5612]"> online business owner </span> is
              can be challenging.{" "}
              <span className="text-[#EF5612]">We provide</span> ease by
              allowing vendors.
            </p>
            <ul className="text-base list-disc">
              <li>Boost sales with or without social media experience</li>
              <li>Establish a credible online business reputation</li>
              <li>Enjoy cost effective marketing</li>
            </ul>
          </span>
          <Image src={buyers} alt="buyers" className="rounded-r-[10px]" />
        </div> */}
      </div>
    </div>
  );
};

export default GettingStarted;
