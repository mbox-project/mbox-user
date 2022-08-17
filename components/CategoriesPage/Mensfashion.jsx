import React from "react";
import Data from "./Data";
import Api from "./Api";
import Image from "next/dist/client/image";
import dealsimg from "../../public/images/dealsimg.png";
import loveimg from "../../public/images/love.png";
const Mensfashion = () => {
  return (
    <section className="flex pt-20  newsletterbg ">
      <div className="bg-grayColor ml-20 space-y-6 poppins pt-4 pl-4">
        <h5 className="font-medium poppins uppercase text-lg">Category</h5>
        <p className="font-medium poppins text-base ">Mens Fashion</p>
        {Data.map((item) => {
          return (
            <div key={item.id} className="block w-52 poppins pl-4 font-light">
              <p>{item.type}</p>
            </div>
          );
        })}
      </div>
      <div className="newsletter">
        <div className="flex bg-grayColor ml-6 p-4 ">
          <h5 className="font-bold text-2xl poppins pt-6  ">
            Men&apos;s Fashion
          </h5>
          <p className="font-light text-base px-24 pt-6 text-lightGray">
            price
          </p>
          <p className="font-light text-base px-24 pt-6 text-lightGray">
            color
          </p>
          <p className="font-light text-base px-24 pt-6 text-lightGray">size</p>

          <form>
            <select
              id="sort"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
            >
              <option disabled selected>
                Sort By
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
        </div>
        <div className="flex ml-6 p-4 border border-t-none ">
          {Api.map((items) => {
            return (
              <div key={items.id}>
                <div className="flex mx-4  rounded-lg   ">
                  <div>
                    <Image src={dealsimg} />
                  </div>
                </div>
                <div className="flex poppins ">
                  <p className=" pl-10 text-sm font-poppins font-extralight ">
                    {items.Ques}
                  </p>
                  <Image src={loveimg} width={30} height={25} />
                </div>
                <div className="flex ">
                  <p className="pl-10 font-poppins font-semibold">
                    {items.Answers}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Mensfashion;
