import React from "react";
import Header from "../components/Header";
import Navbar from "../components/PagesLayout/Navbar";
import axios from "axios";
import HomeNavbar from "../components/PagesLayout/HomeNavbar";
import MainFooter from "../components/MainFooter";
import Newsletter from "../components/Newsletter";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

// import About from "../components/About";
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
import iconOne from "../public/images/featureicon1.PNG";
import iconTwo from "/public/images/featureicon2.png";
import iconThree from "/public/images/featureicon3.png";
import Link from "next/link";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import useGetUser from "../hooks/useGetUser";

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
// const HorizontalScroll = require("react-horizontal-scrolling");
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
  const user = useSelector((state) => state.auth.user);
  useGetUser();
  return (
    <div className="">
      {user?.role ? <Navbar /> : <Header />}
      <section className="mr-0">
        <Carousel>
          <div>
            <Button className="px-4 md:px-12 md:py-3 py-1 mt-24  uppercase lg:rounded-md md:mt-48 hover:-translate-y-1 hover:scale-110  duration-300  lg:mt-96  absolute z-20 text-sm md:text-base   lg:text-lg font-bold tracking-wide  text-brightPurple font-poppins ml-4 md:ml-8 sm:flex-shrink-0 sm:w-auto  bg-yellowColor lg:ml-16">
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
          </div>
          <div>
            <Image src={slide} />
          </div>
        </Carousel>
      </section>
      <section className=" bg-grayColor lg:bg-featureColor -mt-12 ">
        <div className="max-w-screen-xl px-4 py-6 md:py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-0">
          <h2 className="flex justify-center md:mt-1 lg:mt-0 py-1 uppercase font-poppins font-bold text-xl md:text-3xl lg:text-4xl  ">
            Our Special<span className="text-orange-600 px-3 "> Features</span>
          </h2>
          <div className=" block w-full lg:flex">
            {featureCard.map((card, index) => {
              return (
                <Feature
                  key={index}
                  className="p-4 mx-2 my-1 pt-8 -mt-36 md:-mt-44 md:pt-12 lg:-mt-44 lg:pt-16 md:my-1 lg:my-0 lg:mx-6 border-2 block  try rounded-xl bg-grayColor lg:bg-grayColor"
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
          <ScrollMenu>
            <div className="flex pb-10 suggested">
              {merchantCard.map((item, index) => {
                return (
                  <SuggestedMerchant
                    key={index}
                    className="p-4 mx-3 mt-3 lg:mx-10 w-72 lg:w-72 border-2  lg:mt-10  shadow-md  rounded-lg  bg-white"
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
      <Items />
      <section>
        <div className="max-w-screen-xl md:pb-12 lg:pb-16 px-4 -mt-10 pt-0 pb-6 lg:mx-auto sm:px-6 lg:px-8 ">
          <Button className="px-4 md:px-12 md:py-3 py-1 mt-24  lg:rounded-md md:mt-56   lg:mt-96 right-10 md:right-20 lg:right-52 lg:px-40  absolute z-20 text-sm  lg:text-lg font-bold tracking-wide  text-white font-poppins ml-4 md:ml-8 sm:flex-shrink-0 sm:w-auto   bg-brightPurple lg:ml-16">
            <Link href={""}>Buy now</Link>
          </Button>
          <Link href={""}>
            <Image src={sneakers} />
          </Link>
        </div>
      </section>
      <Category />

      <BecomeAMerchant />
      <section>
        <div className="max-w-screen-xl px-4 py-10 lg:py-16 lg:mx-auto sm:px-6 lg:px-8">
          <Button className="px-4 md:px-12 md:py-3 py-1 mt-16 lg:rounded-md md:mt-40  lg:mt-64 right-10 lg:right-44 lg:px-44  absolute z-20 text-sm  lg:text-lg font-bold tracking-wide text-white font-poppins ml-4 md:ml-8 sm:flex-shrink-0 sm:w-auto   bg-lightYellow lg:ml-16">
            <Link href={""}>Buy now</Link>
          </Button>
          <Link href={""}>
            <Image src={ad} />
          </Link>
        </div>
      </section>
      <PopularMerchants />
      {/* <About /> */}
      <Newsletter />
      <MainFooter />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const res = await axios.get(
//     "http://34.199.115.184:8005/api/Category/getallcategories"
//   );
//   console.log(res.data);
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default LandingPage;
