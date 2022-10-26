import React from "react";
import Image from "next/image";
import Link from "next/Link";
import bgimage from "../../public/img/bgimg1.svg";
import Logo from "../../public/images/logo3.png";

const PreLaunchHeader = () => {
  return (
    <div className="font-poppins text-white">
      <header
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <div className=" bg-black bg-opacity-60">
          <nav className="flex flex-row justify-between p-10 w-full h-auto">
            <div>
              <Image src={Logo} alt="logo" width="100px" height="50px" />
            </div>
            <div className="flex m-5 gap-5 sm:text-xs lg:text-lg">
              <Link href="#">ABOUT US</Link>
              <Link href="#">CONTACT US</Link>
            </div>
          </nav>
          <div className="flex flex-col">
            <h1 className=" self-center font-black lg:text-8xl sm:text-5xl p-10 m-5">
              COMING SOON
            </h1>
            <h3 className="self-center lg:text-3xl sm:text-xl w-fit m-5 p-3 bg-white bg-opacity-10 rounded-md">
              THE POCKET-SIZED MARKETPLACE
            </h3>
          </div>
          <div className="flex justify-center my-10">
            <button className="w-fit h-auto m-10 mt-20 px-10 py-3 bg-orange-600 rounded-lg">
              Pre-Register
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default PreLaunchHeader;
