import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/img/banner.png";
import emoji from "../../public/img/smiling-emoji-orange.png";
import lady from "../../public/img/lady.svg";
import edit from "../../public/img/edit.svg";
import caret from "../../public/img/caret.svg";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const userName = user?.username?.split(" ")[0] || "";
  return (
    <section className="flex flex-col gap-12">
      {/* first section --Welcome buyer */}
      <section className="flex flex-col-reverse bg-white rounded-lg px-10 py-2 items-center justify-between mt-10 shadow-sm  hover:shadow-md md:flex-row">
        <div className="flex flex-col space-y-2 text-center sm:text-start">
          <h2 className="text-3xl font-bold">Hello, {userName || ""}</h2>
          <span>Welcome back!</span>
        </div>
        <div>
          <Image
            src={emoji}
            height={80}
            width={80}
            className=" rounded-full size-[80px] border-solid border-2 border-black-600"
            alt="emoji"
          />
        </div>
      </section>

      {/* Second Section--products*/}
      <section className="card">
        <div className="flex flex-col p-6 gap-8">
          <h2 className="text-left text-[28px] font-semibold">
            Merchant Overview
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-8 flex-1">
              <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#F0FAF7] rounded-md">
                <h6 className="font-medium text-[#26A17B] text-[20px]">
                  Top Merchant Endorsed
                </h6>
                <ul className="flex flex-col divide-y-2">
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Longshort Sneakers </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Veros Skincare products </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Close up toothpaste </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                </ul>
              </div>

              <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#FFF4EF] rounded-md">
                <h6 className="font-medium text-[#F90808] text-[20px]">
                  Top Merchant Reported
                </h6>
                <ul className="flex flex-col divide-y-2">
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Longshort Sneakers </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Veros Skincare products </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Close up toothpaste </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Top Items purchased */}
            <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#FFF3FE] rounded-md flex-1">
              <h6 className="font-medium text-[#444444] text-[20px]">
                Top Items purchased
              </h6>
              <ul className="flex flex-col divide-y-2">
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Longshort Sneakers </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
                <li className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600">
                  <Link href="#"> Close up toothpaste </Link>
                  <Image src={caret} width={15} height={15} alt="profile" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* third Section--Acount Information */}
      <section className="card">
        <div className="flex justify-between shadow-sm p-6">
          <h1 className="font-bold text-2xl">Account Details</h1>
          <Image
            src={edit}
            className="cursor-pointer"
            width={25}
            height={25}
            alt="Edit Info"
          />
        </div>

        <div className="p-6 flex flex-col gap-y-8 lg:flex-row">
          {/* Personal Information Section */}
          <div className="md:basis-1/2">
            <h1 className="font-bold text-lg mb-4">Personal Information</h1>
            <ul className="space-y-4">
              {[
                { label: "Name", value: user?.fullname },
                { label: "Email", value: user?.email },
                {
                  label: "WhatsApp No",
                  value: user?.phoneNumber || "Not Provided",
                },
                { label: "Address", value: "No 5, Idumota Lagos, Nigeria" },
              ].map(({ label, value }) => (
                <li
                  key={label}
                  className="flex sm:items-center text-sm space-x-2 sm:space-x-4"
                >
                  <h2 className="font-bold text-md">{label}:</h2>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bank Information Section */}
          <div className="md:basis-1/2">
            <h1 className="font-bold text-lg mb-4">Bank Information</h1>
            <ul className="space-y-4">
              {[
                { label: "Bank Name", value: "Not Provided" },
                { label: "Account Name", value: "Not Provided" },
                { label: "Account Number", value: "Not Provided" },
              ].map(({ label, value }) => (
                <li
                  key={label}
                  className="flex sm:items-center text-sm space-x-2 sm:space-x-4"
                >
                  <h2 className="font-bold text-md">{label}:</h2>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
