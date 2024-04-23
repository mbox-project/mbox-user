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
                How African businesses attain growth and brand exposure cost
                efficiently is as important as bringing their businesses online.
                To us, we are convinced that it’s not only the digital identity
                that matters; we want to protect you, make you smile and help
                you grow.
              </p>
              <p className="lg:leading-7 text-sm lg:text-lg">
                This we will continue to do even at our very best!{" "}
              </p>
              <div className="flex flex-col justify-end h-full">
                <Button className="w-full lg:w-max px-12 py-4 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md text-sm  lg:text-lg font-bold tracking-wide  text-white sm:flex-shrink-0 sm:w-auto bg-orange-600 ">
                  <Link href="/auth/register"> Register Now</Link>
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
