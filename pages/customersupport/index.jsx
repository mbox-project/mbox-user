import React from "react";
import Image from "next/image";
import Bgdesign from "../../public/images/Bgdesign.png";
import Wave from "../../public/images/Wave.png";
import Customercare from "../../public/images/Coustomercare.png";
import Chat from "../../public/images/Chat.png";
import Eclipse from "../../public/images/Eclipse.png";
import Derin from "../../public/images/Derin.png";
import stroke from "../../public/images/Stroke.png";
import Question from "../../public/images/Question.png";
const customsup = () => {
  return (
    <div className="font-poppins text-gray-600 ">
      <section
        className="block bg-orange-600 w-full h-auto text-white px-5 md:px-32 "
        style={{
          backgroundImage: `url(${Bgdesign.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className="text-5xl py-20 font-medium">
          Hi Dewale26
          <Image src={Wave} width={50} height={50} alt="Wave" />
        </h1>
        <p className="text-2xl pb-16">
          We are here to help you buy and sell your products here on Mbox.
          <br /> Ask us if you have any problem. <br /> Or visit our Help Center
          at the bottom of this this website for more information.
        </p>
      </section>

      <section className="relative">
        <div className="static w-full h-96 m-5 mt-10">
          <div className=" absolute bg-pink-100 md:h-full lg:h-auto inset-x-0 lg:bottom-0 mx-5 px-2 lg:mx-10 lg:px-20 z-0 rounded-lg overflow-auto ">
            <h2 className="text-4xl py-10 font-semibold">
              Have you met Derin yet?
            </h2>
            <p className="text-xl">
              Well, Derin is one of the sweetest <br />
              customer service you will ever meet!
            </p>
            <h4 className="text-2xl py-7 font-semibold">
              She is ready to solve all your enquiries!
            </h4>
          </div>
          <div className=" invisible md:visible lg:visible absolute top-0 right-0 mx-10 mt-0 z-10 ">
            <Image
              src={Customercare}
              width={300}
              height={385}
              alt="Customer-care"
            />
          </div>
        </div>
      </section>

      <section className="block w-full h-auto ">
        <div className="flex justify-between p-10 mx-5 my-10 rounded-xl shadow-lg md:mx-32 ">
          <Image src={Chat} width={400} height={280} alt="Chat" />
          <Image src={Question} width={200} height={200} alt="Question" />
        </div>
      </section>

      <section className="block w-full h-auto">
        <div className="flex flex-col p-5 mx-5 my10 rounded-xl shadow-lg md:mx-32">
          <div className="flex flex-row justify-between h-auto">
            <h3 className="text-2xl my-4 font-medium">
              Continue this conversation
            </h3>
            <div className="h-10 w-10">
              <Image src={Eclipse} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="h-20 w-20 p-2">
              <Image src={Derin} />
            </div>
            <div className="p-2">
              <h5 className="text-xl font-semibold">Derin . 2 weeks ago</h5>
              <p className="text-xl font-medium overflow-hidden">
                sorry for the inconvinience Emily, your request has been
                granted. Chec...
              </p>
            </div>
            <div className="h-10 w-10">
              <Image src={stroke} />
            </div>
          </div>
        </div>
      </section>

      <section className="block w-full h-auto my-10">
        <nav className="flex flex-col mx-10 px-20 text-2xl font-medium">
          <a href="" className="py-5">
            Learn About Us here
          </a>
          <a href="" className="py-5">
            Quick FQAs here
          </a>
        </nav>
      </section>
    </div>
  );
};
export default customsup;
