import React from "react";
import Image from "next/image";

import ourteamimg from "../../public/images/ourteamimg.png";

const OurTeam = () => {
  return (
    <section>
      <div>
        <div className="max-w-screen-xl px-4 py-2  lg:mx-auto lg:px-20">
          <div className=" block lg:grid lg:grid-cols-2 gap-20 mt-2 lg:mt-5  ">
            <div>
              <h2 className="justify-left pb-3 md:pb-0 text-lg md:text-2xl lg:text-4xl poppins flex  md:justify-center leading-relaxed lg:block pt-2 md:pt-2 font-extrabold ">
                OUR <span className="text-orange-600 pl-2 lg:pl-0"> TEAM</span>
              </h2>
              <div className="  lg:hidden mt-14 lg:mt-0">
                <Image src={ourteamimg} />
              </div>
              <p className="flex justify-between md:justify-center poppins  font-medium md:block pt-4 lg:pt-8 lg:leading-7  md:leading-9 md:text-xl lg:text-lg">
                I am happy to introduce to you what Mbox looks like internally.
                The team is committed to uphold -ing the culture that defines us
                as a customer obsessed company with absolute resilience and
                agility. The zeal to transform E-commerce with our users in mind
                makes us better day by day.
              </p>
              <p className="lg:pt-10 pt-4 poppins md:pt-5  md:leading-9 md:text-xl  leading-7 lg:text-lg ">
                The zeal to transform E-commerce with our users in mind makes us
                better day by day.
              </p>
              <p className=" lg:pt-10 pt-4 md:pt-6  md:leading-9 md:text-xl             lg:text-2xl font-semibold">
                Ojokuye Wahab Adewale
              </p>
              <p className=" pt-2 text-orange-600 ">Co-founder/CEO, MBOX </p>
            </div>
            <div className=" hidden lg:flex mt-14 lg:mt-0">
              <Image src={ourteamimg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
