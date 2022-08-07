import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/dist/client/image";
import fashion from "../../public/images/fashion.png";

import Navbar from "../../components/PagesLayout/Navbar";
const index = () => {
  return (
    <>
      <Navbar />
      <Carousel>
        <div>
          <Image src={fashion} />
        </div>
        <div>
          <Image src={fashion} />
        </div>
        <div>
          <Image src={fashion} />
        </div>
      </Carousel>
    </>
  );
};
export default index;
