import React from "react";
import Data from "../CategoriesPage/Data";
import Api from "../CategoriesPage/Api";
import Image from "next/dist/client/image";
import watches from "../../public/images/watches.png";
import { BsHeart } from "react-icons/bs";
import rectangle from "../../public/images/rectangle.png";
const SearchRes = () => {
  return (
    <section className="block lg:flex pt-20  newsletterbg ">
      <div className="">
        <div className="bg-grayColor hidden lg:block ml-20 space-y-6 poppins pt-4 pl-4">
          <h5 className="font-medium poppins uppercase text-lg">Category</h5>
          <p className="font-medium poppins text-base ">Mens Fashion</p>
          {Data.map((item) => {
            return (
              <div key={item.id} className="block w-52 poppins pl-4 font-light">
                <p className="pl-4">{item.type}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-grayColor  hidden lg:block ml-20 space-y-6 poppins pt-8 pl-4">
          <p>Brands</p>
          <div className=" flex">
            <Image src={rectangle} height={23} width={23} />
            <p className="pl-3">Gucci</p>
          </div>
          <div className=" flex">
            <Image src={rectangle} height={23} width={23} />
            <p className="pl-3">Versace</p>
          </div>
          <div className=" flex">
            <Image src={rectangle} height={23} width={23} />
            <p className="pl-3">Louis Vuitton</p>
          </div>
          <div className=" flex">
            <Image src={rectangle} height={23} width={23} />
            <p className="pl-3">Burberry</p>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className=" hidden lg:flex bg-grayColor ml-6 p-4 ">
          <h5 className=" font-bold text-2xl poppins pt-6  ">
            12345 items found
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
        <div className="border border-t-none -mt-20 md:-mt-0 ml-6 ">
          <h2 className="  pt-10 flex  lg:hidden poppins justify-center text-2xl">
            Mens Fashion
          </h2>
          <div className="grid grid-cols-2 md:flex  p-4 ">
            {Api.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex mx-4  rounded-lg   ">
                    <div>
                      <Image src={watches} />
                    </div>
                  </div>
                  <div className="flex poppins ">
                    <p className=" pl-10 text-sm font-poppins font-extralight ">
                      {items.Ques}
                    </p>
                    <BsHeart size={20} />
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
          <div className="grid grid-cols-2 md:flex  p-4 ">
            {Api.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex mx-4  rounded-lg   ">
                    <div>
                      <Image src={watches} />
                    </div>
                  </div>
                  <div className="flex poppins ">
                    <p className=" pl-10 text-sm font-poppins font-extralight ">
                      {items.Ques}
                    </p>
                    <BsHeart size={20} />
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
          <div className="grid grid-cols-2 md:flex  p-4 ">
            {Api.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex mx-4  rounded-lg   ">
                    <div>
                      <Image src={watches} />
                    </div>
                  </div>
                  <div className="flex poppins ">
                    <p className=" pl-10 text-sm font-poppins font-extralight ">
                      {items.Ques}
                    </p>
                    <BsHeart size={20} />
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
        <div className="flex justify-center bg-grayColor py-20 ml-6">
          <div>
            <button className="border-2 border-solid p-3 border-brightPurple poppins text-sm bg-deepGray rounded-md">
              Previous
            </button>
          </div>
          <ul className="flex ml-5">
            <li className="ml-3 rounded-full  bg-brightPurple  text-white p-3">
              1
            </li>
            <li className="ml-5 mt-2">2</li>
            <li className="ml-5 mt-2">3</li>
            <li className="ml-5 mt-2">4</li>
            <li className="ml-5 mt-2">5</li>
          </ul>
          <div>
            <button className="border-2 border-solid border-brightPurple p-3 poppins text-sm bg-deepGray rounded-md ml-5">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchRes;
