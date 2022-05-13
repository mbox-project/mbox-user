import React from "react";
import logo from "../../../assets/images/logo.png";
function Register() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 mx-auto p-12 bg-black">
        <img src={logo} />
      </div>
      <div className="w-1/2 mx-auto bg-white p-12">
        <div className="w-full flex justify-center">
          <h1 className="text-5xl text-orange-600">Register</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
