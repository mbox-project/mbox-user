import React from "react";
import Image from "next/image";
import gift from "../../public/images/gift.png";
import men from "../../public/images/men.png";
import furniture from "../../public/images/furnIture.png";
import skincare from "../../public/images/skincare.png";
import watches from "../../public/images/watches.png";
import accessories from "../../public/images/accessories.png";
import food from "../../public/images/food.png";
import drinks from "../../public/images/drinks.png";
import crafts from "../../public/images/crafts.png";
import books from "../../public/images/book.png";
import automobile from "../../public/images/automobile.png";
import women from "../../public/images/women.png";
import phones from "../../public/images/phones.png";
import appliances from "../../public/images/appliances.png";
import estate from "../../public/images/estate.png";
import Link from "next/link";
import toys from "../../public/images/toys.png";
import elect from "../../public/images/elect.png";
import tools from "../../public/images/tools.png";
import decor from "../../public/images/decor.png";
const Category = () => {
  return (
    <section className="">
      <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
        <div className="w-full border-b-2 border-gray-200">
          <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-orange-600">
            Shop Items By
            <span className="text-orange-600 px-1">Category </span>
          </h4>
        </div>

        <div className="py-5 text-xs">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={phones} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Phones & Tablets
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={skincare} />
                  </Link>
                </div>
              </div>
              <Link href="categories" className="flex justify-center py-3">
                Beauty & Skincare
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={men} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Men&apos;s Fashion
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={women} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Women&apos;s Fashion
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={furniture} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Furniture
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={watches} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Watches
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={accessories} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Accessories
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={automobile} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                automobile
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={gift} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Gifts
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={elect} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Electronics
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={food} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Food
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={toys} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Kids & Toys
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={books} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Books & Stationery
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={decor} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Decor
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={drinks} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Drinks
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={crafts} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Art & Craft
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={appliances} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Appliances
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={estate} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Real Estates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
