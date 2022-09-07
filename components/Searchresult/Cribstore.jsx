import React from "react";
import Image from "next/image";
import cribsimg from "../../public/images/cribsimg.png";
import starimg from "../../public/images/star.png";
import thumbsupimg from "../../public/images/thumbsup.png";
import locationimg from "../../public/images/location.png";
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
    <div>
      <p className="font-poppins">Stores that contains the search word</p>
      <div className="flex">
        <div>
          <Image src={cribsimg} />
        </div>
        <div>
          {cribStore.map((card) => {
            return (
              <div key={card.id}>
                <p>{card.name}</p>
                <p>{card.body}</p>
                <div className="flex">
                  <div>
                    <div>
                      <Image src={starimg} />
                    </div>
                    <p>{card.starno}</p>
                  </div>
                  <div>
                    <div>
                      <Image src={thumbsupimg} />
                    </div>
                    <p>{card.thumbsupno}</p>
                  </div>
                  <div>
                    <div>
                      <Image src={locationimg} />
                    </div>
                    <p>{card.locationno}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Cribstore;
