import React from "react";
import Image from "next/dist/client/image";
import watches from "../../public/images/watches.png";
import Fakeapi from "../CategoriesPage/Fakeapi";
import loveimg from "../../public/images/love.png";

const BestStore = () => {
  return (
    <section className="newsletterbg pt-20">
      <div className="border rounded-2xl lg:mx-20 shadow-lg">
        <div className=" bg-grayColor py-8 border border-b-0 rounded-b-none rounded-2xl">
          <h3 className=" text-lightGray pl-16 text-2xl poppins font-medium  ">
            Best Store
          </h3>
        </div>
        <div className="mx-2 lg:mx-10 block md:grid grid-cols-2 lg:flex py-10">
          {Fakeapi.map((items) => {
            return (
              <div key={items.id}>
                <div className="flex mx-4  rounded-lg   ">
                  <div>
                    <Image src={watches} />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p>{items.Ques}</p>
                  <Image src={loveimg} width={25} height={25} />
                </div>
                <div className="flex">
                  <p className="pl-16 text-xs text-brightRed">{items.Answer}</p>
                  <p className="pl-5 text-xs">{items.Answers}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-2 lg:mx-10 block md:grid grid-cols-2 lg:flex py-10">
          {Fakeapi.map((items) => {
            return (
              <div key={items.id}>
                <div className="flex mx-4  rounded-lg   ">
                  <div>
                    <Image src={watches} />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p>{items.Ques}</p>
                  <Image src={loveimg} width={25} height={25} />
                </div>
                <div className="flex">
                  <p className="pl-16 text-xs text-brightRed">{items.Answer}</p>
                  <p className="pl-5 text-xs">{items.Answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BestStore;
