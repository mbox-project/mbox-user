import React from "react";
import Image from "next/image";
import Barchart from "../../public/images/barchart.png";
import Piechart from "../../public/images/piechart.png";

import { BsCurrencyDollar } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";

const DashboardStat = () => {
  return (
    <div>
      <section>
        <div className="flex justify-between w-3/4 px-4 py-10 text-slate-700 font-poppins">
          <div className="flex gap-2">
            <div className="w-14 h-14 p-5 bg-amber-400 rounded-full">
              <BsCurrencyDollar />
            </div>
            <div className=" gap-2">
              <div className=" text-sm text-neutral-500">Total sales</div>
              <div className=" font-bold">$23, 345, 056.30</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-14 h-14 p-5 bg-teal-600 rounded-full">
              <GiShoppingCart />
            </div>
            <div className=" gap-2">
              <div className=" text-sm text-neutral-500">Total Orders</div>
              <div className=" font-bold">4460</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-14 h-14 p-5 bg-sky-700 rounded-full">
              <BsPeople />
            </div>
            <div className=" gap-2">
              <div className=" text-sm text-neutral-500">Market Merchants</div>
              <div className=" font-bold">323</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-9 text-slate-700 font-poppins">
          <div className="p-5 w-7/12 h-fit bg-white rounded shadow-md">
            <div className="flex justify-between">
              <div className="">
                <div className=" text-slate-400">TOTAL SALES STATISTICS</div>
                <div className=" text-sm text-gray-700">
                  12.78K
                  <span className=" text-xs text-teal-500">+12.67%</span>
                </div>
              </div>
              <select className="h-9 p-2 text-xs text-slate-400 border border-slate-400 rounded">
                <option value="month" selected>
                  Month
                </option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className=" p-5 py-10">
              <Image src={Barchart} alt="Chart" />
            </div>
            <div className="flex p-5 gap-5">
              <div>Opening Stock</div>
              <div>Closing Stock</div>
            </div>
          </div>

          <div className="p-5 w-5/12 h-fit bg-white rounded shadow-md">
            <div className="flex gap-2">
              <div className="w-14 h-14 p-5 bg-sky-400 rounded-full">
                <BsPeople />
              </div>
              <div className=" gap-2">
                <div className=" text-sm text-neutral-500">Total Products</div>
                <div className=" font-bold">508</div>
              </div>
            </div>
            <div className="p-1">
              <h2 className="font-bold py-10">Visitors</h2>
              <div className="">
                <h2 className="font-bold text-center">Recent Month</h2>
                <div className=" flex justify-center">
                  <div className="w-60 h-60 p-5">
                    <Image src={Piechart} alt="Chart" />
                  </div>
                </div>
              </div>
              <div className="py-5 text-sm">
                <div className="flex my-5 gap-5">
                  <h5 className="w-1/2">
                    Affiliate Marketing <span>45%</span>
                  </h5>
                  <h5 className="w-1/2">
                    Referals <span>28%</span>
                  </h5>
                </div>
                <div className="flex gap-5">
                  <h5 className="w-1/2">
                    Social Media <span>60%</span>
                  </h5>
                  <h5 className="w-1/2">
                    Direct Link <span>45%</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardStat;
