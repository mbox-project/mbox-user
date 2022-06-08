import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 pb-0 bg-white text-center pt-10">
      <span className="block text-sm text-gray-500 sm:text-center">
        &copy; 2022{" "}
        <Link href="/">
          <a className="hover:underline">Market Box</a>
        </Link>{" "}
        . All Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;
