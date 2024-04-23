import React from "react";
import Navbar from "../../components/PagesLayout/Navbar";
import Platform from "../../components/Platform";
import Image from "next/image";
import dividerimg from "../../public/images/dividerimg.png";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import OurTeam from "../../components/OurTeam";
import TeamMate from "../../components/TeamMate";
import OurProducts from "../../components/OurProducts";

const AboutUs = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" w-full h-64 text-white aboutherobg flex flex-col justify-center items-center">
        <h1 className="flex justify-center text-xl md:text-4xl lg:text-6xl poppins font-extrabold ">
          About Us
        </h1>
        <p className="flex justify-center pt-2 text-center text-grayColor poppins text-base tracking-wide md:pt-4">
          Learn more about our platform Mbox
        </p>
      </section>
      <Platform />
      <section className="max-w-screen-xl p-4 mx-auto">
        <Image src={dividerimg} />
      </section>
      <section className="py-8 lg:py-16 border-b">
        <OurTeam />
        <TeamMate />
      </section>
      <section>
        <OurProducts />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <MainFooter />
      </section>
    </div>
  );
};
export default AboutUs;
