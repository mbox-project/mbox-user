import React from "react";
import Link from "next/link";
const Items = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className=" mt-3 lg:mt-1">
          <h2 className="font-bold text-2xl pb-4  block md:flex md:justify-center lg:block">
            Find <span className="text-orange-600 px-2 lg:px-0">Items</span>{" "}
            Fast
          </h2>
        </div>
        <hr></hr>
        <div className=" block  md:grid grid-cols-2 gap-8  md:mt-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
          <div className="  pt-6 col-span-1 md: ">
            <div className="flex flex-col md:ml-11  mt-6 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <a className="inline-block">Laptops & Desktop</a>
              <Link href={""}>
                <a className="inline-block" href="">
                  Camera & Lenses
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  TV & Home theatre
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Necklace & Wristwatches
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  T-Shirts and Trousers
                </a>
              </Link>
            </div>
          </div>

          <div className="col-span-2 pt-6 border-t md:border-none lg:border-t sm:col-span-1 ">
            <div className="flex flex-col mt-6 md:ml-11 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <Link href={""}>
                <a className="inline-block" href="">
                  Headphones
                </a>
              </Link>
              <a className="inline-block" href="">
                Cars and Accessories
              </a>
              <Link href={""}>
                <a className="inline-block" href="">
                  Chairs & Tables
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Necklace & Wristwatches
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  T-Shirts and Trousers
                </a>
              </Link>
            </div>
          </div>

          <div className="col-span-2 pt-6 border-t sm:col-span-1">
            <div className="flex flex-col md:ml-11 mt-6 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <Link href={""}>
                <a className="inline-block" href="">
                  Rugs & Carpet
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Xbox & Console
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Notebooks
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Throw pillows
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Purse
                </a>
              </Link>
            </div>
          </div>

          <div className="col-span-2 pt-6 border-t sm:col-span-1">
            <div className="flex flex-col  md:ml-11 mt-6 space-y-7 text-sm md:text-xl lg:text-sm  ">
              <Link href={""}>
                <a className="inline-block" href="">
                  Headphones
                </a>
              </Link>

              <Link href={""}>
                <a className="inline-block" href="">
                  Cars and Accessories
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Chairs & Tables
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  Necklace & Wristwatches
                </a>
              </Link>
              <Link href={""}>
                <a className="inline-block" href="">
                  T-Shirts and Trousers
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Items;
