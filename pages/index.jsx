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

let cards = ["Buying & Selling Safely", "100%  Secure", "24Hrs Warranty"];
const featureCard = [];
cards.forEach((card, index) => {
  featureCard.push(
    <Feature
      key={index}
      className="p-4 mx-2 my-6 md:my-8 lg:mt-10 lg:mx-6 border-2 block  shadow-md rounded-xl  bg-white"
      header={card}
      body="Dealer in various type of whatever as
      want randing from this to that to those
      and here!"
    />
  );
});

let merchantCard = [
  "Giveon’s Crib",
  "Giveon’s Crib",
  "Giveon’s Crib",
  "Giveon’s Crib",
];
const suggestedCard = [];
merchantCard.forEach((merchant, index) => {
  suggestedCard.push(
    <SuggestedMerchant
      key={index}
      className="p-4 mx-3 mt-3 lg:mx-10 lg:w-72 border-2  lg:mt-10 h-60 shadow-md  rounded-lg  bg-white"
      header={merchant}
      body="3,543 Endorsements"
      categories="Categories : 
      Automobile
      Fashion
      Toys"
      button="View Store"
    />
  );
});

const LandingPage = () => {
  return (
    <div className="">
      <Header />
      <section>
        <Carousel>
          <div>
            <Image src={slide} />
          </div>
          <div>
            <Image src={slide} />
          </div>
          <div>
            <Image src={slide} />
            <p className="legend">Legend 3</p>
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
        <div className="max-w-screen-xl px-4 py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-0">
          <h2 className="flex justify-center py-1 uppercase font-bold text-xl lg:text-2xl tracking-wider ">
            Our Special<span className="text-orange-600 px-1 "> Features</span>
          </h2>
          <div className=" block md:grid grid-cols-2 w-full  lg:flex">
            {featureCard}
            <Feature
            className="p-4 mx-2 invisible  md:my-8 lg:mt-10 lg:mx-6 border-2 md:visible lg:hidden  shadow-md rounded-xl  bg-white"
              header="Buying & Selling Safely"
              body="Dealer in various type of whatever as
              want randing from this to that to those
              and here!"
            />
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
            {suggestedCard}

            {/* s */}
          </div>
        </div>
      </section>
      <Items />
      <section>
        <div className="max-w-screen-xl md:pb-12 lg:pb-16 px-4 -mt-10 pt-0 pb-6 lg:mx-auto sm:px-6 lg:px-8">
          <Image src={sneakers} />
        </div>
      </section>
      <Category />

      <BecomeAMerchant />
      <section>
        <div className="max-w-screen-xl px-4 py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-8">
          <Image src={ad} />
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
