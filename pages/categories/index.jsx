import React from "react";

import Navbar from "../../components/PagesLayout/Navbar";
import Home from "../../components/CategoriesPage/Home";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Fashion from "../../components/CategoriesPage/Fashion";
import Deals from "../../components/CategoriesPage/Deals";
import Newarrivals from "../../components/CategoriesPage/Newarrivals";
import Mensfashion from "../../components/CategoriesPage/Mensfashion";
const index = () => {
  return (
    <>
      <Navbar />
      <Home />

      <Fashion />
      <Deals />
      <Newarrivals />
      <Mensfashion />
      <Newsletter />
      <MainFooter />
    </>
  );
};
export default index;
