import React from "react";
import categoryimg from "../../public/images/categoryimg.png";
import Image from "next/dist/client/image";
const Othercategories = () => {
  return (
    <section className="newsletterbg">
      <div>
        <p
          className="flex justify-center poppins font-semibold   py-10 md:text-2xl  lg:text-3xl  
          "
        >
          Explore Other Categories
        </p>
      </div>
      <div className="block  md:flex md:mx-20">
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
      </div>
      <div className=" pt-4 block md:flex md:mx-20">
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-10">
          <Image src={categoryimg} />
        </div>
      </div>
    </section>
  );
};
export default Othercategories;
