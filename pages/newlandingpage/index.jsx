import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/PagesLayout/Navbar";
import NavTag from "../../components/PagesLayout/NavTag";
import Category from "../../components/Category";
import NewArrivals from "../../components/NewArrivals";
import GettingStarted from "../../components/GettingStarted";
import Feature from "../../components/Feature";
import SuggestedMerchant from "../../components/SuggestedMerchant";
import PopularMerchants from "../../components/PopularMerchants";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import iconOne from "/public/images/featureicon1.PNG";
import iconTwo from "/public/images/featureicon2.png";
import iconThree from "/public/images/featureicon3.png";

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
    categories: "Categories: Automobile, Fashion, Toys",
    count: "3,543 Endorsements",
  },
  {
    id: 2,
    name: "Giveon’s Crib",
    categories: "Categories: Automobile, Fashion, Toys",
    count: "3,543 Endorsements",
  },
  {
    id: 3,
    name: "Giveon’s Crib",
    categories: "Categories: Automobile, Fashion, Toys",
    count: "3,543 Endorsements",
  },
  {
    id: 4,
    name: "Giveon’s Crib",
    categories: "Categories: Automobile, Fashion, Toys",
    count: "3,543 Endorsements",
  },
];

const NewLandingPage = () => {
  return (
    <main>
      <header>
        <div>{((<Navbar />), (<Header />))}</div>
        <div className="px-2 md:px-16">
          <NavTag />
        </div>
      </header>

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

            <div className="block w-full lg:flex">
              {featureCard.map((card, index) => {
                return (
                  <Feature
                    key={index}
                    className="m-4"
                    header={card.name}
                    body={card.body}
                    icon={card.icon}
                  />
                );
              })}
            </div>

            <div className="block md:flex w-full text-sm mt-10 justify-center pt-5 gap-5 space-y-3 md:space-y-0">
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

        <div>
          <Category />
        </div>
        <div>
          <PopularMerchants />
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

export default NewLandingPage;
