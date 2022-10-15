import React from "react";
import Image from "next/dist/client/image";
import stripes from "../../public/images/stripes.png";
import ItemsApi from "./ItemsApi";
import fashion from "../../public/images/fashion.png";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Fashion = () => {
  return (
    <section className="newsletterbg ">
      <div>
        <Image src={fashion} />
      </div>

      <h3
        className="flex justify-center poppins font-semibold pl-6 -mt-5  md:-mt-16 lg:-mt-28  md:text-2xl  lg:text-3xl  
          "
      >
        Find <span className="text-orange-600 px-1">Items </span>{" "}
        <span className="underline  decoration-brightRed  underline-offset-8 px-1">
          Under Men’s Fashion Category{" "}
        </span>
        Fast
      </h3>
      <ScrollMenu>
        <div className="flex mx-10 lg:mx-20  py-14">
          {ItemsApi.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex  bg-grayColor border-none rounded-lg shadow-lg w-64 mx-5"
              >
                <div className="pl-6">
                  <Image src={stripes} />
                </div>
                <div>
                  <p className=" pt-6 pl-3 ">{item.item1}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollMenu>
    </section>
  );
};
export default Fashion;
