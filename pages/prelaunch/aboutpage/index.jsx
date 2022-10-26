import React from "react";
import Image from "next/image";
import PreLaunchHeader from "../../../components/PreLaunchHeader";
import Platform from "../../../components/Platform";
import dividerimg from "../../../public/images/dividerimg.png";
import OurTeam from "../../../components/OurTeam";
import OurProduct from "../../../components/OurProducts";
import PreLaunchFooter from "../../../components/PreLaunchFooter";

const aboutpage = () => {
  return (
    <div>
      <PreLaunchHeader />
      <Platform />
      <section className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
        <Image src={dividerimg} />
      </section>
      <OurTeam />
      <section className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
        <Image src={dividerimg} />
      </section>
      <OurProduct />
      <PreLaunchFooter />
    </div>
  );
};
export default aboutpage;
