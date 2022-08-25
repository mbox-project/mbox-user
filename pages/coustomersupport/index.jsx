import React from "react";
import Image from "next/image";
import Bgdesign from "../../public/images/Bgdesign.png";
import Wave from "../../public/images/Wave.png";
import Coustomercare from "../../public/images/Coustomercare.png";
import Chat from "../../public/images/Chat.png";
import Chatsub from "../../public/images/Chatsub.png";
import Question from "../../public/images/Question.png";
const coustomsup = () => {
  return (
    <div className="font-sans text-gray-600 ">
      <section
        className="block bg-orange-600 w-full h-auto text-white rounded-t-xl px-5 md:px-32 "
        style={{
          backgroundImage: `url(${Bgdesign.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className="text-5xl py-20 font-semibold">
          Hi Dewale26
          <Image src={Wave} width={50} height={50} alt="Wave" />
        </h1>
        <p className="text-2xl pb-16">
          We are here to help you buy and sell your products here on Mbox.{" "}
          {"\n"} Ask us if you have any problem. {"\n"} Or visit our Help Center
          at the bottom of this this website for more information.
        </p>
      </section>

      <section className="block static">
        <div className="relative w-full h-96 m-5 ">
          <div className=" absolute bg-pink-100 inset-x-0 bottom-0 mx-10 px-20 z-0 rounded-lg">
            <h2 className="text-4xl py-14 font-semibold">
              Have you met Derin yet?
            </h2>
            <p className="text-xl">
              Well, Derin is one of the sweetest coustomer service you will ever
              meet!
            </p>
            <h4 className="text-2xl py-10 font-medium">
              She is ready to solve all your enquiries!
            </h4>
          </div>
          <div className="absolute top-0 right-0 mx-10 mt-0 z-10 ">
            <Image
              src={Coustomercare}
              width={300}
              height={385}
              alt="Coustomer-care"
            />
          </div>
        </div>
      </section>

      <section className="block w-full h-auto ">
        <div className="flex justify-between p-10 mx-5 my-10 rounded-xl shadow-lg md:mx-32 ">
          {/* <div>
              <h3>Start a conversation now</h3>
              <span></span>
              
            </div> */}
          <Image src={Chat} width={400} height={280} alt="Chat" />
          <Image src={Question} width={200} height={200} alt="Question" />
        </div>
      </section>

      <section className="block w-full h-auto">
        <div className="flex p-10 mx-5 my10 rounded-xl shadow-lg md:mx-32">
          <Image src={Chatsub} className=" w-full h-full" alt="Chatsub" />
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
export default coustomsup;
