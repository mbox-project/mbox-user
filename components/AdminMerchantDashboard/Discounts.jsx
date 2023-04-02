import React from "react";
import Image from "next/dist/client/image";
import mboximg from "../../public/images/mboximg.png";
import AdminApi from "./AdminApi";
import Input from "../Input";
import Scroll from "../../components/Scroll";
const Discount = () => {
  return (
    <section className=" mt-12  bg-white">
      <div className="">
        <div className="bg-white hidden lg:flex  px-5 lg:justify-between  ml-0  poppins pt-4 pl-4">
          <h5 className="font-medium poppins text-md">All Discount</h5>
          <form>
            <select
              id="sort"
              className="bg-gray-10 border text-gray-500 text-sm rounded-md p-2.5 px-10"
            >
              <option disabled selected>
                All Discount
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
          <form>
            <select
              id="sort"
              className="bg-gray-10 border text-gray-500 text-sm rounded-md p-2.5 px-10 "
            >
              <option disabled selected>
                Sort By
              </option>
              <option value="d">price</option>
              <option value="c">size</option>
            </select>
          </form>
        </div>
        <div className="bg-white hidden lg:flex justify-between  ml-0  poppins pt-8 pl-4">
          <div className=" flex">
            <Input type="checkbox" />
            <p className="pl-4">Tittle</p>
          </div>

          <div className=" flex">
            <p>Category</p>
          </div>
          <div className=" flex">
            <p>Discount(%)</p>
          </div>
          <div className=" flex">
            <p className="pr-6">Options</p>
          </div>
        </div>
      </div>

      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="block">
        {AdminApi.map((items) => {
          return (
            <div key={items.id} className="flex justify-between pt-4">
              <div className="flex pl-4">
                <Input type="checkbox" />
                <div className="pl-4">
                  <Image src={mboximg} height={35} width={35} />
                </div>
                <div className="pl-4">
                  <p>{items.Ques}</p>
                </div>
              </div>

              <div className="flex ">
                <p>{items.Answers}</p>
              </div>

              <div className="flex ">
                <p>{items.Gibs}</p>
              </div>
              <div className="flex pr-10 ">
                <Input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>

      <Scroll />
    </section>
  );
};
export default Discount;
