import React from "react";
import Platform from "../../../components/Platform";
import Image from "next/image";
import Logo from "../../../public/images/logo1.png";
import dividerimg from "../../../public/images/dividerimg.png";
import MainFooter from "../../../components/MainFooter";
import OurTeam from "../../../components/OurTeam";
import OurProducts from "../../../components/OurProducts";

const AboutUs = () => {
  return (
    <main className="">
      <section>
        <div className="font-poppins text-[#FAFAFA]">
          <header className="h-auto md:h-screen w-full bg-[url('../public/images/headerbg.png')] bg-contain md:bg-cover md:bg-center">
            <div className="h-auto md:h-screen w-full bg-[#070207] bg-opacity-60">
              <nav className="flex flex-row justify-between p-2 md:p-10 w-full h-auto">
                <div className="p-2 md:p-5">
                  <Image src={Logo} alt="logo" width={140} height={20} />
                </div>
                <div className="flex p-2 md:p-5 gap-5 text-xs md:text-base">
                  <a href="#">ABOUT US</a>
                  <a href="#">CONTACT US</a>
                </div>
              </nav>

              <div className="flex flex-col text-center">
                <h1 className="self-center font-semibold lg:text-6xl text-3xl text-[#EF5612] py-2 md:py-10">
                  COMING SOON
                </h1>
                <h3 className="self-center md:text-3xl text-sm w-fit p-1 md:p-3 mt-0 md:mt-10 rounded-md">
                  THE POCKET-SIZED MARKETPLACE
                </h3>
              </div>

              <div className="text-center text-sm md:text-xl py-3 md:pt-28">
                <p className="w-full p-3 bg-[#FAFAFA] bg-opacity-10">
                  Get familiar with the brand
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>

      <Platform />

      <section className="max-w-screen-xl p-4 mx-auto">
        <Image src={dividerimg} height={130} />
      </section>

      <section className="py-8 lg:py-16 border-b">
        <OurTeam />
      </section>

      <section>
        <OurProducts />
      </section>

      <section>
        <MainFooter />
      </section>
    </main>
  );
};
export default AboutUs;
