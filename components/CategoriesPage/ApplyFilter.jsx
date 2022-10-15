import React from "react";
import Image from "next/image";
import rectangle from "../../public/images/rectangle.png";
const ApplyFilter = () => {
  return (
    <section>
      <div className="flex justify-between">
        <p>Filter</p>
        <p>Apply Filter</p>
      </div>
      <div>
        <h2> CATEGORY</h2>
        <p>Watches</p>
        <p>Mens watches</p>
      </div>
      <div>
        <p>Brands</p>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Gucci</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Versace</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Louis Vuitton</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Burberry</p>
        </div>
      </div>
      <div>
        <p>Price</p>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">0-1,000</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">1,000-5,000</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">5,000-10,000</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">10,000- Above</p>
        </div>
      </div>
      <div>
        <p>Color</p>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Blue</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Orange</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Pink</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Black</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">Green</p>
        </div>
      </div>
      <div>
        <p>Color</p>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">XXXL</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">XXL</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">M</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">XL</p>
        </div>
        <div className=" flex">
          <Image src={rectangle} height={23} width={23} />
          <p className="pl-3">S</p>
        </div>
      </div>
    </section>
  );
};
export default ApplyFilter;
