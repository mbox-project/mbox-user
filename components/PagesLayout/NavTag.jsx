import React, { useState, useEffect } from "react"; 
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../store/product/productService";

const NavTag = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories?.slice(0, 9)); 

  useEffect(() => {
    dispatch(getProductCategories());
   
  }, [dispatch]);

  const handleClick = (categoryId) => {
    // Set category.id in sessionStorage
    sessionStorage.setItem('categoryId', categoryId);
  };

  return (
    <nav className="flex text-nowrap text-sm text-[#444444] overflow-x-scroll md:overflow-x-auto py-5 gap-2">
    {categories.map((category, index) => (
      <div key={index} className="rounded-2xl bg-[#FFF4F0] cursor-pointer p-2">
       <Link href="/categories" >
       <div onClick={() => handleClick(category.id)}> {category.name}</div>
        </Link>
       
      </div>
    ))}
  </nav>
  );
};

export default NavTag;
