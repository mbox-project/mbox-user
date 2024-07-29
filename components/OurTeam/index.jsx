import React from "react";
import Image from "next/image";

import ourteamimg from "../../public/images/ourteamimg.png";
import { useRouter } from "next/router";

const OurTeam = () => {
  const router = useRouter();

  return (
    <section>
      <div>
        <div className="max-w-screen-xl mx-auto px-4 py-8 lg:pt-8 pt-0">
          <div className="block lg:grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="justify-left pb-3 text-lg md:text-2xl lg:text-4xl poppins flex leading-relaxed lg:block pt-2 md:pt-2 font-extrabold ">
                OUR <span className="text-orange-600 pl-2 lg:pl-0"> TEAM</span>
              </h2>
              <div className="lg:hidden">
                <Image src={ourteamimg} height={660} width={600} />
              </div>
              <p className="flex justify-between md:justify-center poppins md:block pt-4 lg:pt-8 lg:leading-7  md:leading-9 md:text-xl lg:text-lg">
                It is one thing to recognize a problem, another to create a
                solution, but a significant accomplishment to develop a solution
                that can positively impact lives. Our skilled team has not only
                identified a problem but also crafted and implemented a solution
                that will empower businesses, improve lives, and expand economic
                opportunities through the utilization of the internet.
              </p>
              <p className="lg:pt-10 pt-4 poppins md:pt-5  md:leading-9 md:text-xl  leading-7 lg:text-lg ">
                We are excited to commence on a small scale with the ambition to
                grow, continually enhancing the product with our users in mind
                every step of the way
              </p>
              <div className=" flex pt-10">
                <button
                  onClick={() => router.push("/prelaunch/contact-us")}
                  className="h-12 px-5 text-white rounded-md bg-[#EF5612]"
                >
                  Contact us
                </button>
              </div>
            </div>
            <div className=" hidden lg:flex">
              <Image src={ourteamimg} height={660} width={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
