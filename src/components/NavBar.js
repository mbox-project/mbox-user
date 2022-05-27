import React from "react";
import logo from "../assets/images/mainlogo.png";
import bell from "../assets/images/bell.png";
const NavBar = () => {
  const textHandler = () => {
    console.log("hello");
  };
  return (
    <div className="flex justify-evenly">
      <div>
        <img src={logo} className=" w-38 " />
      </div>
      <div>
        <input
          type="text"
          onChange={textHandler}
          className="m-3  py-3 px-24 rounded-md border-none"
        />
      </div>
      <div>
        <button className="bg-orange-500 py-3 px-5 rounded-md text-white mt-3">
          Search
        </button>
      </div>
      <div>
        <img src={bell} className=" mt-3" />
      </div>
      <div className=" mt-3">
        <p>Log in</p>
      </div>
      <div className=" mt-3">
        <p>Sign Up</p>
      </div>
    </div>
  );
};
export default NavBar;
