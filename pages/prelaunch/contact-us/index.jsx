import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo1.png";
import Telephone from "../../../public/images/telephone.png";
import MainFooter from "../../../components/MainFooter";
import Label from "../../../components/Label";
import Link from "next/link";

const ContactUs = () => {
  return (
    <main className="">
      <section>
        <div className="font-poppins text-[#FAFAFA]">
          <header className="h-auto md:h-screen w-full bg-[url('../public/images/headerbg.png')] bg-contain md:bg-cover md:bg-center">
            <div className="h-auto md:h-screen w-full bg-[#070207] bg-opacity-60">
              <nav className="flex flex-row justify-between p-2 md:p-10 w-full h-auto">
                <div className="p-2 md:p-5">
                  <Link href="/">
                    <Image src={Logo} alt="logo" width={140} height={20} />
                  </Link>
                </div>
                <div className="flex p-2 md:p-5 gap-5 text-xs md:text-base">
                  <Link href="/prelaunch/about">ABOUT US</Link>
                  <Link href="">CONTACT US</Link>
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
                  Get in touch with us
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section>
        <div className="flex flex-col text-[#444444] font-poppins px-10 py-5 md:py-16">
          <div className="flex flex-col py-10">
            <h2 className=" text-3xl font-semibold py-5">Reach out to us</h2>
            <p className="text-lg">
              Got any question to ask Mbox? Have a suggestion or support or Just
              want to say HI? Get through to us using the form below.
            </p>
          </div>

          <div className="flex flex-col md:flex-row py-5">
            <div className="w-5/12 pr-0 md:pr-10">
              <Image src={Telephone} />
            </div>

            <div className="w-7/12">
              <form className="">
                <div className="pb-2">
                  <Label
                    className="w-full pb-1 text-base text-[#9A9A9A]"
                    htmlFor="text"
                    title="Full Name *"
                  />
                  <input
                    type="text"
                    placeholder="e.g Taylor Mason"
                    className="!w-full p-1 md:p-2 lg:py-2.5  focus:outline-none text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    required
                  />
                </div>

                <div className="py-2">
                  <Label
                    className="w-full pb-1 text-base text-[#9A9A9A]"
                    htmlFor="email"
                    title="Email *"
                  />
                  <input
                    type="email"
                    placeholder="e.g taylormason@gmail.com"
                    className="!w-full p-1 md:p-2 lg:py-2.5  focus:outline-none text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    required
                  />
                </div>

                <div className="py-2">
                  <Label
                    className="w-full pb-1 text-base text-[#9A9A9A]"
                    htmlFor="number"
                    title="Phone Number *"
                  />
                  <input
                    type="number"
                    placeholder="(+234) 81 5657 8901"
                    className="!w-full p-1 md:p-2 lg:py-2.5  focus:outline-none text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    required
                  />
                </div>

                <div className="py-2">
                  <Label
                    className="w-full pb-1 text-base text-[#9A9A9A]"
                    htmlFor="text"
                    title="Message *"
                  />

                  <textarea
                    type="text"
                    placeholder="Type your message here..."
                    className="!w-full h-44 p-1 md:p-2 lg:py-2.5  focus:outline-none text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    required
                  />
                </div>
              </form>

              <div className="flex justify-end pt-5">
                <button className="h-12 w-auto px-5 rounded-md text-white bg-[#EF5612]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>

      <section>
        <MainFooter />
      </section>
    </main>
  );
};
export default ContactUs;
