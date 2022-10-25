import React from "react";
import Image from "next/image";
import ourproductimg from "../../public/images/ourproductimg.png";
import Button from "../Button";
import Link from "next/link";
const OurProducts = () => {
  return (
    <section>
      <div>
        <div className="max-w-screen-2xl md:px-4 px-0  pb-60  md:py-8 lg:py-16 mx-auto  lg:mx-0 sm:px-6">
          <div className=" block lg:grid grid-cols-2 gap-4  mt-2 lg:mt-5  lg:gap-y-16">
            <div className=" hidden lg:flex w-full  lg:pl-14 lg:mt-0">
              <Image src={ourproductimg}  />
            </div>

            <div>
              <h2 className="justify-left pb-3 md:pb-0 text-lg md:text-2xl lg:text-4xl poppins flex   md:justify-center leading-relaxed lg:justify-right lg:block pt-2 md:pt-2 font-extrabold ">
                OUR{" "}
                <span className="text-orange-600 pl-2 lg:pl-0"> PRODUCT</span>
              </h2>
              <div className=" flex lg:hidden w-full  lg:mt-0">
                <Image src={ourproductimg} />
              </div>

              <p className="flex text-sm  lg:max-w-2xl justify-center w-full lg:block lg:leading-7 lg:text-lg   pt-4 poppins lg:pt-8 leading-relaxed">
                How African businesses attain growth and brand exposure cost
                efficiently is as important as bringing their businesses online.
                To us, we are convinced that it’s not only the digital identity
                that matters; we want to protect you, make you smile and help
                you grow.
              </p>
              <p className="pt-4 lg:pt-10 poppins lg:leading-7 lg:text-lg">
                This we will continue to do even at our very best!{" "}
              </p>
              <Button className="w-full h-12 px-12 py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case poppins lg:rounded-md  lg:h-16 lg:mt-48 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 md:ml-1 sm:flex-shrink-0 sm:w-auto mt-6  bg-orange-600 ">
                <Link href="/auth/register"> Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurProducts;
