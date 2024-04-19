import React from "react";
import logo1 from "../../public/images/logo1.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const MainFooter = () => {
  return (
    <footer className="footerbg">
      <div className="w-full px-5 py-5 mx-auto sm:px-5 lg:px-16 text-sm md:text-base text-white">
        <div className="block md:flex justify-between pt-5">
          <div className="w-full md:w-3/12">
            <Image src={logo1} width={140} height={26} />
            <p className="py-2">
              Empowering businesses, simplifying transactions with maximum
              security.{" "}
            </p>
          </div>

          <div className="w-full md:w-7/12 grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-16 mt-8 lg:mt-0">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-lg"> Our Support </p>

              <nav className="flex flex-col my-4 space-y-2">
                <a className="inline-block" href="">
                  About
                </a>
                <a className="inline-block" href="">
                  Terms of use
                </a>
                <a className="inline-block" href="">
                  Privacy policy
                </a>
                <a className="inline-block" href="">
                  FAQs
                </a>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold"> Social Media</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex">
                  <FaLinkedin />
                  <a className="inline-block pl-3" href="">
                    linkedin
                  </a>
                </div>
                <div className="flex">
                  <FaFacebookSquare />
                  <a className="inline-block pl-3" href="">
                    Facebook
                  </a>
                </div>
                <div className="flex">
                  <FaInstagramSquare />
                  <a className="inline-block pl-3" href="">
                    Instagram
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

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold"> Contact Us</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex">
                  <FaWhatsappSquare />
                  <a className="inline-block pl-3" href="">
                    WhatsApp
                  </a>
                </div>
                <div className="flex">
                  <FaMailBulk />
                  <a className="inline-block pl-3 underline" href="">
                    info@mbox.ng
                  </a>
                </div>
                <div className="flex">
                  <FaPhoneSquare />
                  <a className="inline-block pl-3 underline" href="">
                    (+234) 813 4567 876
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white">
        <div className="w-full py-4 border-t border-[#ABABAB]">
          <p className="text-base text-center">
            &copy; 2024 All copyright Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
