import React from "react";
import Image from "next/image";
import aboutimg from "../../public/images/aboutimg.png";
import Button from "../Button";
import Link from "next/link";
const About = () => {
  return (
    <section className="aboutbg">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className=" block  md:grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-3">
              <h3 className="text-xl lg:text-2xl pb-5 -mt-96 lg:mt-3 poppins ">
                About <span className="text-orange-500">MBOX</span>
              </h3>
              <Image src={aboutimg} />
            </div>

            <div className="col-span-3 lg:col-span-2  ">
              <p className=" mt-4 md:mt-3 lg:mt-11  leading-loose abouttext poppins">
                Mbox is Africa’s first digital marketplace that allows SMEs
                create a digital version of their business without website. With
                just your username, your business can connect with millions of
                buyers who are protected via escrow. Buying and selling safely
                over the internet is not that difficult.
              </p>
              <p className=" mt-6 lg:mt-12  abouttext poppins">
                {" "}
                You are just a sign up away!
              </p>
              <Button className="w-full h-12 px-6 lg:px-10 poppins py-3 hover:-translate-y-1 hover:scale-110  duration-300 uppercase lg:normal-case lg:rounded-md  lg:mt-44 text-sm font-bold tracking-wide  bg-orange-600 sm:ml-4 md:ml-1 sm:flex-shrink-0 sm:w-auto mt-8 md:mt-10  text-white">
                <Link href={""}>Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
