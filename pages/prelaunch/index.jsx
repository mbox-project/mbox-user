import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Button from "../../components/Button";
// import PreLaunchHeader from "../../../components/PreLaunchHeader";
import Step from "../../public/images/step.png";
import Benefit from "../../public/images/benefit.png";
import Marketbox from "../../public/images/marketbox.png";
import Partner from "../../public/images/partner.png";
import Offer from "../../public/images/offer.png";
import Growth from "../../public/images/growth.png";
import Team from "../../public/images/team.png";
import MainFooter from "../../components/MainFooter";

const landingpage = () => {
  return (
    <main className=" text-gray-700 font-poppins">
      <Header />

      <section>
        <div className="flex flex-col bg-[url('../public/images/stepbg.png')] bg-contain bg-[#F2F2F2]">
          <div className="py-5">
            <h2 className="text-lg md:text-4xl font-bold p-5 md:px-10">
              When You Plant Your Business Seeds Online;
            </h2>
          </div>
          <div className="px-5 cursor-pointer">
            <Image src={Step} width={1200} height={500} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col py-14">
          <div className="self-center p-5">
            <h2 className="text-lg md:text-2xl font-bold">
              AND BECAUSE WE TRULY CARE, YOU WOULD NEVER HAVE TO WORRY ABOUT;
            </h2>
          </div>
          <div className="p-5 cursor-pointer">
            <Image src={Benefit} width={1150} height={450} />
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="flex justify-around w-full text-white bg-[#034694]">
            <div className="flex flex-col p-5 gap-5">
              <p className="text-base md:text-xl md:p-2">
                It's time to grow your business beyound WhatsApp, Twitter,
                Facebook and Instagram.
              </p>
              <h3 className="text-xl md:text-2xl font-medium md:p-2">
                You now have a partner in progress!!!
              </h3>
            </div>
            <Image src={Partner} width={350} height={200} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col w-full h-auto py-5 px-2 md:px-24 text-center">
          <div className="p-5">
            <h2 className="text-xl md:text-2xl font-bold md:font-extrabold">
              WHAT WE HAVE BOXED UP FOR YOU
            </h2>
          </div>

          <div className="flex flex-col w-full h-auto">
            <div className="flex flex-row justify-evenly w-full h-auto">
              <div className="md:flex lg:flex w-1/2 h-auto">
                <Image src={Growth} width={550} height={500} />
              </div>
              <div className="md:flex lg:flex w-1/2 h-auto">
                <div className="flex md:px-16 justify-center items-center text-left">
                  <p className="text-xl md:text-2xl">
                    We help you grow your business online and together we can
                    make that happen!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly w-full h-auto">
              <div className="md:flex lg:flex w-1/2 h-auto">
                <div className="flex md:px-16 justify-center items-center text-left">
                  <p className="text-xl md:text-2xl">
                    We absolutely make your happiness and goals our priority!
                  </p>
                </div>
              </div>
              <div className="md:flex lg:flex w-1/2 h-auto">
                <Image src={Team} width={550} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="font-poppins text-white">
          <div className="bg-[url('../public/images/mailbg.png')] bg-contain md:bg-cover md:bg-center">
            <div className="py-3 md:py-10">
              <div className="flex flex-col w-full h-auto px-2">
                <p className="py-3 md:px-40 text-wrap text-center text-lg md:text-xl">
                  There is a marketplace in a Box for you. A box of happiness is
                  asking to live in your pockets. Happiness has never been this
                  close!
                </p>
                <p className="p-2 text-center text-sm md:text-base">
                  Let the box find you when it drops!
                </p>
              </div>

              <div className="flex">
                <form className="w-full">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="flex flex-col md:flex-row justify-center p-2 sm:flex sm:items-center">
                    <input
                      className="w-full md:w-4/12 h-12 p-3 lg:mt-8 text-sm font-medium text-gray-700 placeholder-gray-700 border-none rounded-md md:rounded-r-none bg-white"
                      type="email"
                      placeholder="Email Address"
                      required
                    />

                    <div className="flex justify-end">
                      <Button
                        className="w-fit h-12 px-6 md:px-6 py-3 mt-1 rounded-md md:rounded-l-none lg:-ml-2 lg:mt-8 text-lg font-semibold tracking-wide  bg-[#EF5612] md:mt-4   sm:flex-shrink-0 sm:w-auto sm:mt-0"
                        type="submit"
                      >
                        <Link href={""}>NOTIFY ME</Link>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5">
          <div className="flex justify-center p-5">
            <p className="text-lg md:text-2xl font-bold">
              A TIP INTO WHAT WE OFFER
            </p>
          </div>
          <div className="p-5 cursor-pointer">
            <Image src={Offer} width={1100} height={700} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex py-5 text-white">
          <div className="text-center py-5 bg-gradient-to-r from-[#FF6783] via-[#0018BBB1] to-[#20C9FF]">
            <h3 className="text-xl md:text-2xl font-semibold p-5">
              The market place for your business and needs
            </h3>
            <p className="text-base md:text-lg text-wrap p-5 md:px-32">
              We thrive to make life better by establishing a social marketplace
              that is safe, where vaiable businesses can be built and more can
              be done with ease.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="block w-full h-auto p-10 md:p-20 cursor-pointer">
          <Image src={Marketbox} width={1000} height={350} />
        </div>
      </section>
      <MainFooter />
    </main>
  );
};
export default landingpage;
