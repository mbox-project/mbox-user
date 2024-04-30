import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo1.png";
import newLogo from "../../public/img/marketbox.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="font-poppins text-[#FAFAFA]">
      <header className="h-auto md:h-screen w-full bg-[url('../public/images/headerbg.png')] bg-contain md:bg-cover md:bg-center">
        <div className="h-auto md:h-screen w-full bg-[#070207] bg-opacity-60">
          <nav className="flex flex-row justify-between p-2 md:p-10 w-full h-auto">
            <div className="p-2 md:p-5">
              <Link href="">
                <Image src={Logo} alt="logo" width={140} height={20} />
              </Link>
            </div>
            <div className="flex p-2 md:p-5 gap-5 text-xs md:text-base">
              <Link href="/prelaunch/about">ABOUT US</Link>
              <Link href="/prelaunch/contact-us">CONTACT US</Link>
            </div>
          </nav>
          <div className="flex flex-col text-center">
            <h1 className="self-center font-black lg:text-8xl text-4xl py-2 md:py-10">
              COMING SOON
            </h1>
            <h3 className="self-center md:text-3xl text-sm w-fit p-1 md:p-3 mt-0 md:mt-10 bg-[#FAFAFA] bg-opacity-10 rounded-md">
              THE POCKET-SIZED MARKETPLACE
            </h3>
          </div>
          <div className="flex justify-center text-sm md:text-base font-semibold gap-5 py-3 md:pt-28">
            <button
              onClick={() => router.push("/auth/register")}
              className="w-32 h-auto p-1 md:p-3 bg-[#EF5612] rounded-lg"
            >
              Pre-Register
            </button>

            <button
              onClick={() => router.push("/auth/login")}
              className="w-32 h-auto p-1 md:p-3 bg-[#EF5612] rounded-lg"
            >
              Log-In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
