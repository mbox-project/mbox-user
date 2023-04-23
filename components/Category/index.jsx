import React from "react";
import Image from "next/image";
import gift from "../../public/images/giftitem.png";
import men from "../../public/images/mensfashion.png";
import furniture from "../../public/images/furnIture.png";
import skincare from "../../public/images/skincare.png";
import food from "../../public/images/food.png";
import drinks from "../../public/images/drinks.png";
import crafts from "../../public/images/crafts.png";
import books from "../../public/images/book.png";
import automobile from "../../public/images/automobILe.png";
import womenfashion from "../../public/images/womenfashion.png";
import phones from "../../public/images/phones.png";
import estate from "../../public/images/estate.png";
import Link from "next/link";
import toys from "../../public/images/toys.png";
import elect from "../../public/images/elect.png";
import tools from "../../public/images/tools.png";
import decor from "../../public/images/decor.png";
const Category = () => {
  return (
    <section className="aboutbg">
      <div className="max-w-screen-xl px-4 py-10 lg:py-16 mx-auto sm:px-6 lg:px-8">
        <div className="">
          <h4 className=" text-lg md:text-2xl  lg:text-xl abouttext  flex justify-center lg:tracking-wider">
            Shop Items By{" "}
            <span className="text-orange-600 px-1">Category </span>
          </h4>
        </div>
        <div className=" grid grid-cols-2 lg:gap-4 mt-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
          <div className="col-span-2 pt-6  sm:col-span-1 ">
            <div className=" mt-6 space-y-7 text-sm md:text-xl lg:text-sm ">
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={gift} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Gift Items
                </Link>
              </div>

              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href="categories">
                    <Image src={men} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Mens Fashion
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href="categories">
                    <Image src={furniture} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Furniture
                </Link>
              </div>
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={skincare} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Skin care & body
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 pt-6  sm:col-span-1 ">
            <div className="flex flex-col mt-6 space-y-7 text-sm md:text-xl lg:text-sm ">
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={food} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Food
                </Link>
              </div>
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={womenfashion} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Womens Fashion
                </Link>
              </div>
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={drinks} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Drinks & L1quor
                </Link>
              </div>
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href="categories">
                    <Image src={automobile} />
                  </Link>
                </div>
                <Link href="categories" className="flex justify-center py-3">
                  Automobile
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 pt-6  sm:col-span-1">
            <div className="flex flex-col mt-6 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <div>
                <div className=" ml-12 md:ml-14 hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={phones} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Phones & Tablets
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={books} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Books & Stationery
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={crafts} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Arts & Crafts
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={estate} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Real Estate
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 pt-6  sm:col-span-1">
            <div className="flex flex-col mt-6 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={toys} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Toys & Kids
                </Link>
              </div>

              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={elect} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  ELectronics
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={tools} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Home / Kitchen Appliances
                </Link>
              </div>
              <div>
                <div className="hover:-translate-y-1 hover:scale-110  duration-300 ml-12 md:ml-14">
                  <Link href={""}>
                    <Image src={decor} />
                  </Link>
                </div>
                <Link href={""} className="flex justify-center py-3">
                  Decor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
