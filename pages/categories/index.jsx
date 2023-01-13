import React from "react";
import Header from "../../components/Header";
import Home from "../../components/CategoriesPage/Home";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Fashion from "../../components/CategoriesPage/Fashion";
import Deals from "../../components/CategoriesPage/Deals";
import Newarrivals from "../../components/CategoriesPage/Newarrivals";
import Mensfashion from "../../components/CategoriesPage/Mensfashion";
import Othercategories from "../../components/CategoriesPage/Othercategories";
import Filter from "../../components/CategoriesPage/Filter";
const index = () => {
  return (
    <>
      <Header />
      <Home />

      <Fashion />
      <Deals />
      <Newarrivals />
      <Filter />
      <Mensfashion />
      <Othercategories />
      <Newsletter />
      <MainFooter />
    </>
  );
};
export default index;
