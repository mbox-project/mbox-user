import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <section className="newsletterbg">
      <div className=" lg:pt-7 pt-4  pb-4 lg:pb-12 text-xs md:text-sm ml-8   poppins lg:ml-20">
        <Link href={`/auth/forgot-password`} className="font-medium ">
          Home &gt; &gt; &gt;
        </Link>
        <Link href={`/auth/forgot-password`} className="poppins font-medium">
          Categories &gt; &gt; &gt;
        </Link>
        <Link href={`/auth/forgot-password`} className="pl-1">
          Men&apos;s Fashion &gt; &gt; &gt;
        </Link>
        <Link href={`/auth/forgot-password`} className="pl-1">
          Watches
        </Link>
      </div>
    </section>
  );
};
export default Home;
