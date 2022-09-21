import React from "react";
import logo3 from "../../public/images/logo3.png";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const MainFooter = () => {
  return (
    <footer className="footerbg">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="">
            <Image src={logo3} />
            <p className=" lg:max-w-xs text-sm text-gray-300 leading-relaxed">
              Mbox is Africa’s first digital market- place that allows SMEs
              create a digital version of their business without a website.{" "}
            </p>
            <div className="flex col-span-2 space-x-4 text-white pt-6 lg:col-span-5">
              {/* <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> linkedin </span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
            </div>
          </div>

          <div className=" grid grid-cols-2 lg:ml-64  gap-20 mt-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
            <div className="col-span-2  pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Mbox </p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  About
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Terms of use
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Privacy policy
                </a>
                <a className="inline-block" href="">
                  {" "}
                  How it works
                </a>
                <a className="inline-block" href="">
                  Contact us
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Support</p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  Customer care
                </a>
                <a className="inline-block" href="">
                  Quick chat
                </a>
                <a className="inline-block" href="">
                  FAQs
                </a>
                <a className="inline-block" href="">
                  Endorse Business
                </a>
              </nav>
            </div>

            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Contact</p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  WhatsApp
                </a>
                <a className="inline-block" href="">
                  Chatbot
                </a>
                <a className="inline-block" href="">
                  (234) 813 4567 876
                </a>
              </nav>
            </div>
            <div className="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
              <p className="font-bold text-white"> Social Media</p>

              <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
                <div className="flex">
                  <FaLinkedinIn />
                  <a className="inline-block pl-3" href="">
                    linkedin
                  </a>
                </div>
                <div className="flex">
                  <FaFacebookF />
                  <a className="inline-block pl-3" href="">
                    Facebook
                  </a>
                </div>
                <div className="flex">
                  <BsTwitter />
                  <a className="inline-block pl-3" href="">
                    Twitter
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 pb-8 ">
          <div className="">
            <p className="text-xs text-center text-gray-400  lg:ml-44">
              &copy; 2021 All copyright Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
