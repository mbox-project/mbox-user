import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/react-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../public/images/banner11-removebg-preview.png";
import banner2 from "../../public/images/banner22-removebg-preview.png";
import banner3 from "../../public/images/banner33-removebg-preview.png";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="lg:flex w-full h-auto max-h-[700px] md:min-h-[450px] rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full lg:w-1/2 h-1/2 md:h-auto md:p-5">
          <div className="flex flex-col justify-around text-left text-white md:px-10 md:py-0 p-7">
            <h1 className="text-[32px] md:text-[48px] leading-[44.8px] md:leading-[67.2px] py-3 font-bold carousel-heading">
              The Best Digital <br /> Marketplace <br /> for
              <span className="px-2 text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-[14px] md:text-[18px] py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit text-[15px] md:text-[20px] p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto lg:flex hidden justify-end">
          <Image src={banner1} alt="ad" />
        </div>
      </div>
      <div className="lg:flex w-full h-auto max-h-[700px] md:min-h-[450px] rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full lg:w-1/2 h-1/2 md:h-auto md:p-5">
          <div className="flex flex-col justify-around text-left text-white md:px-10 md:py-0 p-7">
            <h1 className="text-[32px] md:text-[48px] leading-[44.8px] md:leading-[67.2px] py-3 font-bold carousel-heading">
              The Best Digital <br /> Marketplace <br /> for
              <span className="px-2 text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-[14px] md:text-[18px] py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit text-[15px] md:text-[20px] p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto lg:flex hidden justify-end">
          <Image src={banner2} alt="ad" />
        </div>
      </div>
      <div className="lg:flex w-full h-auto max-h-[700px] md:min-h-[450px] rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner1bg.png')]">
        <div className="flex w-full lg:w-1/2 h-1/2 md:h-auto md:p-5">
          <div className="flex flex-col justify-around text-left text-white md:px-10 md:py-0 p-7">
            <h1 className="text-[32px] md:text-[48px] leading-[44.8px] md:leading-[67.2px] py-3 font-bold carousel-heading">
              The Best Digital <br /> Marketplace <br /> for
              <span className="px-2 text-[#EF5612]">SMEs</span>
            </h1>
            <p className="text-[14px] md:text-[18px] py-2">
              We want to make life better by establishing a safe
              <br /> social marketplace where viable businesses <br />
              can be built and more can be done with ease.
            </p>
            <button className="w-fit text-[15px] md:text-[20px] p-2 px-5 my-3 rounded-lg bg-[#FFA721] text-[#491546] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto lg:flex hidden justify-end">
          <Image src={banner3} alt="ad" />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
