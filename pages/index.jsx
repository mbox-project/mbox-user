import React from "react";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Feature from "../components/Feature";
import GenerateInvoice from "../components/GenerateInvoice";
import BuyNow from "../components/BuyNow";
import Items from "../components/Items";
import BecomeAMerchant from "../components/BecomeAMerchant";
import Category from "../components/Category";
import SuggestedMerchant from "../components/SuggestedMerchant";
import sneakers from "../public/images/sneakerimg.png";
import Image from "next/dist/client/image";
import ad from "../public/images/ad.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide from "../public/images/slide.png";
import PopularMerchants from "../components/PopularMerchants";
import iconOne from "../public/images/featureicon1.png";
import iconTwo from "/public/images/featureicon2.png";
import iconThree from "/public/images/featureicon3.png";
import Link from "next/link";
import Button from "../components/Button";

const featureCard = [
  {
    id: 1,
    name: "Buying & Selling Safely",
    body: "Dealer in various type of whatever as want randing from this to that to those and here!",
    icon: iconOne,
  },
  {
    id: 2,
    name: "100%  Secure",
    body: "Dealer in various type of whatever as want randing from this to that to those and here!",
    icon: iconTwo,
  },
  {
    id: 3,
    name: "24Hrs Warranty",
    body: "Dealer in various type of whatever as want randing from this to that to those and here!",
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

const LandingPage = () => {
  return (
    <div className="">
      <Header />
      <section className="mr-0">
        <Carousel>
          <div>
            <Button className="px-4 md:px-12 md:py-3 py-1 mt-24  uppercase lg:rounded-md md:mt-48 hover:-translate-y-1 hover:scale-110  duration-300  lg:mt-96  absolute z-20 text-sm  lg:text-lg font-bold tracking-wide  text-brightPurple font-poppins ml-4 md:ml-8 sm:flex-shrink-0 sm:w-auto  bg-yellowColor lg:ml-16">
              <Link href={""}>Shop Now</Link>
            </Button>
            <Image src={slide} />
          </div>
          <div>
            <Image src={slide} />
          </div>
          <div>
            <Image src={slide} />
          </div>
          <div>
            <Image src={slide} />
            <p className="legend ">Legend 3</p>
          </div>
          <div>
            <Image src={slide} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
      <section className="featurebg -mt-12 ">
        <div className="max-w-screen-xl px-4 py-6 md:py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-0">
          <h2 className="flex justify-center py-1 uppercase font-poppins font-bold text-xl md:text-2xl lg:text-4xl  ">
            Our Special<span className="text-orange-600 px-3 "> Features</span>
          </h2>
          <div className=" block md:grid grid-cols-2 w-full   lg:flex">
            {featureCard.map((card, index) => {
              return (
                <Feature
                  key={index}
                  className="p-4 mx-2 my-6 pt-8 -mt-44 md:-mt-44 lg:-mt-44 lg:pt-16 md:my-8 lg:my-0 lg:mx-6 border-2 block  try rounded-xl  bg-grayColor"
                  header={card.name}
                  body={card.body}
                  icon={card.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      <GenerateInvoice />
      <BuyNow />
      <section className="aboutbg">
        <div className="max-w-screen-xl  lg:py-16 lg:mx-auto sm:px-6">
          <div className="mx-3 lg:mx-0 flex justify-between">
            <h2 className=" uppercase text-xl lg:text-2xl">
              Suggested<span className="text-orange-600 px-1 "> Merchants</span>
            </h2>
            <p>See All</p>
          </div>
          <div className="block pb-10 md:grid  md:grid-cols-2 lg:grid-cols-4 suggested">
            {merchantCard.map((item, index) => {
              return (
                <SuggestedMerchant
                  key={index}
                  className="p-4 mx-3 mt-3 lg:mx-10 lg:w-72 border-2  lg:mt-10  shadow-md  rounded-lg  bg-white"
                  header={item.name}
                  body={item.count}
                  categories={item.categories}
                  button="View Store"
                />
              );
            })}
          </div>
        </div>
      </section>
      <Items />
      <section>
        <div className="max-w-screen-xl md:pb-12 lg:pb-16 px-4 -mt-10 pt-0 pb-6 lg:mx-auto sm:px-6 lg:px-8 hover:-translate-y-1 hover:scale-110  duration-300">
          <Link href={""}>
            <Image src={sneakers} />
          </Link>
        </div>
      </section>
      <Category />

      <BecomeAMerchant />
      <section>
        <div className="max-w-screen-xl px-4 py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-8 hover:-translate-y-1 hover:scale-110  duration-300">
          <Link href={""}>
            <Image src={ad} />
          </Link>
        </div>
      </section>
      <PopularMerchants />
      <About />
      <Newsletter />
      <MainFooter />
    </div>
  );
};

export default LandingPage;
