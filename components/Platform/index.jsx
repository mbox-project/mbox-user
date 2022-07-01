import React from "react";
import Image from "next/image";
import platformimg from "../../public/images/platformimg.png";
import Button from "../Button";
import Link from "next/link";
const Platform = () => {
  return (
    <section>
      <div>
        <div className="max-w-screen-xl px-4 py-0  md:py-8 lg:py-16 mx-auto  lg:px-8">
          <div className=" block lg:grid grid-cols-2 lg:gap-20 mt-2 lg:mt-3  lg:gap-y-16">
            <div className="hidden lg:flex  lg:mt-0">
              <Image src={platformimg} width="600px" height="400px" />
            </div>

            <div className=" ">
              <h2 className="text-2xl flex justify-center lg:block pt-5 md:pt-2 font-extrabold ">
                OUR{" "}
                <span className="text-orange-600 pl-2 lg:pl-0"> PLATFORM</span>
              </h2>
              <p className=" flex justify-center md:block pt-4 lg:pt-8 leading-relaxed">
                Mbox is Africa’s first digital marketplace that allows SMEs
                create a digital version of their business with- out a website.
                With just your username, businesses can connect with millions of
                buyers protected via escrow. Buying and selling safely over the
                internet is not that difficult.
              </p>
              <p className=" pt-6 md:pt-2 lg:pt-10">
                You are just a sign up away!{" "}
              </p>
              <Button className="w-full h-12 px-12 py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md  lg:mt-20 text-sm  lg:text-lg font-bold tracking-wide  text-white sm:ml-4 md:ml-1 sm:flex-shrink-0 sm:w-auto mt-6 bg-orange-600 lg:ml-1">
                <Link href={""}> Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Platform;
