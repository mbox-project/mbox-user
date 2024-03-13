import React from "react";
//import Link from "next/link";
import Image from "next/image";
import men from "../../public/images/men.png";
import profile from "../../public/images/mboximg.png";
import dealsimg from "../../public/images/dealsimg.png";
import { BsHeart } from "react-icons/bs";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Fakeapi = [
  {
    id: "f1",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
  {
    id: "f2",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
  {
    id: "f3",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
  {
    id: "f4",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
  {
    id: "f5",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
  {
    id: "f6",
    Ques: "AMVDII Potrait Came...",
    Answer: "$800",
    Answers: "$11120.00",
  },
];

const NewArrivals = () => {
  return (
    <section>
      <div className="w-full px-4 py-5 sm:px-6 lg:px-0 font-poppins text-[#444444]">
        <div className="flex justify-between w-full border-b-2 border-gray-200">
          <h4 className="w-fit text-lg md:text-xl py-3 font-medium border-b-4 border-[#EF5612]">
            New
            <span className="text-[#EF5612] px-1">Arrivals </span>
          </h4>

          <div className="text-xs md:text-sm p-2">
            <a href="#">View All &gt;&gt;</a>
          </div>
        </div>

        <ScrollMenu>
          <div className="-mx-5 flex md:grid grid-cols-2 lg:flex py-10">
            {Fakeapi.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex m-2 p-2 rounded-lg border shadow-md">
                    <div className="p-1">
                      <Image src={profile} height={30} width={30} />
                    </div>
                    <div className="p-5">
                      <Image src={men} />
                    </div>
                  </div>
                  <div className="flex justify-between px-5 md:px-10">
                    <p className="text-xs md:text-sm text-nowrap">
                      {items.Ques}
                    </p>
                    <BsHeart size={20} />
                  </div>
                  <div className="flex px-5 md:px-10">
                    <p className="text-xs font-semibold">{items.Answers}</p>
                    {/* <p className="text-xs">{items.Answer}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollMenu>
      </div>
    </section>
  );
};

export default NewArrivals;
