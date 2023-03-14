import React from "react";
import Image from "next/image";
import adidas from "../../../public/img/adidas.png";
import shirt from "../../../public/img/shirt.png";
import { useSelector } from "react-redux";
import Addmerchant from "../../../components/AdminMerchantDashboard/Addmerchant";
import Layout from "../../../components/AdminPagesLayout/Layout";
import Card from "../../../components/AdminMerchantDashboard/Card";
import CardComp from "../../../components/AdminMerchantDashboard/CardComp";
import { ProductsData } from "../../../components/prodata";
import { GrStatusGood } from "react-icons/gr";

const merchantDashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>
        <div className="card  border-b-2 mt-8 rectCard flex justify-between">
          <h2 className="text-2xl">Merchant Profile</h2>
          <Addmerchant />
        </div>

        <section className="  h-72 bg-brightPurple"></section>
        <div className="-mt-20 pl-5">
          <Image src={adidas} height={200} width={200} />
        </div>

        <section>
          <div className="-mt-24  ">
            <div className="flex justify-center  ">
              <h5 className="text-2xl flex font-poppins font-extrabold">
                Adidas{" "}
                <GrStatusGood
                  size={26}
                  className=" pt-2 font-extrabold
            pr-1 "
                />
              </h5>
            </div>
            <p className="pt-1.5 text-md poppins flex justify-center ">
              Store ID:: GC-568855
            </p>
          </div>
        </section>
        <section>
          <div className=" flex justify-between">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
          <div className=" ">
            <CardComp />
          </div>
        </section>
        <section className=" grid grid-cols-2 gap-10 mb-5 mt-10 md:grid-cols-3">
          {ProductsData.map((prod) => {
            return (
              <div key={prod.id}>
                <Image src={shirt} />
                <p>{prod.name}</p>
                <p>{prod.price}</p>
              </div>
            );
          })}
        </section>
        <section>
          <button className="w-full bg-brightRed text-center text-white h-10 rounded-md">
            View store
          </button>
        </section>
      </Layout>
    </>
  );
};

export default merchantDashboard;
