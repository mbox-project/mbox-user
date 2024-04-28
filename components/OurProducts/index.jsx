import React from "react";
import Image from "next/image";
import ourproductimg from "../../public/images/ourproductimg.png";
import Button from "../Button";
import Link from "next/link";
const OurProducts = () => {
  return (
    <section>
      <div>
        <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
          <div className="block lg:grid lg:grid-cols-2 gap-16 poppins">
            <div className=" hidden lg:flex w-full">
              <Image src={ourproductimg} />
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="justify-left pb-3 text-lg md:text-2xl lg:text-4xl flex leading-relaxed lg:block font-extrabold ">
                OUR{" "}
                <span className="text-orange-600 pl-2 lg:pl-0"> PRODUCT</span>
              </h2>
              <div className=" flex lg:hidden w-full">
                <Image src={ourproductimg} />
              </div>

              <p className="flex text-sm lg:text-lg  lg:max-w-2xl justify-center w-full lg:block lg:leading-7  leading-relaxed">
                Ensuring that African SMEs achieve growth and brand exposure
                cost-effectively is just as crucial as establishing their online
                presence. For us, we firmly believe that it's not only about the
                digital identity; we are committed to safeguarding you, making
                entrepreneurship more fulfilling, and fostering your growth.
              </p>
              <p className="lg:leading-7 text-sm lg:text-lg">
                This commitment remains steadfast, even as we strive to
                deliver our very best!
              </p>
              <div className="flex flex-col justify-end h-full">
                <Button className="w-full lg:w-max !h-12 px-4 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md text-sm  lg:text-lg tracking-wide  text-white sm:flex-shrink-0 sm:w-auto bg-[#EF5612] ">
                  <Link href="/auth/register"> Sign up Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurProducts;
