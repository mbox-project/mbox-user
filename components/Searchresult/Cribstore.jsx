import React from "react";
import Image from "next/image";
import cribsimg from "../../public/images/cribsimg.png";
import starimg from "../../public/images/star.png";
import thumbsupimg from "../../public/images/thumbsup.png";
import locationimg from "../../public/images/location.png";
import Button from "../Button";

const cribStore = [
  {
    id: "C1",
    name: "Giveon’s Crib Store",
    body: "Giveon’s Crib Store is your number 1 online hybrid store that has all the answers to your everything fashion items for men, women and others. ",
    star: starimg,
    thumbsup: thumbsupimg,
    location: locationimg,
    starno: "4.8",
    thumbsupno: "3,525 Endorsement",
    locationno: "Lagos, Nigeria",
  },
];

const Cribstore = () => {
  return (
    <div className="bg-deepGray">
      <p className="font-poppins ml-20 py-8 store text-lg ">
        Stores that contains the search word
      </p>
      <div className="flex crib  pt-12  border-2 mx-20 rounded-md">
        <div className="ml-12">
          <Image width={400} height={300} src={cribsimg} />
        </div>
        <div>
          {cribStore.map((card) => {
            return (
              <div key={card.id} className="">
                <p className="text-black text-2xl pt-2">{card.name}</p>
                <p className="pt-4 max-w-xl text-sm leading-loose lightGrayColor">
                  {card.body}
                </p>
                <div className="flex pt-5">
                  <div className="flex pt-3">
                    <div>
                      <Image src={starimg} />
                    </div>
                    <p className="pl-3">{card.starno}</p>
                  </div>
                  <div className="flex">
                    <div className="pl-3">
                      <Image width={30} height={30} src={thumbsupimg} />
                    </div>
                    <p className="pl-3 pt-3">{card.thumbsupno}</p>
                  </div>
                  <div className="flex">
                    <div className="pl-3">
                      <Image src={locationimg} />
                    </div>
                    <p className="pl-3 pt-3">{card.locationno}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Button className="w-full bg-orange-600 h-12 poppins  mb-0 lg:mb-4 rounded-lg text-white text-lg   mt-5">
            Endorse Giveon’s Crib
          </Button>
        </div>
      </div>
      <div
        className="flex crib mt-10
       pt-12  border-2 mx-20 rounded-md"
      >
        <div className="ml-12">
          <Image width={400} height={300} src={cribsimg} />
        </div>
        <div>
          {cribStore.map((card) => {
            return (
              <div key={card.id} className="">
                <p className="text-black text-2xl pt-2">{card.name}</p>
                <p className="pt-4 max-w-xl text-sm leading-loose lightGrayColor">
                  {card.body}
                </p>
                <div className="flex pt-5">
                  <div className="flex pt-3">
                    <div>
                      <Image src={starimg} />
                    </div>
                    <p className="pl-3">{card.starno}</p>
                  </div>
                  <div className="flex">
                    <div className="pl-3">
                      <Image width={30} height={30} src={thumbsupimg} />
                    </div>
                    <p className="pl-3 pt-3">{card.thumbsupno}</p>
                  </div>
                  <div className="flex">
                    <div className="pl-3">
                      <Image src={locationimg} />
                    </div>
                    <p className="pl-3 pt-3">{card.locationno}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Button className="w-full bg-orange-600 h-12 poppins  mb-0 lg:mb-4 rounded-lg text-white text-lg   mt-5">
            Endorse Giveon’s Crib
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Cribstore;
