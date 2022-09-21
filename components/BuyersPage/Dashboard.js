import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/img/banner.svg";
import lady from "../../public/img/lady.svg";
import edit from "../../public/img/edit.svg";
import caret from "../../public/img/caret.svg";

const Dashboard = () => {
  return (
    <>
      {/* first section --Welcome buyer */}
      <section className="flex flex-col-reverse bg-white rounded-lg px-10 py-2 items-center justify-between mt-10 shadow-sm  hover:shadow-md md:flex-row">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold">Hello, Kingsley</h2>
          <span>Welcome back!</span>
        </div>
        <div>
          <Image
            src={lady}
            className="w-20 rounded-full border-solid border-2 border-black-600"
            alt="profile-pics"
          />
        </div>
      </section>

      {/* Second Section--banner */}
      <section className="mt-4 text-center">
        <Image
          src={banner}
          className="rounded-md object-cover"
          height={280}
          alt="Banner"
        />
      </section>

      {/* Third Section--products*/}
      <section className="card mb-10">
        <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
          <div className="md:basis-1/2">
            <h2 className="text-left font-bold">Merchant Overview</h2>
            <div className="flex flex-col ">
              <div className="p-6 bg-white shadow-md">
                <h6 className="font-bold text-green-300">
                  Top Merchant Endorsed
                </h6>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Longshort Sneakers </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Veros Skincare products </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Close up toothpaste </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                </ul>
              </div>

              <div className="mt-8 mb-2 p-6 bg-white shadow-md">
                <h6 className="font-bold text-red-300">
                  Top Merchant Endorsed
                </h6>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Longshort Sneakers </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Veros Skincare products </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                  <li className="flex items-center text-sm justify-between cursor-pointer hover:text-gray-600">
                    <Link href="#"> Close up toothpaste </Link>
                    <Image src={caret} width={15} height={15} alt="profile" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:basis-1/2">
            <h2 className="text-left font-bold">Top Items Purchased</h2>
            <div className="p-2 bg-brightPurple text-white shadow-md rounded-md">
              <ul className="list-decimal mt-3 mb-1 ml-4 space-y-2">
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Longshort Sneakers </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm  cursor-pointer hover:text-gray-600">
                  <Link href="#"> Close up toothpaste </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Longshort Sneakers </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm  cursor-pointer hover:text-gray-600">
                  <Link href="#"> Close up toothpaste </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm  cursor-pointer hover:text-gray-600">
                  <Link href="#"> Close up toothpaste </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
                <li className="flex items-center text-sm cursor-pointer hover:text-gray-600">
                  <Link href="#"> Veros Skincare products </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* fourth Section--Acount Information */}
      <section className="card mb-10">
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

        <div className="ml-5 flex flex-col space-y-8 mt-5 md:flex-row md:space-y-0">
          <div className="md:basis-1/2">
            <h1 className="font-bold text-lg">Personal Information</h1>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-24 text-sm hover:text-gray-600">
                <h2 className="font-bold text-md">Name: </h2>
                <span>TemiTope Jefferey</span>
              </li>
              <li className="flex items-center text-sm space-x-24 hover:text-gray-600">
                <h2 className="font-bold text-md">Email: </h2>
                <span>temitopejeffery@mbox.com</span>
              </li>
              <li className="flex items-center text-sm space-x-12 hover:text-gray-600">
                <h2 className="font-bold text-md">Whatsap No: </h2>
                <span>+2347037347461</span>
              </li>
              <li className="flex items-center text-sm space-x-20 hover:text-gray-600">
                <h2 className="font-bold text-md">Address: </h2>
                <span>No 5, Idumota Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          <div className="md:basic-1/2">
            <h1 className="font-bold text-lg">Bank Information</h1>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-32 text-sm hover:text-gray-600">
                <h2 className="font-bold">Bank Name:</h2>
                <span>Access Bank</span>
              </li>
              <li className="flex items-center space-x-24 text-sm hover:text-gray-600">
                <h2 className="font-bold">Account Name: </h2>
                <span>TemiTope Jefferey</span>
              </li>
              <li className="flex items-center space-x-20 text-sm hover:text-gray-600">
                <h2 className="font-bold">Account Number: </h2>
                <span>00377899234</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
