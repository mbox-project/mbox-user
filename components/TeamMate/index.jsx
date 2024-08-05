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
      <div className="max-w-screen-xl mx-auto px-4 py-8 ">
        {/* lg:pb-8 pb-0 */}
        <div className=" grid gap-10 grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-16 poppins">
          <div className="flex flex-col gap-2">
            <Image src={teammateimg1} />
            <p className=" lg:text-2xl font-semibold md:text-left text-sm text-lightGray ">
              Asiwaju Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Co-founder / CTO</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Image src={teammateimg2} />
            <p className="text-sm lg:text-2xl font-semibold text-lightGray">
              Kehinde Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Product Designer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={teammateimg3} />
            <p className=" text-sm lg:text-2xl font-semibold text-lightGray">
              Ayobami Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Backend Dev.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={teammateimg4} />
            <p className=" text-sm lg:text-2xl font-semibold text-lightGray">
              Sophie Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Frontend Dev.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={teammateimg5} />
            <p className=" text-sm lg:text-2xl font-semibold text-lightGray">
              Oluwatobi Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Backend Dev.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={teammateimg6} />
            <p className=" text-sm lg:text-2xl font-semibold text-lightGray">
              Ibukun Marketbox
            </p>
            <div className="text-orange-600 text-sm">
              <p>Product Manager</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
export default TeamMate;
