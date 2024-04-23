import React, { useState, useEffect } from "react"; 
import Header from "../../components/Header";
import Home from "../../components/CategoriesPage/Home";
import Navbar from "../../components/PagesLayout/Navbar";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Fashion from "../../components/CategoriesPage/Fashion";
import Deals from "../../components/CategoriesPage/Deals";
import Newarrivals from "../../components/CategoriesPage/Newarrivals";
import Mensfashion from "../../components/CategoriesPage/Mensfashion";
import Othercategories from "../../components/CategoriesPage/Othercategories";
import Filter from "../../components/CategoriesPage/Filter";
import { useSelector, useDispatch } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";
import { getProductCategoryId } from "../../store/product/productService";
const index = () => {
  const dispatch = useDispatch();
  const role = useSelector(selectRole);
  const catId = sessionStorage.getItem('categoryId') 
  const categories = useSelector((state) => state.product.categories)

  useEffect(() => {
    if (catId) {
      dispatch(getProductCategoryId(catId));
    }
  }, [dispatch, catId]);
  //console.log(subCategories)
  return (
    <>
      {role ? <Navbar /> : <Header />}
      <Home catName={categories}/>

      <Fashion catName={categories}  />
      <Deals />
      <Newarrivals />
      <Filter />
      <Mensfashion catName={categories}/>
      <Othercategories />
      <Newsletter />
      <MainFooter />
    </>
  );
};
export default index;
