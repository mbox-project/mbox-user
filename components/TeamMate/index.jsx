import Link from "next/link";
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
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
           
            <div className=" block md:grid grid-cols-2 gap-20 mt-8 lg:mt-5 lg:grid-cols-3 lg:gap-y-16">
              <div className=" pt-7 md:pt-0  ">
                <div className="  hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg1} />
                  <p className=" text-center md:text-left text-sm text-gray-400 pt-2">Asiwaju MBOX</p>
                  <div className="text-orange-600 text-center md:text-left py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
              <div className=" pt-7 md:pt-0  ">
                <div className="  hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg2} />
                  <p className="text-sm text-center md:text-left text-gray-400 pt-2">Kehinde MBOX</p>
                  <div className="text-orange-600 text-center md:text-left py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
              <div className=" pt-7 md:pt-0  ">
                <div className="  hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg3} />
                  <p className="text-sm  text-gray-400 pt-2">Asiwaju MBOX</p>
                  <div className="text-red-600 underline py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" block md:grid grid-cols-2 gap-20  -mt-12 md:-mt-0 lg:mt-5 lg:grid-cols-3 lg:gap-y-16">
            <div className=" pt-7 md:pt-0  ">
                <div className=" text-center hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg4} />
                  <p className="text-sm text-gray-400 pt-2">Asiwaju MBOX</p>
                  <div className="text-red-600 underline py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
              <div className=" pt-7 md:pt-0  ">
                <div className=" text-center hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg5} />
                  <p className="text-sm text-gray-400 pt-2">Asiwaju MBOX</p>
                  <div className="text-red-600 underline py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
              <div className=" pt-7 md:pt-0  ">
                <div className=" text-center hover:-translate-y-1 hover:scale-110  duration-300  p-4  md:my-7 mx-auto ">
                  <Image src={teammateimg6} />
                  <p className="text-sm text-gray-400 pt-2">Asiwaju MBOX</p>
                  <div className="text-red-600 underline py-2">
                    <p>co-founder / CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamMate;
