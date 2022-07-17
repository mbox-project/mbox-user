import Link from "next/link";
import React from "react";
const PopularMerchants = () => {
  return (
    <section>
      <div className="max-w-screen-xl  px-4 py-6 mx-auto sm:px-6 lg:px-0">
        <div className="">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className=" md:m-6 lg:m-0">
              <h2 className="text-xl lg:text-2xl font-bold mt-0 m md:mt-4 lg:mt-16 ">
                Popular <span className="text-orange-600">Merchants</span>
              </h2>
            </div>
            <div className=" block md:grid grid-cols-2 gap-20 mt-8 lg:mt-5 lg:grid-cols-3 lg:gap-y-16">
              <div className="bg-card pt-7 md:pt-0 bg-cover h-64 ">
                <Link href={""}>
                  <div className="bg-white  text-center hover:-translate-y-1 hover:scale-110  duration-300 h-34 w-48 p-4  md:my-7 mx-auto ">
                    <h4 className="text-md font-bold pt-2   ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-card bg-cover pt-2 mt-4 md:mt-0 md:pt-0 h-64 ">
                <Link href={""}>
                  <div className="bg-white text-center hover:-translate-y-1 hover:scale-110  duration-300 h-34 w-48 p-4  my-7 mx-auto ">
                    <h4 className="text-md font-bold pt-2 ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-card bg-cover  h-64 invisible lg:visible ">
                <Link href={""}>
                  <div className="bg-white text-center hover:-translate-y-1 hover:scale-110  duration-300 h-34 w-48 p-4  my-7 mx-auto ">
                    <h4 className="text-md font-bold pt-2 ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" block md:grid grid-cols-2 gap-20  -mt-64 lg:mt-5 lg:grid-cols-3 lg:gap-y-16">
              <div className="bg-card bg-cover pt-2 mt-4 md:mt-0 md:pt-0 h-64 ">
                <Link href={""}>
                  <div className="bg-white text-center hover:-translate-y-1 hover:scale-110  duration-300 h-34 w-48 p-4  my-7 mx-auto ">
                    <h4 className="text-md font-bold pt-2 ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-card bg-cover pt-2 mt-4 md:mt-0 md:pt-0 h-64 ">
                <Link href={""}>
                  <div className="bg-white text-center hover:-translate-y-1 hover:scale-110  duration-300 h-34 w-48 p-4  my-7 mx-auto ">
                    <h4 className="text-md font-bold pt-2 ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="bg-card bg-cover h-64 invisible lg:visible ">
                <Link href={""}>
                  <div className="bg-white text-center h-34 w-48 p-4  my-7 mx-auto hover:-translate-y-1 hover:scale-110  duration-300 ">
                    <h4 className="text-md font-bold pt-2 ">
                      NIKE STORES & CO
                    </h4>
                    <p className="text-sm text-gray-400 pt-2">
                      Dealer in all kind of sneakrers, shoes and many other
                      footwears you wanteds
                    </p>
                    <div className="text-red-600 underline py-2">
                      <Link href={""}>Go to store</Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularMerchants;
