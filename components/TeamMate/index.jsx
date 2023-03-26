import React from "react";
import Image from "next/image";
import teammateimg1 from "../../public/images/teammateimg1.png";
import teammateimg2 from "../../public/images/teammateimg2.png";
import teammateimg3 from "../../public/images/teammateimg3.png";
import teammateimg4 from "../../public/images/teammateimg4.png";
import teammateimg5 from "../../public/images/teammateimg5.png";
import teammateimg6 from "../../public/images/teammateimg6.png";
const TeamMate = () => {
  return (
    <section>
      <div className="max-w-screen-xl  px-4 py-6 mx-auto sm:px-6 lg:px-0">
        <div className="">
          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2"> */}
          <div className=" grid grid-cols-2 gap-20 mt-1 lg:mt-5 lg:grid-cols-3 lg:gap-y-16">
            <div className=" pt-0 md:pt-0  ">
              <div className=" p-1 my-0   lg:p-4  md:my-7 mx-auto ">
                <Image src={teammateimg1} />
                <p className=" text-center lg:text-2xl font-semibold poppins md:text-left text-sm text-lightGray  poppins pt-2">
                  Asiwaju MBOX
                </p>
                <div className="text-orange-600 text-sm  text-center md:text-left py-2">
                  <p>co-founder / CTO</p>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:pt-0  ">
              <div className="   p-1  my-0  lg:p-4  md:my-7 mx-auto ">
                <Image src={teammateimg2} />
                <p className="text-sm text-center md:text-left lg:text-2xl font-semibold text-lightGray poppins pt-2">
                  Kehinde MBOX
                </p>
                <div className="text-orange-600  text-sm text-center md:text-left py-2">
                  <p>Product Designer</p>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:pt-0  ">
              <div className=" p-1 my-0   lg:p-4 md:my-7 mx-auto ">
                <Image src={teammateimg3} />
                <p className="text-sm text-center md:text-left  lg:text-2xl font-semibold text-lightGray poppins pt-2">
                  Ayobami MBOX
                </p>
                <div className="text-orange-600 text-sm text-center md:text-left  py-2">
                  <p>Backend Dev.</p>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:pt-0  ">
              <div className=" text-center  p-1  my-0  lg:p-4  md:my-7 mx-auto ">
                <Image src={teammateimg4} />
                <p className="  text-center md:text-left text-sm  lg:text-2xl font-semibold text-lightGray poppins pt-2">
                  Sophie MBOX
                </p>
                <div className="text-orange-600 text-sm text-center md:text-left py-2">
                  <p>Frontend Dev.</p>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:pt-0  ">
              <div className=" text-center    p-1 my-0   lg:p-4   md:my-7 mx-auto ">
                <Image src={teammateimg5} />
                <p className="text-sm text-center md:text-left  lg:text-2xl font-semibold text-lightGray poppins pt-2">
                  Oluwatobi MBOX
                </p>
                <div className="text-orange-600 text-sm text-center md:text-left py-2">
                  <p>Backend Dev.</p>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:pt-0  ">
              <div className=" text-center   p-1  my-0  lg:p-4  md:my-7 mx-auto ">
                <Image src={teammateimg6} />
                <p className="text-sm text-center md:text-left  lg:text-2xl font-semibold text-lightGray poppins pt-2">
                  Ibukun MBOX
                </p>
                <div className="text-orange-600 text-sm text-center md:text-left py-2">
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
export default TeamMate;
