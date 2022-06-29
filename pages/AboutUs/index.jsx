import React from "react";
import Header from "../../components/Header";
import Platform from "../../components/Platform";
import Image from "next/image";
import dividerimg from "../../public/images/dividerimg.png";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import OurTeam from "../../components/OurTeam";
import TeamMate from "../../components/TeamMate";
const AboutUs = () => {
  return (
    <div className="">
      <Header />
      <section className=" w-full h-64 text-white aboutherobg block  ">
        <h1 className="flex justify-center text-4xl font-extrabold pt-16">
          About Us
        </h1>
        <p className="flex justify-center text-lg pt-4">
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
        <Newsletter />
      </section>
      <section>
        <MainFooter />
      </section>
    </div>
  );
};
export default AboutUs;
