import React from "react";
import Button from "../Button";
import icon from "../../public/images/icon2.png";
import Image from "next/image";
import logo from "../../public/images/logo2.png";

import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="shadow-sm">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-0">
          <div className="flex lg:w-0 lg:flex-1">
            <Image src={logo} width="100px" height="50px" />
          </div>

          <div className="flex lg:w-0 lg:flex-1   ">
            <input className="w-full h-10 bg-gray-200 lg:-ml-48  rounded-lg" />
          </div>
          <div className="flex lg:w-0 ">
            <Button className="px-5 py-2 text-sm font-medium text-white lg:-ml-44 bg-orange-600 rounded-lg">
              Search
            </Button>
          </div>
          <div
            className={
              "items-center justify-end flex-1 hidden space-x-4 sm:flex" +
              (menuOpen ? " flex" : " hidden")
            }
          >
            <Image src={icon} width="20px" height="20px" />
            <Link href="/auth/login" className="px-5 py-2 text-sm font-medium ">
              Log in
            </Link>

            <Link
              className="px-5 py-2 text-sm font-medium  "
              href="/auth/register"
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
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