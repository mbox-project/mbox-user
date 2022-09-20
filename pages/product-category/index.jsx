import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import BestStore from "../../components/ProductCategories/BestStore";
import Home from "../../components/ProductCategories/Home";
import Menswatches from "../../components/ProductCategories/Menswatches";
import SuggestedPicks from "../../components/ProductCategories/SuggestedPicks";
const index = () => {
  return (
    <>
      <Header />
      <Home />
      <SuggestedPicks />
      <BestStore />
      <Menswatches />
      <Newsletter />
      <MainFooter />
    </>
  );
};
export default index;
