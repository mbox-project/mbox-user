import React from "react";
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
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";
const index = () => {
  const role = useSelector(selectRole);
  return (
    <>
      {role ? <Navbar /> : <Header />}
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
