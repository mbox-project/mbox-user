import React from "react";

const CardData = [
  {
    id: 1,
    topic: "Contact",
    name: "Owner: Taylor Mason",
    email: "Taylormason@gmail.com",
    number: "(+234) 81 4567 8901, (+234) 81 4567 8901. ",
  },
  {
    id: 2,
    topic: "Address",
    name: "Randar Close, Adeniyi Street",
    email: " Agege-Ajah, Lagos, Nigeria",
    number: "Store ID:: GC-568855 ",
  },
  {
    id: 3,
    topic: "Payout Info.",
    name: "Bank Name: Marketbox Bank",
    email: "Account Name: Taylor Mason",
    number: "Account Number: 2346778345 ",
  },
];

const index = () => {
  return (
    <div className=" flex justify-between font-poppins  mt-16  p-4">
      {CardData.map((prod) => {
        return (
          <div key={prod.id}>
            <p className="py-1 text-lg font-bold text-black ">{prod.topic}</p>
            <p className=" py-1  text-xs text-[#9A9A9A] ">{prod.name}</p>
            <p className=" py-1  text-xs text-[#9A9A9A] ">{prod.email}</p>
            <p className=" py-1  text-xs text-[#9A9A9A] ">{prod.number}</p>
          </div>
        );
      })}
    </div>
  );
};
export default index;
