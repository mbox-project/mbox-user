import React from "react";
import Image from "next/image";
import gift from "../../public/images/giftitem.png";
import men from "../../public/images/mensfashion.png";
import furniture from "../../public/images/furniture.png";
import skincare from "../../public/images/skincare.png";
import food from "../../public/images/food.png";
import drinks from "../../public/images/drinks.png";
import crafts from "../../public/images/crafts.png";
import books from "../../public/images/book.png";
import automobile from "../../public/images/automobile.png";
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
      <div className="lg:flex ">
        <div className="max-w-screen-xl px-4 py-4 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h4 className=" text-lg lg:text-xl abouttext  flex justify-center lg:tracking-wider">
              Shop Items By <span className="text-orange-600 px-1">Category </span>
            </h4>
          </div>
          <div className="mx-auto grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
            <div className="col-span-2 pt-6  sm:col-span-1 ">
              <div className="flex flex-col mt-6 space-y-7 text-sm ">
                <div>
                  <Image src={gift} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Gift Items</a>
                  </Link>
                </div>

                <div>
                  <Image src={men} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Mens Fashion</a>
                  </Link>
                </div>
                <div>
                  <Image src={furniture} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Furniture</a>
                  </Link>
                </div>
                <div>
                  <Image src={skincare} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Skin care & body</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2 pt-6  sm:col-span-1 ">
              <div className="flex flex-col mt-6 space-y-7 text-sm ">
                <div>
                  <Image src={food} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Food</a>
                  </Link>
                </div>
                <div>
                  <Image src={womenfashion} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Womens Fashion</a>
                  </Link>
                </div>
                <div>
                  <Image src={drinks} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Drinks & L1quor</a>
                  </Link>
                </div>
                <div>
                  <Image src={automobile} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Automobile</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2 pt-6  sm:col-span-1">
              <div className="flex flex-col mt-6 space-y-7 text-sm ">
                <div>
                  <Image src={phones} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Phones & Tablets</a>
                  </Link>
                </div>
                <div>
                  <Image src={books} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">
                      Books & Stationery
                    </a>
                  </Link>
                </div>
                <div>
                  <Image src={crafts} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Arts & Crafts</a>
                  </Link>
                </div>
                <div>
                  <Image src={estate} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Real Estate</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2 pt-6  sm:col-span-1">
              <div className="flex flex-col mt-6 space-y-7 text-sm ">
                <div>
                  <Image src={toys} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Toys & Kids</a>
                  </Link>
                </div>

                <div>
                  <Image src={elect} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">ELectronics</a>
                  </Link>
                </div>
                <div>
                  <Image src={tools} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">
                      Home / Kitchen Appliances
                    </a>
                  </Link>
                </div>
                <div>
                  <Image src={decor} />
                  <Link href={""}>
                    <a className="flex justify-center py-3">Decor</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
