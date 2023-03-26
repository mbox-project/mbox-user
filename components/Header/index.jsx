import React from "react";
// import Button from "../Button";
import icon from "../../public/images/icon2.png";
import Image from "next/image";
import logo from "../../public/images/logo2.png";
import beforeyoureg from "../../public/images/beforeyoureg.png";
import Link from "next/link";
import Search from "../PagesLayout/Search";
import Button from "../Button";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";
import { GiBowTieRibbon } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  return (
    <header className="shadow-sm">
      <div className=" lg:px-20 p-4 mx-auto">
        <div className="flex ">
          <div className="hidden md:flex pl-10 mt-1  md:mt-0 md:pl-0 lg:pr-12">
            <Image src={logo} width="100px" height="50px" />
          </div>
          <div className="pl-10 mt-1 md:hidden  md:mt-0 md:pl-0 lg:pr-12">
            <Image src={logo} width="80px" height="40px" />
          </div>
          <Search />

          <div className="items-center  hidden pl-0 md:pl-12 space-x-4 md:flex">
            <div className="pl-8">
              <Image src={icon} width={30} height={30} />
            </div>
            <div className=" poppins pl-4 text-lightGray py-2 text-base font-semibold ">
              <Link href="/auth/login">Log In</Link>
            </div>
            <div className=" py-2 text-base poppins text-lightGray font-semibold">
              <Link href="/auth/register"> Sign up</Link>
            </div>
          </div>
          <div className="md:hidden absolute right-6 mt-1 h-20 ">
            <BsPerson size={40} />
          </div>

          {!isOpen && (
            <div className="md:hidden w-full h-full top-20 bg-grayColor z-20 absolute -right-0 ">
              <div className="flex py-4">
                <div className="px-4 ">
                  <Image src={beforeyoureg} width={50} height={50} />
                </div>
                <Button className="bg-brightRed  h-10 mt-2 py-2 px-12  font-poppins text-sm font-medium   text-white  ">
                  Login or Signup
                </Button>
              </div>
              <div className="pl-6">
                <div className="flex pt-12 ">
                  <BsCart3 />
                  <p className="pl-3 text-base font-extralight"> Order</p>
                </div>
                <div className="flex pt-12">
                  <div className="pt-0.5">
                    <BsHeart />
                  </div>
                  <p className="pl-3 text-base font-extralight">Saved Items</p>
                </div>
                <div className="flex pt-12">
                  <div className="pt-0.5">
                    <RiNotification4Line />
                  </div>
                  <p className="pl-3 text-base font-extralight">Notification</p>
                </div>
                <div className="flex pt-12">
                  <div className="pt-0.5">
                    <GiBowTieRibbon />
                  </div>
                  <p className="pl-3 text-base font-extralight">
                    Endorsed Bussiness
                  </p>
                </div>
                <div className="flex pt-12">
                  <div className="pt-0.5">
                    <TbSpeakerphone />
                  </div>
                  <p className="pl-3 text-base font-extralight">
                    Promote Bussiness
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="relative right-28 pr-4 top-4 md:hidden">
            <button
              className="  text-gray-600  rounded-lg"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
