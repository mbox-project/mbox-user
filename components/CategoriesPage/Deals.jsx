import React from "react";
import Image from "next/dist/client/image";
import dealsimg from "../../public/images/dealsimg.png";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { BsHeart } from "react-icons/bs";
import Fakeapi from "./Fakeapi";

const Deals = () => {
  return (
    <section className="newsletterbg pt-10  ">
      <div className="border rounded-2xl lg:mx-20 shadow-xl">
        <div className=" bg-grayColor py-8 border border-b-0 rounded-b-none rounded-2xl">
          <h3 className=" text-lightGray flex justify-center lg:justify-start lg:pl-16 text-2xl poppins font-medium  ">
            Dea
            <span className="underline  decoration-brightRed  underline-offset-8">
              ls of the{" "}
            </span>{" "}
            day
          </h3>
        </div>
        <ScrollMenu>
          <div className="mx-10 flex md:mx-10 lg:mx-0 md:grid grid-cols-2 lg:flex py-10 ">
            {Fakeapi.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex mx-4  rounded-lg   ">
                    <div>
                      <Image src={dealsimg} />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="pl-5 md:pl-0 text-xs md:text-base">
                      {items.Ques}
                    </p>
                    <BsHeart size={20} />
                  </div>
                  <div className="flex">
                    <p className=" pl-4 md:pl-20 lg:pl-16 text-brightRed text-xs">
                      {items.Answer}
                    </p>
                    <p className="pl-5 text-xs">{items.Answers}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollMenu>
      </div>
    </section>
  );
};
export default Deals;
