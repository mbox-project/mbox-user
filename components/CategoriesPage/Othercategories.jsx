import React from "react";
import categoryimg from "../../public/images/categoryimg.png";
import Image from "next/dist/client/image";
const Othercategories = () => {
  return (
    <section className="newsletterbg mb-48 md:mb-0">
      <div>
        <p
          className="flex justify-center poppins font-semibold   py-10 md:text-2xl  lg:text-3xl  
          "
        >
          Explore{" "}
          <span className="underline  decoration-brightRed  underline-offset-8 pl-1">
            Other Categor{" "}
          </span>
          ies
        </p>
      </div>
      <div className="grid grid-cols-4  md:flex md:mx-20">
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
      </div>
      <div className="grid grid-cols-4 pt-4  md:flex md:mx-20">
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
        <div className="mx-0 lg:mx-10">
          <Image src={categoryimg} />
        </div>
      </div>
    </section>
  );
};
export default Othercategories;
