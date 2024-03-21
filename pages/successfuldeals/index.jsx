import React from "react";
import Image from "next/image";
import Layout from "../../components/PagesLayout/Layout";
import Pagenation from "../../components/Pagenation";
import shorts from "../../public/img/shorts.png";

const data = [
  {
    id: 1,
    image: shorts,
    name: "Ashewo Shorts Vintage edition",
    date: "09.01.2022",
    price: "4,850",
  },
  {
    id: 2,
    image: shorts,
    name: "Ashewo Shorts Vintage edition",
    date: "09.01.2022",
    price: "4,850",
  },
  {
    id: 3,
    image: shorts,
    name: "Ashewo Shorts Vintage edition",
    date: "09.01.2022",
    price: "4,850",
  },
  {
    id: 4,
    image: shorts,
    name: "Ashewo Shorts Vintage edition",
    date: "09.01.2022",
    price: "4,850",
  },
  {
    id: 5,
    image: shorts,
    name: "Ashewo Shorts Vintage edition",
    date: "09.01.2022",
    price: "4,850",
  },
];

const index = () => {
  const counter = data.length;

  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
        <h4 className="text-2xl font-medium mt-5">
          Succesful Deals ({counter})
        </h4>
        <form>
          <select
            id="sort"
            className="bg-gray-50 border text-gray-500 rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="date">Date</option>
            <option value="type">Type</option>
          </select>
        </form>
      </section>
      {/* Saved Content  */}
      <section className="card rectCard overflow-x-auto">
        <table className="w-full">
          <tbody className="">
            {data.map((prod) => (
              <tr key={prod.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shadow-md p-3 md:max-w-[70px] md:max-h-[65px]  bg-[#FAFAFA] rounded-md">
                      <Image
                        src={prod.image}
                        width={40}
                        height={40}
                        alt="product"
                        className="w-full md:w-auto"
                      />
                    </div>
                    <div className="ml-6">
                      <div className="text-[#444444]">{prod.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-[#444444]">{prod.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-[#444444] font-semibold">
                    +${prod.price}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button
                    type="button"
                    className="bg-[#26A17B] font-medium shadow-md shadow-[#26A17B12] py-[10px] px-[20px] text-[#FAFAFA] h-max rounded-[10px]"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Pagenation />
    </Layout>
  );
};

export default index;
