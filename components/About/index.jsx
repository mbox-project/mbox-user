import React from "react";
import Image from "next/image";
import aboutimg from "../../public/images/aboutimg.png";
import Button from "../Button";
const About = () => {
  return (
    <section className="aboutbg">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-3">
              <h3 className="text-lg lg:text-xl pb-5 ">
                About <span className="text-orange-500">MBOX</span>
              </h3>
              <Image src={aboutimg} className="w-12" />
            </div>

            <div className="col-span-3 lg:col-span-2  ">
              <p className="lg:mt-11  leading-loose abouttext">
                Mbox is Africa’s first digital marketplace that allows SMEs
                create a digital version of their business without website. With
                just your username, your business can connect with millions of
                buyers who are protected via escrow. Buying and selling safely
                over the internet is not that difficult.
              </p>
              <p className=" mt-3 lg:mt-12  abouttext">
                {" "}
                You are just a sign up away!
              </p>
              <Button className="w-full h-12 px-6 py-3  uppercase lg:normal-case lg:rounded-md  lg:mt-44 text-sm font-bold tracking-wide  bg-orange-600 sm:ml-4 md:ml-1 sm:flex-shrink-0 sm:w-auto mt-3  text-white">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
