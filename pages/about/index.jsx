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
      <section className=" w-full h-64 text-white aboutherobg block  ">
        <h1 className="flex justify-center text-4xl lg:text-6xl poppins font-extrabold pt-16">
          About Us
        </h1>
        <p className="flex justify-center  text-grayColor poppins text-base tracking-wide pt-4">
          Learn more about our platform Mbox
        </p>
      </section>
      <Platform />
      <section className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
        <Image src={dividerimg} />
      </section>
      <section>
        <OurTeam />
      </section>
      <section>
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
