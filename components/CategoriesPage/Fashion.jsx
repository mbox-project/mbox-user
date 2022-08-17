import React from "react";
import Image from "next/dist/client/image";
import stripes from "../../public/images/stripes.png";

import fashion from "../../public/images/fashion.png";

const Fashion = () => {
  return (
    <section className="newsletterbg ">
      <div>
        <Image src={fashion} />
      </div>

      <h3
        className="flex justify-center poppins font-semibold -mt-28 text-3xl divide-solid divide-y-8 divide-orange-600  
          "
      >
        Find <span className="text-orange-600 px-1">Items </span>Under Men’s
        Fashion Category Fast
      </h3>
      <div className="mx-20 flex py-14">
        <div className="flex mr-10 bg-grayColor border-none rounded-lg shadow-lg   w-64">
          <div className="pl-6">
            <Image src={stripes} />
          </div>
          <div>
            <p className=" pt-6 pl-3 ">Clothing</p>
          </div>
        </div>
        <div className="flex bg-grayColor border-none rounded-lg mx-10 shadow-lg w-64">
          <div className="pl-6">
            <Image src={stripes} />
          </div>
          <div>
            <p className=" pt-6 pl-3 ">Clothing</p>
          </div>
        </div>
        <div className="flex bg-grayColor border-none rounded-lg mx-10 shadow-lg w-64">
          <div className="pl-6">
            <Image src={stripes} />
          </div>
          <div>
            <p className=" pt-6 pl-3 ">Clothing</p>
          </div>
        </div>
        <div className="flex bg-grayColor border-none rounded-lg mx-10 shadow-lg   w-64">
          <div className="pl-6">
            <Image src={stripes} />
          </div>
          <div>
            <p className=" pt-6 pl-3 ">Clothing</p>
          </div>
        </div>
        <div className="flex bg-grayColor border-none rounded-lg mx-10 w-64 shadow-lg">
          <div className="pl-6">
            <Image src={stripes} />
          </div>
          <div>
            <p className=" pt-6 pl-3 ">Clothing</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Fashion;
