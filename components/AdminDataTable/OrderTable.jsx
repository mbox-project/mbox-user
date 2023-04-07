import React, { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";

const data = [
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Delivered",
    date: "09.01.2023",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Cancelled",
    date: "09.01.2023",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Pending",
    date: "09.01.2023",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Delivered",
    date: "09.01.2023",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Delivered",
    date: "09.01.2023",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    storeName: "Giveon's Crib Store",
    total: "$800.80",
    status: "Delivered",
    date: "09.01.2023",
  },
  // Add more data items here...
];

const OrderTable = () => {
  const [page] = useState(1);
  const itemsPerPage = 10; // Change this to the desired number of items per page

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <section>
      <div className=" w-full bg-white  text-slate-700 font-poppins rounded-md">
        <div className="flex justify-between p-5 border-b">
          <div>
            <h2 className="p-2 text-xl font-medium">All Orders</h2>
          </div>
          <div className="flex gap-10">
            <div>
              <select className=" w-40 h-9 p-2 text-sm text-slate-400 border border-slate-400 bg-neutral-100 rounded">
                <option value="sort-by" selected>
                  All Merchants
                </option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="status">Status</option>
                <option value="day">Day</option>
              </select>
            </div>
            <div>
              <select className=" w-40 h-9 p-2 text-sm text-slate-400 border border-slate-400 bg-neutral-100 rounded">
                <option value="sort-by" selected>
                  Sort By
                </option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="status">Status</option>
                <option value="day">Day</option>
              </select>
            </div>
            <div>
              <a>
                <TbDotsVertical size={30} />
              </a>
            </div>
          </div>
        </div>

        <table className="w-full mx-5 border-collapse rounded-b-md">
          <thead>
            <tr className="text-left text-gray-500zz border-b uppercase font-thin tracking-wider">
              <th className="p-5">ID</th>
              <th className="p-5">Name</th>
              <th className="p-5">Store Name</th>
              <th className="p-5">Total</th>
              <th className="p-5">Status</th>
              <th className="p-5">Date</th>
              <th className="p-5">Options</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="text-left text-sm">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 font-semibold">{item.storeName}</td>
                <td className="px-6 py-4">{item.total}</td>
                <td className="px-6 py-4">
                  {" "}
                  <span
                    className={`p-1 rounded-lg ${
                      item.status === "Delivered"
                        ? "text-teal-500 bg-teal-50"
                        : item.status === "Pending"
                        ? "text-amber-500 bg-amber-50"
                        : "text-red-500 bg-red-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">
                  <span className="w-8 h-8 font-bold bg-gray-100 rounded-full flex items-center justify-center">
                    ...
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
