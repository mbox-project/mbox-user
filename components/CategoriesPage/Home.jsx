import React from "react";
import Link from "next/link";

const Home = ({catName}) => {
  
  return (
    <section className="newsletterbg">
      <div className=" lg:pt-7 pt-4  pb-4 lg:pb-12 text-xs md:text-sm ml-8   poppins lg:ml-20">
        <Link href={`/auth/forgot-password`} className="font-medium ">
          Home &gt; &gt; &gt;
        </Link>
        <Link href={`categories`} className="poppins font-medium">
          Categories &gt; &gt; &gt;
        </Link>
        <Link href={`/catName`}  className="pl-1">
         <p> {catName.name} &gt; &gt; &gt;</p>
        </Link>
      </div>
    </section>
  );
};
export default Home;
