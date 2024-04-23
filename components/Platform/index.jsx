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
              OUR{" "}
              <span className="text-orange-600 pl-2 lg:pl-0"> PLATFORM</span>
            </h2>
            <div className=" lg:hidden ">
              <Image src={platformimg} />
            </div>
            <p className="text-base md:text-xl lg:text-lg  md:pl-0 md:block pt-4 lg:pt-4 font-poppins text-lightGray leading-loose md:leading-9 lg:leading-7">
              Mbox is Africa’s first digital marketplace that allows SMEs create
              a digital version of their business with- out a website. With just
              your username, businesses can connect with millions of buyers
              protected via escrow. Buying and selling safely over the internet
              is not that difficult.
            </p>
            <p className=" md:pl-0 pt-6 md:pt-10 md:text-xl lg:text-lg text-lightGray     font-poppins lg:pt-10">
              You are just a sign up away!{" "}
            </p>
            <Button className="w-full h-12 px-12 py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md lg:h-16 poppins lg:mt-24 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 md:ml-1 md:mt-10 sm:flex-shrink-0  lg:font-weight sm:w-auto mt-6 bg-brightRed lg:ml-1">
              <Link href="/auth/register"> Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Platform;
