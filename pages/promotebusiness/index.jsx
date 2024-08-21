import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/PagesLayout/Layout";
import Pagenation from "../../components/Pagenation";
import shorts from "../../public/img/shorts.png";
import BannerRequestModal from "../../components/PromoteBusinessModal/BannerRequestModal";
import CategoryListingModal from "../../components/PromoteBusinessModal/CategoryListingModal";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getPromotions } from "../../store/PromoteStore/promoteStoreService";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat"; // Import the plugin
import duration from "dayjs/plugin/duration";
import { Skeleton } from "antd";

dayjs.extend(advancedFormat); // Extend dayjs with the advancedFormat plugin
dayjs.extend(duration);


const formatDuration = (startAt, endAt) => {
  const startDate = dayjs(startAt);
  const endDate = dayjs(endAt);
  
  const startDay = startDate.format("Do"); // Correctly formats day with ordinal suffix
  const endDay = endDate.format("Do");
  const month = startDate.format("MMM");

  const totalDays = endDate.diff(startDate, "day"); // Calculate the total number of days
  const weeks = Math.floor(totalDays / 7); // Get the number of full weeks
  const days = totalDays % 7; // Get the remaining days after full weeks

  // Form the duration string based on weeks and days
  const durationString = `${weeks > 0 ? `${weeks} week${weeks > 1 ? "s" : ""}` : ""}${weeks > 0 && days > 0 ? " and " : ""}${days > 0 ? `${days} day${days > 1 ? "s" : ""}` : ""}`;

  return `${startDay} - ${endDay} ${month} (${durationString})`;
};

const PromoteBusiness = () => {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [isCategoryListingModalOpen, setIsCategoryListingModalOpen] =
    useState(false);
    const [promoteData, setPromoteData] = useState([]);
    const dispatch = useDispatch()

const getPromotion = () =>{
  setLoading(true)
  dispatch(getPromotions()).unwrap()
  .then((res)=>{
    setPromoteData(res?.data?.$values)
    setLoading(false)
  })
  .catch(()=>{
    setLoading(false)
  })
}

    useEffect(() => {

      getPromotion()
     
    }, []);

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
              {
                  loading ? (
                    <Skeleton active/>
                  ):(
                    <tbody className="">
                    {promoteData?.map((activity, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[#444444] font-medium">
                            { activity.promoteAdsType === 1 ?
                             "BannerAds" :"CategoryListing"
                            }
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[#444444] font-medium">
                            {
                            activity.promoteAdsType === 1 ? 
                            "Store Advert":
                             "Landing Page"
                            }
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[#444444] font-medium">
                          {formatDuration(activity.startAt, activity.endAt)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  
              </tbody>
                  )}
              
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

export default PromoteBusiness;
