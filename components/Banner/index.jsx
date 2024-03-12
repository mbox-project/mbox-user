import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/react-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../public/images/banner1.png";
import banner2 from "../../public/images/banner2.png";
import banner3 from "../../public/images/banner3.png";

const Banner = () => {
  return (
    <Carousel>
      <div className="md:flex w-full h-auto rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
          <div className="flex flex-col justify-between text-left text-white px-10">
            <h1 className="text-3xl py-3 font-bold">
              The Best Digital <br /> Marketplace <br /> for
              <span className="px-2 text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-base py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto">
          <Image
            src={banner1}
            alt="ad"
            height={670}
            sizes="20"
            className="!h-96 rounded-r-xl"
          />
        </div>
      </div>
      <div className="md:flex w-full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
          <div className="flex flex-col justify-between text-left text-white px-10">
            <h1 className="text-3xl py-3 font-bold">
              The Best Digital <br /> Marketplace for <br />
              <span className="text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-base py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto">
          <Image src={banner2} alt="ad" sizes="20" />
        </div>
      </div>
      <div className="md:flex w-full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
          <div className="flex flex-col justify-between text-left text-white px-10">
            <h1 className="text-3xl py-3 font-bold">
              The Best Digital <br /> Marketplace for <br />
              <span className="text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-base py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto">
          <Image src={banner3} alt="ad" sizes="1" />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
