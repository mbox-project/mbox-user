import React from "react";
import Header from "../components/Header";
import Navbar from "../components/PagesLayout/Navbar";
import NavTag from "../components/PagesLayout/NavTag";
import Banner from "../components/Banner";
import Category from "../components/Category";
import NewArrivals from "../components/NewArrivals";
import GettingStarted from "../components/GettingStarted";
import Feature from "../components/Feature";
import SuggestedMerchant from "../components/SuggestedMerchant";
import PopularMerchants from "../components/PopularMerchants";
import Newsletter from "../components/Newsletter";
import MainFooter from "../components/MainFooter";
import Image from "next/image";
import Link from "next/link";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useSelector } from "react-redux";
import useGetUser from "../hooks/useGetUser";

import iconOne from "/public/images/featureicon1.PNG";
import iconTwo from "/public/images/featureicon2.png";
import iconThree from "/public/images/featureicon3.png";
import banner1 from "/public/images/banner1.png";
import banner2 from "/public/images/banner2.png";
import banner3 from "/public/images/banner3.png";
import banner4 from "/public/images/banner4.png";

const featureCard = [
  {
    id: 1,
    name: "Invoicing Service",
    body: "Create invoices and let buyers pay you.",
    icon: iconOne,
  },
  {
    id: 2,
    name: "Escrow Policy",
    body: "Stay protected with our escrow feature to buy and sell safely",
    icon: iconTwo,
  },
  {
    id: 3,
    name: "Reviews & Ratings",
    body: "Elevate your brands with positive feedback from buyers.",
    icon: iconThree,
  },
];

let merchantCard = [
  {
    id: 1,
    name: "Giveon’s Crib",
    categories: "Fashion",
    count: "3.5k",
  },
  {
    id: 2,
    name: "Giveon’s Crib",
    categories: "Fashion",
    count: "3.5k",
  },
  {
    id: 3,
    name: "Giveon’s Crib",
    categories: "Fashion",
    count: "3.5k",
  },
  {
    id: 4,
    name: "Giveon’s Crib",
    categories: "Fashion",
    count: "3.5k",
  },
];

const LandingPage = () => {
  const user = useSelector((state) => state.auth.user);
  //useGetUser();
  return (
    <main>
      <header>
        <div>{user?.id ? <Navbar /> : <Header />}</div>
        <div className="px-2 md:px-16">
          <NavTag />
        </div>
      </header>

      <section className="px-2 md:px-16 py-10">
        <Banner />
      </section>

      <section className="px-2 md:px-16">
        <di>
          <GettingStarted />
        </di>
        <div>
          <NewArrivals />
        </div>

        <section>
          <div className="w-full text-[#444444] text-center">
            <div className="">
              <h2 className="flex justify-center text-nowrap font-medium pb-5 text-base md:text-xl">
                AWESOME SERVICES FOR
                <span className="text-[#EF5612] px-1">YOU</span>
              </h2>
            </div>

            <div>
              <div className="block w-full lg:flex justify-between">
                {featureCard.map((card, index) => {
                  return (
                    <Feature
                      key={index}
                      header={card.name}
                      body={card.body}
                      icon={card.icon}
                    />
                  );
                })}
              </div>
            </div>

            <div
              className={`block  w-full text-sm mt-10 justify-center pt-5 gap-5 space-y-3 md:space-y-0 ${user.id ? 'hidden' : 'md:flex'
                }`}
            >
              <button className="h-12 w-full md:w-auto px-5 border-2 rounded-lg text-[#EF5612] border-[#EF5612]">
                Sign up with us
              </button>
              <button className="h-12 w-full md:w-auto px-5 rounded-lg text-white bg-[#EF5612]">
                Login to your account
              </button>
            </div>
          </div>
        </section>

        <section className="">
          <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
            <div className="flex justify-between w-full border-b-2 border-gray-200">
              <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-[#EF5612]">
                Suggested
                <span className="text-[#EF5612] px-1">Top Vendors </span>
              </h4>

              <div className="text-xs md:text-sm text-nowrap p-2">
                <a href="#">View All &gt;&gt;</a>
              </div>
            </div>

            <ScrollMenu>
              <div className="flex suggested">
                {merchantCard.map((item, index) => {
                  return (
                    <SuggestedMerchant
                      key={index}
                      className="p-4 mx-3 my-3 w-72 lg:w-72 border-2  lg:my-10 shadow-md rounded-lg"
                      header={item.name}
                      body={item.count}
                      categories={item.categories}
                      button="View Store"
                    />
                  );
                })}
              </div>
            </ScrollMenu>
          </div>
        </section>

        <div className="static py-2 md:py-10">
          <div className="md:flex w=full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner2bg.png')]">
            <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
              <div className="flex flex-col justify-between px-10">
                <h1 className="text-3xl text-[#491546] py-3 font-bold">
                  ENDORSE <br />
                  <span className="text-[#EF5612]">BUSINESSES 👇</span>
                </h1>
                <p className="text-sm text-[#8492A7] py-2">
                  Express your support for friends business by endorsing their
                  business on <span className="text-[#EF5612]">Mbox </span> .
                </p>
                <p className="text-base">WE RISE BY LIFTING OTHERS !!!</p>
                <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#EF5612] text-sm text-white">
                  Endorse Businesses
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-auto">
              <Image src={banner2} alt="ad" />
            </div>
          </div>
        </div>

        <div>
          <Category />
        </div>

        <div className="static text-[#444444] py-2 md:py-10">
          <div className="md:flex w=full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner3bg.png')]">
            <div className="w-full md:w-1/2 h-1/2 md:h-auto">
              <Image src={banner3} alt="ad" />
            </div>

            <div className="flex justify-end w-full md:w-1/2 h-1/2 md:h-auto p-5">
              <div className="flex flex-col justify-between px-5 text-left md:text-right">
                <h1 className="text-3xl py-3 font-bold">
                  Giveon’s Crib 50% off
                </h1>
                <p className="text-2xl py-2">
                  2nd - 31st December <br />
                  <p className="text-sm py-5">
                    Enjoy discount on all our products
                  </p>
                </p>
                <div className=" justify-end">
                  <button className="w-fit justify-self-end p-2 px-5 my-3 rounded-lg bg-[#491546] text-sm text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PopularMerchants />
        </div>

        <div className="static text-[#444444] pb-2 md:pb-16">
          <div className="md:flex w=full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner4bg.png')]">
            <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
              <div className="flex flex-col justify-between px-5">
                <h1 className="text-3xl py-3 font-bold">
                  Giveon’s Crib 50% off
                </h1>
                <p className="text-2xl py-2">
                  2nd - 31st December
                  <p className="text-sm py-5">
                    Enjoy discount on all our products
                  </p>
                </p>
                <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#EF5612] text-sm text-white">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-auto">
              <Image src={banner4} alt="ad" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Newsletter />
        </div>
        <div>
          <MainFooter />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
