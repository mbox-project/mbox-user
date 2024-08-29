import React from "react";
import logo3 from "../../public/images/logo3.png";
import newLogo from "../../public/img/marketbox.png";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
  FaMailBulk,
} from "react-icons/fa";
import { FaXTwitter, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerbg">
      <div className="w-full px-5 py-5 mx-auto sm:px-5 lg:px-16 text-sm md:text-base text-white">
        <div className="block md:flex justify-between pt-5">
          <div className="w-full md:w-3/12">
            {/* <Image src={logo3} width={120} height={56} /> */}
            <Image src={newLogo} width={200} height={50} />

            <p className="py-2">
              Empowering businesses, simplifying transactions with maximum
              security.{" "}
            </p>
          </div>

          <div className="w-full md:w-7/12 grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-y-16 mt-8 lg:mt-0">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-lg"> Our Support </p>

              <nav className="flex flex-col my-4 space-y-2">
                <Link className="inline-block" href="/prelaunch/about">
                  About
                </Link>
                <Link className="inline-block" href="/terms-of-use">
                  Terms of use
                </Link>
                <Link className="inline-block" href="/privacy-policy">
                  Privacy policy
                </Link>
                <Link className="inline-block" href="/faqs">
                  FAQs
                </Link>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              {/* col-span-2 sm: */}
              <p className="font-bold"> Social Media</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex gap-2 items-center">
                  <FaTiktok className="w-5 h-5" />
                  <Link
                    className="inline-block"
                    href="https://www.tiktok.com/@marketbox_ng?_t=8nVCuPSyIX0&_r=1"
                    target="_blank"
                  >
                    TikTok
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaFacebookSquare className="w-5 h-5" />
                  <Link className="inline-block" href="" target="_blank">
                    Facebook
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaInstagramSquare className="w-5 h-5" />
                  <Link
                    className="inline-block"
                    href="https://www.instagram.com/marketboxng?igsh=MXh1cmF5Njd2NnVkdw%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  {/* <FaXTwitter className="w-5 h-5" /> */}
                  <FaSquareXTwitter className="w-5 h-5" />
                  <Link
                    className="inline-block"
                    href="https://x.com/marketbox_ng?s=21&t=EnFc5W_6ynAToRaPg4J2hA"
                    target="_blank"
                  >
                    X (Twitter)
                  </Link>
                </div>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              {/* col-span-2 sm: */}
              <p className="font-bold"> Contact Us</p>

              <nav className="flex flex-col my-4 space-y-2">
                <div className="flex gap-2 items-center">
                  <FaWhatsappSquare className="w-5 h-5" />
                  <Link
                    className="inline-block"
                    href="https://wa.link/pteovt"
                    target="_blank"
                  >
                    WhatsApp
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaMailBulk className="w-5 h-5" />
                  <Link
                    className="inline-block underline"
                    href="mailto:info@Marketbox.ng"
                  >
                    info@Marketbox.ng
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FaPhoneSquare className="w-5 h-5" />
                  <Link
                    className="inline-block underline"
                    href="tel:+2347051784675"
                  >
                    (+234) 705 178 4675
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
