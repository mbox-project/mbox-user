import React from "react";
import Image from "next/image";
import Header from "../pages/prelaunch/Header";
import Button from "../components/Button";
import Step from "../public/images/step.png";
import Benefit from "../public/images/benefit.png";
import Marketbox from "../public/images/marketbox.png";
import Partner from "../public/images/partner.png";
import Offer from "../public/images/offer.png";
import Growth from "../public/images/growth.png";
import Team from "../public/images/team.png";
import MainFooter from "../components/MainFooter";

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
                        NOTIFY ME
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

// import React from "react";
// import Header from "../components/Header";
// import Navbar from "../components/PagesLayout/Navbar";
// import NavTag from "../components/PagesLayout/NavTag";
// import Banner from "../components/Banner";
// import Category from "../components/Category";
// import NewArrivals from "../components/NewArrivals";
// import GettingStarted from "../components/GettingStarted";
// import Feature from "../components/Feature";
// import SuggestedMerchant from "../components/SuggestedMerchant";
// import PopularMerchants from "../components/PopularMerchants";
// import Newsletter from "../components/Newsletter";
// import MainFooter from "../components/MainFooter";
// import Image from "next/image";
// import Link from "next/link";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";
// import { useSelector } from "react-redux";
// import useGetUser from "../hooks/useGetUser";

// import iconOne from "/public/images/featureicon1.PNG";
// import iconTwo from "/public/images/featureicon2.png";
// import iconThree from "/public/images/featureicon3.png";
// import banner1 from "/public/images/banner1.png";
// import banner2 from "/public/images/banner2.png";
// import mobilebanner1 from "/public/images/mobile-banner1.png";
// import mobilebanner2 from "/public/images/mobile-banner2.png";
// import banner2mobile from "/public/images/banner2-mobile.png";
// import banner3 from "/public/images/banner3.png";
// import banner4 from "/public/images/banner4.png";

// const featureCard = [
//   {
//     id: 1,
//     name: "Invoicing Service",
//     body: "Create invoices and let buyers pay you.",
//     icon: iconOne,
//   },
//   {
//     id: 2,
//     name: "Escrow Policy",
//     body: "Stay protected with our escrow feature to buy and sell safely",
//     icon: iconTwo,
//   },
//   {
//     id: 3,
//     name: "Reviews & Ratings",
//     body: "Elevate your brands with positive feedback from buyers.",
//     icon: iconThree,
//   },
// ];

// let merchantCard = [
//   {
//     id: 1,
//     name: "Giveon’s Crib",
//     categories: "Fashion",
//     count: "3.5k",
//   },
//   {
//     id: 2,
//     name: "Giveon’s Crib",
//     categories: "Fashion",
//     count: "3.5k",
//   },
//   {
//     id: 3,
//     name: "Giveon’s Crib",
//     categories: "Fashion",
//     count: "3.5k",
//   },
//   {
//     id: 4,
//     name: "Giveon’s Crib",
//     categories: "Fashion",
//     count: "3.5k",
//   },
// ];

// const LandingPage = () => {
//   const user = useSelector((state) => state.auth.user);
//   //useGetUser();
//   return (

//     <main>
//       <header>
//         <div>{user?.userId ? <Navbar /> : <Header />}</div>
//         <div className="px-4 md:px-16">
//           <NavTag />
//         </div>
//       </header>

//       <section className="px-4 md:px-16 py-10">
//         <Banner />
//       </section>

//       <section className="px-4 md:px-16">
//         <div>
//           <GettingStarted />
//         </div>
//         <div>
//           <NewArrivals />
//         </div>

//         <section>
//           <div className="w-full text-[#444444] text-center">
//             <div className="">
//               <h2 className="flex justify-center text-nowrap font-medium pb-5 text-base md:text-xl">
//                 AWESOME SERVICES FOR
//                 <span className="text-[#EF5612] px-1">YOU</span>
//               </h2>
//             </div>

//             <div>
//               <div className="block w-full lg:flex justify-between">
//                 {featureCard.map((card, index) => {
//                   return (
//                     <Feature
//                       key={index}
//                       header={card.name}
//                       body={card.body}
//                       icon={card.icon}
//                     />
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="block md:flex w-full text-sm mt-10 justify-center pt-5 gap-5 space-y-[32px] md:space-y-0">
//               <button className="h-12 w-full md:w-auto px-5 border-2 rounded-lg text-[#EF5612] border-[#EF5612]">
//                 Sign up with us
//               </button>
//               <button className="h-12 w-full md:w-auto px-5 rounded-lg text-white bg-[#EF5612]">
//                 Login to your account
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className="">
//           <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
//             <div className="flex justify-between w-full border-b-2 border-gray-200">
//               <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-[#EF5612]">
//                 Suggested
//                 <span className="text-[#EF5612] px-1">Top Vendors </span>
//               </h4>

//               <div className="text-xs md:text-sm text-nowrap p-2">
//                 <a href="#">View All &gt;&gt;</a>
//               </div>
//             </div>

//             <ScrollMenu>
//               <div className="flex suggested">
//                 {merchantCard.map((item, index) => {
//                   return (
//                     <SuggestedMerchant
//                       key={index}
//                       className="p-4 mx-3 my-3 w-72 lg:w-72 border-2  lg:my-10 shadow-md rounded-lg"
//                       header={item.name}
//                       body={item.count}
//                       categories={item.categories}
//                       button="View Store"
//                     />
//                   );
//                 })}
//               </div>
//             </ScrollMenu>
//           </div>
//         </section>

//         <div className="static py-2 md:py-10">
//           <div className="md:flex w=full h-full rounded-xl bg-[#FFF7ED]">
//             <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
//               <div className="flex flex-col gap-3 justify-around md:px-10 px-2">
//                 <h1 className="text-[20px] md:text-[40px] text-[#491546] py-3 font-medium">
//                   ENDORSE <br />
//                   <span className="text-[#EF5612]">BUSINESSES 👇</span>
//                 </h1>
//                 <p className="text-[12px] md:text-[18px] text-[#444444] py-2">
//                   Express your support for friends business by endorsing their
//                   business on <span className="text-[#EF5612]">Mbox </span> .
//                 </p>
//                 <p className="text-[14px] md:text-[20px]">
//                   WE RISE BY LIFTING OTHERS !!!
//                 </p>
//                 <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#EF5612] text-[] md:text-[20px] text-white">
//                   Endorse Businesses
//                 </button>
//               </div>
//             </div>
//             <div className="w-full md:flex hidden justify-end md:w-1/2 h-1/2 md:h-auto">
//               <Image src={banner2} alt="ad" />
//             </div>
//             <div className="w-full flex md:hidden justify-end md:w-1/2 h-1/2 md:h-auto">
//               <Image src={banner2mobile} alt="ad" />
//             </div>
//           </div>
//         </div>

//         <div>
//           <Category />
//         </div>

//         <div className="static hidden md:block text-[#444444] pb-2 md:py-16">
//           <div className="md:flex w=full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner3bg.png')]">
//             <div className="w-full md:w-1/2 h-1/2 md:h-auto">
//               <Image src={banner3} alt="ad" />
//             </div>

//             <div className="flex justify-end w-full md:w-1/2 h-1/2 md:h-auto p-5">
//               <div className="flex flex-col justify-around px-5 text-left md:text-right">
//                 <h1 className="md:text-[48px] text-[] py-3 font-medium">
//                   Giveon’s Crib 50% off
//                 </h1>
//                 <p className="text-[] md:text-[36px] py-2">
//                   2nd - 31st December <br />
//                   <p className="text-base py-5">
//                     Enjoy discount on all our products
//                   </p>
//                 </p>
//                 <div className=" justify-end">
//                   <button className="w-fit justify-self-end p-2 px-5 my-3 rounded-lg bg-[#491546] text-[20px] text-white">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* mobile banner */}
//         <div className="relative md:hidden flex justify-center text-[#444444] py-8">
//           <Image
//             src={mobilebanner1}
//             alt="ad"
//             className="w-full min-w-full mx-auto"
//           />
//           <div className="absolute w-max bottom-12">
//             <div className="flex flex-col justify-around max-w-[300px]">
//               <h1 className="text-[32px] py-3 font-medium">
//                 Giveon’s Crib 50% off
//               </h1>
//               <p className="text-[18px] py-2">
//                 2nd - 31st December
//                 <p className="text-[14px] py-5">
//                   Enjoy discount on all our products
//                 </p>
//               </p>
//               <button className="w-fit justify-self-end p-2 px-5 my-3 rounded-lg bg-[#491546] text-[20px] text-white">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>

//         <div>
//           <PopularMerchants />
//         </div>

//         <div className="static hidden md:block text-[#444444] pb-2 md:py-16">
//           <div className="md:flex w=full h-full rounded-xl bg-no-repeat bg-cover bg-center bg-[url('../public/images/banner4bg.png')]">
//             <div className="flex w-full md:w-1/2 h-1/2 md:h-auto p-5">
//               <div className="flex flex-col justify-around px-5">
//                 <h1 className="text-[] md:text-[48px] py-3 font-medium">
//                   Giveon’s Crib 50% off
//                 </h1>
//                 <p className="text-[] md:text-[36px] py-2">
//                   2nd - 31st December
//                   <p className="text-base py-5">
//                     Enjoy discount on all our products
//                   </p>
//                 </p>
//                 <button className="w-fit p-2 px-5 my-3 rounded-lg bg-[#EF5612] text-[] md:text-[20px] text-white">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//             <div className="w-full flex justify-end md:w-1/2 h-1/2 md:h-auto">
//               <Image src={banner4} alt="ad" />
//             </div>
//           </div>
//         </div>
//         {/* mobile banner */}
//         <div className="relative md:hidden flex justify-center text-[#444444] py-8">
//           <Image
//             src={mobilebanner2}
//             alt="ad"
//             className="w-full min-w-full mx-auto"
//           />
//           <div className="absolute w-max bottom-12">
//             <div className="flex flex-col justify-around max-w-[300px]">
//               <h1 className="text-[32px] py-3 font-medium">
//                 Giveon’s Crib 50% off
//               </h1>
//               <p className="text-[18px] py-2">
//                 2nd - 31st December
//                 <p className="text-[14px] py-5">
//                   Enjoy discount on all our products
//                 </p>
//               </p>
//               <button className="w-fit p-2 px-12 my-3 rounded-lg bg-[#EF5612] text-[] md:text-[20px] text-white">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div>
//           <Newsletter />
//         </div>
//         <div>
//           <MainFooter />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LandingPage;
