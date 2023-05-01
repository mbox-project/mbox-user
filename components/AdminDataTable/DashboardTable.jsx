import React from "react";

const dashData = [
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
  {
    id: "GC-1285",
    name: "Savina Perks",
    store: "Giveon Crib store",
    price: "$800.80",
    status: "Delivered",
    date: "09.01.22",
    more: ". . .",
  },
];

const DashboardTable = () => {
  return (
    <section>
      <div className="w-full px-2 py-10 text-slate-700 font-poppins">
        <div className="flex justify-between border-b-2">
          <h2 className="font-bold text-center py-3">Latest orders</h2>
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
          <div>
            <table className=" table-auto w-full ">
              {dashData.map((val, key) => {
                return (
                  <tr className="h-12 text-center" key={key}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td className=" font-semibold">{val.store}</td>
                    <td>{val.price}</td>
                    <td className=" text-teal-500">{val.status}</td>
                    <td>{val.date}</td>
                    <td className=" font-extrabold">{val.more}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="flex justify-end p-5">
            <button className="text-orange-500"> View All </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTable;
