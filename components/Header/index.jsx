import React from "react";
// import Button from "../Button";
import icon from "../../public/images/icon2.png";
import Image from "next/image";
import logo from "../../public/images/logo2.png";
import Link from "next/link";
import Search from "../PagesLayout/Search";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-sm">
      <div className=" lg:px-20 p-4 mx-auto">
        <div className="flex ">
          <div className=" lg:pr-12">
            <Image src={logo} width="100px" height="50px" />
          </div>
          <Search />

          {/* <div className="flex lg:w-0 lg:flex-1   ">
            <input className="w-full h-10 bg-gray-200 lg:-ml-48  rounded-lg" />
          </div>
          <div className="flex lg:w-0 ">
            <Button className="px-5 py-2 text-sm font-medium text-white lg:-ml-44 bg-orange-600 rounded-lg">
              Search
            </Button>
          </div> */}
          <div className="items-center justify-end hidden pl-12 space-x-4 md:flex">
            <Image src={icon} width="20px" height="20px" />
            <div className="px-5 font-poppins py-2 text-base font-medium ">
              <Link href="/auth/login">Log in</Link>
            </div>
            <div className="px-5 py-2 text-sm font-medium  ">
              <Link href="/auth/register">Sign up</Link>
            </div>
          </div>
          {!isOpen && (
            <div className=" w-full -right-0 absolute flex flex-col text-center bg-orange-600  py-5 px-6 mt-20 z-20  text-white md:hidden">
              <Link href="/auth/login" className=" py-2   text-md font-medium ">
                Log in
              </Link>

              <Link className="  text-md  font-medium  " href="/auth/register">
                Sign up
              </Link>
            </div>
          )}
          <div className="md:hidden">
            <button
              className=" text-gray-600  rounded-lg"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
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
