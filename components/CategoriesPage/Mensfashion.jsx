import React, { useState, useEffect } from "react";
import Data from "./Data";
import Api from "./Api";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/dist/client/image";
import dealsimg from "../../public/images/dealsimg.png";
import { BsHeart } from "react-icons/bs";
import rectangle from "../../public/images/rectangle.png";
import { getProducts } from "../../store/product/productService";
const Mensfashion = ({catName}) => {
  const subCategories = useSelector((state) => state.product.subCategory)
  const categoryIdToFilter = catName.id; // Example category ID to filter
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products)

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch]);

// Filter the products based on the category ID
const filteredProducts = product?.filter(product => {
    return product.categoryId === categoryIdToFilter;
});

  return (
    <section className="block lg:flex pt-20  newsletterbg ">
      <div className="">
        <div className="bg-grayColor hidden lg:block ml-0 lg:ml-20 space-y-6 poppins pt-4 pl-4">
          <h5 className="font-medium poppins uppercase text-lg">Category</h5>
          <p className="font-medium poppins text-base ">{catName.name}</p>
          {subCategories.map((item) => {
            return (
              <div key={item.$id} className="block w-52 poppins pl-4 font-light">
                <p className="pl-4">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-grayColor hidden lg:block ml-0 lg:ml-20 space-y-6 poppins pt-8 pl-4">
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
        <div className=" hidden lg:flex bg-grayColor ml-0 lg:ml-6 p-4 ">
          <h5 className="font-bold text-2xl poppins pt-6  ">
           {catName.name?.substring(0, 2)}
            <span className="underline  decoration-brightRed  underline-offset-8">
            {catName.name?.slice(2)}
            </span>
           
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
        <div className="border border-t-none -mt-20 md:-mt-0 ml-0 lg:ml-6 ">
          <h2 className="  pt-10 flex lg:hidden poppins justify-center text-2xl">
            Mens Fashion
          </h2>
          <div className="grid grid-cols-sm-auto md:grid-cols-3 md:gap-4 ">
            {filteredProducts?.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex mx-4  rounded-lg   ">
                    <div>
                      <Image src={dealsimg} />
                    </div>
                  </div>
                  <div className="flex poppins ">
                    <p className=" pl-10 text-sm font-poppins font-extralight ">
                      {items.name}
                    </p>
                    <BsHeart size={20} />
                  </div>
                  <div className="flex ">
                    <p className="pl-10 font-poppins font-semibold">
                      {items.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
         
        </div>
        <div className="flex justify-center bg-grayColor py-20 ml-0 lg:ml-6">
          <div>
            <button className="border-2 border-solid p-3 border-brightPurple poppins text-sm bg-deepGray rounded-md">
              Previous
            </button>
          </div>
          <ul className="flex ml-3 lg:ml-5">
            <li className="ml-0 lg:ml-3 rounded-full  bg-brightPurple  text-white p-3">
              1
            </li>
            <li className="ml-3 lg:ml-5 mt-2">2</li>
            <li className="ml-3 lg:ml-5 mt-2">3</li>
            <li className="ml-3 lg:ml-5 mt-2">4</li>
            <li className="ml-3 lg:ml-5 mt-2">5</li>
          </ul>
          <div>
            <button className="border-2 border-solid border-brightPurple p-3 poppins text-sm bg-deepGray rounded-md ml-3 lg:ml-5">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mensfashion;
