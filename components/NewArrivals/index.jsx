import React from "react";
import Link from "next/link";
import Image from "next/image";
import men from "../../public/images/men.png"

const NewArrivals = () => {
  return (
    <section>
      <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
        <div className="flex justify-between w-full border-b-2 border-gray-200">
          <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-orange-600">
            New
            <span className="text-orange-600 px-1">Arrivals </span>
          </h4>

          <div className="text-sm p-2">
            <a href="#">View All</a>
          </div>
        </div>

        <div className="py-5 text-xs">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-10">
            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center h-32 w-32 border rounded-lg shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                  <Link href={""}>
                    <Image src={men} />
                  </Link>
                </div>
              </div>
              <Link href={""} className="flex justify-center py-3">
                Phones & Tablets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
