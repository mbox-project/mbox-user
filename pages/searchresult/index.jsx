import React from "react";
import Header from "../../components/Header";
import MainFooter from "../../components/MainFooter";
import Newsletter from "../../components/Newsletter";
import Image from "next/image";
import searchresimg from "../../public/images/searchresimg.png";

import Home from "../../components/ProductCategories/Home";
import SearchRes from "../../components/Searchresult/SearchRes";
import Cribstore from "../../components/Searchresult/cribstore";

const index = () => {
  return (
    <>
      <Header />
      <Home />
      <SearchRes />
      <div className="bg-deepGray px-20">
        <Image src={searchresimg} />
      </div>
      <Cribstore />
      <Newsletter />
      <MainFooter />
    </>
  );
};
export default index;
