import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/PagesLayout/Layout";
import Pagenation from "../../components/Pagenation";
import shorts from "../../public/img/shorts.png";
import BannerRequestModal from "../../components/PromoteBusinessModal/BannerRequestModal";
import CategoryListingModal from "../../components/PromoteBusinessModal/CategoryListingModal";
import { BiChevronDown } from "react-icons/bi";

const data = [
  {
    id: 1,
    offer: "Banner Request",
    type: "Store Advert",
    duration: "11th - 25th Feb ( 2 weeks)",
  },
  {
    id: 2,
    offer: "Category Listing",
    type: "Landing Page",
    duration: "11th - 25th Feb ( 2 weeks)",
  },
  {
    id: 3,
    offer: "Banner Request",
    type: "Store Advert",
    duration: "11th - 25th Feb ( 2 weeks)",
  },
  {
    id: 4,
    offer: "Category Listing",
    type: "Landing Page",
    duration: "11th - 25th Feb ( 2 weeks)",
  },
  {
    id: 5,
    offer: "Banner Request",
    type: "Store Advert",
    duration: "11th - 25th Feb ( 2 weeks)",
  },
];

const promoteBusiness = () => {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [isCategoryListingModalOpen, setIsCategoryListingModalOpen] =
    useState(false);

  return (
    <Layout>
      <main className="">
        <section>
          <div className="card rectCard flex md:!px-8 px-4 justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
            <h4 className="text-2xl font-medium mt-5">Promote Business</h4>
            <form>
              <select
                id="sort"
                className="bg-gray-50 border text-gray-500 rounded-md p-2.5 px-6 mt-5"
              >
                <option disabled selected>
                  Sort By
                </option>
                <option value="offer">Offer</option>
                <option value="type">Type</option>
              </select>
            </form>
          </div>
          {/*  */}
          <div className="card rectCard md:!px-8 !px-4 !pb-16 !rounded-b-xl overflow-x-auto">
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onClick={() => setIsBannerModalOpen(true)}
                className="flex justify-between gap-8 items-center border-b-2 border-[#9A9A9A1A] py-3 text-[#444444] text-[20px]"
              >
                Request a banner
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.44927 1.24224C1.14855 1.54296 1.12121 2.01355 1.36725 2.34516L1.44927 2.44016L8.75581 9.74708L1.44927 17.054C1.14855 17.3547 1.12121 17.8253 1.36725 18.1569L1.44927 18.2519C1.74999 18.5527 2.22058 18.58 2.55219 18.3339L2.64719 18.2519L10.5531 10.346C10.8538 10.0453 10.8811 9.57474 10.6351 9.24313L10.5531 9.14812L2.64719 1.24224C2.31639 0.911441 1.78007 0.911441 1.44927 1.24224Z"
                    fill="#444444"
                    stroke="#444444"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
              <BannerRequestModal
                open={isBannerModalOpen}
                setOpen={setIsBannerModalOpen}
              />

              <button
                type="button"
                onClick={() => setIsCategoryListingModalOpen(true)}
                className="flex justify-between gap-8 items-center border-b-2 border-[#9A9A9A1A] py-3 text-[#444444] text-[20px]"
              >
                Request a category listing
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.44927 1.24224C1.14855 1.54296 1.12121 2.01355 1.36725 2.34516L1.44927 2.44016L8.75581 9.74708L1.44927 17.054C1.14855 17.3547 1.12121 17.8253 1.36725 18.1569L1.44927 18.2519C1.74999 18.5527 2.22058 18.58 2.55219 18.3339L2.64719 18.2519L10.5531 10.346C10.8538 10.0453 10.8811 9.57474 10.6351 9.24313L10.5531 9.14812L2.64719 1.24224C2.31639 0.911441 1.78007 0.911441 1.44927 1.24224Z"
                    fill="#444444"
                    stroke="#444444"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
              <CategoryListingModal
                open={isCategoryListingModalOpen}
                setOpen={setIsCategoryListingModalOpen}
              />
            </div>
          </div>
        </section>

        {/* Business Activity */}
        <section>
          <div className="card rectCard md:!px-8 px-4 flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
            <h4 className="text-2xl font-medium mt-5">Business Activity</h4>
            <form>
              <select
                id="sort"
                className="bg-gray-50 border text-gray-500 rounded-md p-2.5 px-6 mt-5"
              >
                <option disabled selected>
                  Sort By
                </option>
                <option value="offer">Offer</option>
                <option value="type">Type</option>
              </select>
            </form>
          </div>
          {/*  */}
          <div className="card rectCard !pb-16 !rounded-b-xl overflow-x-auto">
            <table className="w-full">
              <thead className="px-6 py-4 border-b-2 border-[#9A9A9A1A] text-[#9A9A9A] font-medium text-[18px]">
                <th className="py-4 px-6 text-start">Promotional Offer</th>
                <th className="py-4 px-6 text-start">Type</th>
                <th className="py-4 px-6 text-start">Duration</th>
              </thead>
              <tbody className="">
                {data.map((activity) => (
                  <tr key={activity.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[#444444] font-medium">
                        {activity.offer}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[#444444] font-medium">
                        {activity.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[#444444] font-medium">
                        {activity.duration}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* show more */}
            <div className="py-6 px-4 mt-4 flex md:justify-end">
              <button
                type="button"
                className="text-[#EF5612] text-[18px] flex items-center gap-2"
              >
                <p className="underline">Show more</p>
                <BiChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default promoteBusiness;
