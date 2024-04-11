import React from "react";
import logo3 from "../../public/images/logo3.png";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
  FaMailBulk,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerbg">
      <div className="w-full px-5 py-5 mx-auto sm:px-5 lg:px-16 text-sm md:text-base text-white">
        <div className="block md:flex justify-between pt-5">
          <div className="w-full md:w-3/12">
            <Image src={logo3} width={120} height={56} />
            <p className="py-2">
              Empowering businesses, simplifying transactions with maximum
              security.{" "}
            </p>
          </div>

          <div className="w-full md:w-7/12 grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-16 mt-8 lg:mt-0">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-lg"> Our Support </p>

              <nav className="flex flex-col my-4 space-y-2">
                <Link className="inline-block" href="about">
                  About
                </Link>
                <Link className="inline-block" href="">
                  Terms of use
                </Link>
                <Link className="inline-block" href="">
                  Privacy policy
                </Link>
                <Link className="inline-block" href="faq">
                  FAQs
                </Link>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold"> Social Media</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex gap-2 items-center">
                  <FaTiktok className="w-5 h-5" />
                  <Link className="inline-block" href="">
                    TikTok
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaFacebookSquare className="w-5 h-5" />
                  <Link className="inline-block" href="">
                    Facebook
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaInstagramSquare className="w-5 h-5" />
                  <Link className="inline-block" href="">
                    Instagram
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <BsTwitter className="w-5 h-5" />
                  <Link className="inline-block" href="">
                    Twitter
                  </Link>
                </div>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold"> Contact Us</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex gap-2 items-center">
                  <FaWhatsappSquare className="w-5 h-5" />
                  <Link className="inline-block" href="">
                    WhatsApp
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaMailBulk className="w-5 h-5" />
                  <Link
                    className="inline-block underline"
                    href="mailto:info@mbox.ng"
                  >
                    info@mbox.ng
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaPhoneSquare className="w-5 h-5" />
                  <Link
                    className="inline-block underline"
                    href="tel:+2348134567876"
                  >
                    (+234) 813 4567 876
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white">
        <div className="w-full py-4 border-t border-[#ABABAB]">
          <p className="text-base text-center">
            &copy; {currentYear} All Copyright Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
