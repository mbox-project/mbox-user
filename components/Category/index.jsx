import React, { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import gift from "../../public/images/gift.png";
import men from "../../public/images/men.png";
import furniture from "../../public/images/furnIture.png";
import skincare from "../../public/images/skincare.png";
import watches from "../../public/images/watches.png";
import accessories from "../../public/images/accessories.png";
import food from "../../public/images/food.png";
import drinks from "../../public/images/drinks.png";
import crafts from "../../public/images/crafts.png";
import books from "../../public/images/book.png";
import automobile from "../../public/images/automobile.png";
import women from "../../public/images/women.png";
import phones from "../../public/images/phones.png";
import appliances from "../../public/images/appliances.png";
import estate from "../../public/images/estate.png";
import toys from "../../public/images/toys.png";
import elect from "../../public/images/elect.png";
import decor from "../../public/images/decor.png";
import stroke from "../../public/images/Stroke.png";

import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../store/product/productService";

const Category = () => {
  const dispatch = useDispatch();
   const categories = useSelector((state) => state.product.categories)
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    dispatch(getProductCategories());
   
  }, [dispatch]);
  

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  /**
   * const categories = [
    { name: "Phones & Tablets", image: phones },
    { name: "Beauty & Skincare", image: skincare },
    { name: "Men's Fashion", image: men },
    { name: "Women's Fashion", image: women },
    { name: "Furnitures", image: furniture },
    { name: "Watches", image: watches },
    { name: "Accessories", image: accessories },
    { name: "Automobile", image: automobile },
    { name: "Gift Items", image: gift },
    { name: "Electronics", image: elect },
    { name: "Food", image: food },
    { name: "Kids & Toys", image: toys },
    { name: "Books & Stationery", image: books },
    { name: "Decor", image: decor },
    { name: "Drinks", image: drinks },
    { name: "Art & Craft", image: crafts },
    { name: "Appliances", image: appliances },
    { name: "Real Estate", image: estate },
  ];
   */

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 6);

  return (
    <section className="">
      <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
        <div className="flex justify-between w-full border-b-2 border-gray-200">
          <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-orange-600">
            Shop Items By
            <span className="text-orange-600 px-1">Category </span>
          </h4>

          <div>
            {showAllCategories ? (
              <div className="my-3 text-nowrap">
                <Button
                  onClick={toggleCategories}
                  className="p-2 text-xs md:text-sm font-medium"
                >
                  Show Less
                </Button>
                <Image src={stroke} height={10} width={10} />
              </div>
            ) : (
              <div className="my-3 text-nowrap">
                <Button
                  onClick={toggleCategories}
                  className="p-2 text-xs md:text-sm font-medium"
                >
                  Show All
                </Button>
                <Image src={stroke} height={10} width={10} />
              </div>
            )}
          </div>
        </div>

        <div className="py-5 text-xs">
          <div className="flex flex-wrap justify-evenly gap-2 lg:gap-10">
            {/* Map through displayed categories */}
            {displayedCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center space-y-5">
                <div className="flex justify-center items-center h-32 w-32 border rounded-full shadow-md hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="hover:-translate-y-1 hover:scale-110  duration-300">
                    <Link href="">
                      <Image src={phones} />
                    </Link>
                  </div>
                </div>
                <Link href="" className="flex justify-center py-3">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
