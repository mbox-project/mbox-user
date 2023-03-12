import React from "react";
import Image from 'next/image'
import adidas from '../../../public/img/adidas.png'
import { useSelector } from "react-redux";
import Layout from "../../../components/AdminPagesLayout/Layout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {GrStatusGood } from "react-icons/gr";

const merchantDashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>
        <div className="card  border-b-2 mt-8 rectCard flex justify-between">
        <h2 className="text-2xl">Merchant Profile</h2>
        <div className="flex  ">
        <button className="bg-brightRed flex space-x-2 text-white p-3 rounded-md ">
        <AiOutlinePlusCircle size={20} className="pt-1 pr-1" />
          Add a new merchant</button>
        </div>    
           </div>

           <section className="  h-72 bg-brightPurple"></section>
          
           <section>
           <div className="-mt-44 pl-5">
            <Image src={adidas} size={0.2}/>
           </div>
            <div className="flex justify-center -mt-44 ">
            <h5 className="text-2xl flex font-poppins font-extrabold">Adidas <GrStatusGood size={26} className=" pt-2 font-extrabold
            pr-1 " />
            </h5>
            </div>
           </section>
      </Layout>
    </>
  );
};

export default merchantDashboard;
