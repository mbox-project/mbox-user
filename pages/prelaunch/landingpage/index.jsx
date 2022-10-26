import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import PreLaunchHeader from "../../../components/PreLaunchHeader";
import Seeds from "../../../public/images/seeds.png";
import Ourcare from "../../../public/images/ourcare.png";
import BuyandSell from "../../../public/images/buyandsell.png";
import Progress from "../../../public/img/progress.svg";
import mailbg from "../../../public/img/mailbg.svg";
import ouroffer from "../../../public/img/ouroffer.svg";
import Businessgrowth from "../../../public/images/businessgrowth.png";
import Ourpriority from "../../../public/images/ourpriority.png";
import PreLaunchFooter from "../../../components/PreLaunchFooter";

const landingpage = () => {
  return (
    <div className=" text-gray-700 font-poppins">
      <PreLaunchHeader />
      <section>
        <div className="flex flex-col justify-center bg-gray-100 pb-10">
          <div className=" self-center m-5 p-5">
            <h2 className="text-2xl font-semibold">
              When You Plant Your Business Seeds Online;
            </h2>
          </div>
          <div className=" self-center p-5">
            <Image src={Seeds} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col m-5 py-14">
          <div className="self-center m-5 p-5">
            <h2 className="text-2xl font-semibold">
              AND BECAUSE WE TRULY CARE, YOU WOULD NEVER HAVE TO WORRY ABOUT;
            </h2>
          </div>
          <div className="self-center p-5">
            <Image src={Ourcare} />
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="flex justify-around w-full text-white bg-blue-900 px-5">
            <div className=" self-center">
              <p className="text-xl p-5">
                It's time to grow your business beyound WhatsApp, Twitter,
                Facebook and Instagram.
              </p>
              <h3 className="text-2xl font-medium p-5">
                You now have a patner in progress!!!
              </h3>
            </div>
            <Image src={Progress} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col w-full h-auto px-24">
          <div className="self-center m-5 p-5">
            <h2 className="text-2xl font-extrabold">
              WHAT WE HAVE BOXED UP FOR YOU
            </h2>
          </div>
          <div className="flex flex-col w-full h-auto">
            <div className="flex flex-row justify-evenly w-full h-auto">
              <div className=" hidden md:flex lg:flex w-1/2 h-auto">
                <Image src={Businessgrowth} />
              </div>
              <div className="md:flex lg:flex w-1/2 h-auto">
                <div className=" self-center text-center">
                  <p className=" text-2xl">
                    We help you grow your business online and together we can
                    make that happen!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly w-full h-auto">
              <div className="md:flex lg:flex w-1/2 h-auto">
                <div className="self-center text-center">
                  <p className="text-2xl">
                    We absolutely make your happiness and goals our priority!
                  </p>
                </div>
              </div>
              <div className="hidden md:flex lg:flex w-1/2 h-auto">
                <Image src={Ourpriority} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="poppins text-white pb-28">
          <div
            style={{
              backgroundImage: `url(${mailbg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
              <div className="md:flex justify-center ">
                <div className=" mt-2 lg:mt-0  lg:gap-y-16">
                  <div className="col-span-2">
                    <div className=" text-center">
                      <p className="mt-6 lg:mt-2 py-3 flex justify-center leading-relaxed text-base font-light">
                        There is a marketplace in a box for you. A box of
                        happiness is asking to live in your pockets. Happiness
                        has never been this close!
                      </p>
                      <p className="">Let the box find you when it drops!</p>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <form className="w-full">
                      <label htmlFor="email" className="sr-only">
                        {" "}
                        Email{" "}
                      </label>

                      <div className=" flex justify-center p-2 sm:flex sm:items-center">
                        <input
                          className="w-1/2 h-12 p-3 text-sm font-medium tracking-widest text-gray-700 placeholder-gray-700 uppercase lg:normal-case border-none rounded-l-md lg:mt-8  bg-white"
                          type="email"
                          placeholder="Email Address"
                          required
                        />

                        <Button
                          className="w-full h-12 px-6 lg:px-10 py-3 mt-1 uppercase lg:normal-case lg:rounded-md lg:rounded-l-none lg:-ml-2 lg:mt-8 text-sm font-bold tracking-wide  bg-orange-600 md:mt-4   sm:flex-shrink-0 sm:w-auto sm:mt-0"
                          type="submit"
                        >
                          <Link href={""}>NOTIFY ME</Link>
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex justify-center p-5">
            <p className="text-2xl font-bold">A TIP INTO WHAT WE OFFER</p>
          </div>
          <div className="p-5">
            <Image src={ouroffer} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex py-5 text-white">
          <div className="text-center py-5 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
            <h3 className=" text-2xl font-semibold p-5">
              The market place for your business and needs
            </h3>
            <p className="text-lg p-5 px-32">
              We thrive to make life better by establishing a social marketplace
              that is safe, where vaiable businesses can be built and more can
              be done with ease.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <Image src={BuyandSell} />
        </div>
      </section>
      <PreLaunchFooter />
    </div>
  );
};
export default landingpage;
