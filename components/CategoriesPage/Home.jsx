import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <section className="newsletterbg">
      <div className="pt-7 pb-12 text-sm   poppins lg:ml-20">
        <Link href={`/auth/forgot-password`} className="font-medium ">
          Home &gt; &gt; &gt;
        </Link>
        <Link href={`/auth/forgot-password`} className="poppins font-medium">
          Categories &gt; &gt; &gt;
        </Link>
        <Link href={`/auth/forgot-password`} className="pl-1">
          Men&apos;s Fashion &gt; &gt; &gt;
        </Link>
      </div>
    </section>
  );
};
export default Home;
