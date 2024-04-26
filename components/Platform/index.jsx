import React from "react";
import Image from "next/image";
import platformimg from "../../public/images/platformimg.png";
import Button from "../Button";
import Link from "next/link";
const Platform = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="block lg:grid lg:grid-cols-2 gap-16">
          <div className="hidden lg:flex mt-4 lg:mt-0">
            <Image src={platformimg} width="600px" height="400px" />
          </div>

          <div className="">
            <h2 className="justify-left pb-3 text-lg md:text-2xl lg:text-4xl poppins flex leading-relaxed lg:block pt-2 md:pt-2 font-extrabold ">
              OUR <span className="text-orange-600 pl-2 lg:pl-0"> VISION</span>
            </h2>
            <div className=" lg:hidden ">
              <Image src={platformimg} />
            </div>
            <p className="text-base md:text-xl md:pl-0 pt-4 lg:pt-4 font-poppins text-[#444444] leading-loose md:leading-9 lg:leading-7">
              To make life better by establishing a safe social marketplace
              where viable businesses can be built and more can
              be done with ease
            </p>
            <Button className="w-full !h-12 px-5 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md lg:h-16 poppins lg:mt-24 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 md:ml-1 md:mt-10 sm:flex-shrink-0  lg:font-weight sm:w-auto mt-6 bg-[#EF5612] lg:ml-1">
              <Link href="/auth/register"> Sign up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Platform;
