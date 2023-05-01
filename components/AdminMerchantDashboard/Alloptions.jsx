import React from "react";
import Image from "next/dist/client/image";
import mboximg from "../../public/images/mboximg.png";
import AdminApi from "./AdminApi";
import Input from "../Input";
const Alloptions = () => {
  return (
    <>
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
                <p>{items.deals}</p>
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
                <p>{items.deals}</p>
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
                <p>{items.deals}</p>
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
                <p>{items.deals}</p>
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
                <p>{items.deals}</p>
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
                <p>{items.deals}</p>
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
    </>
  );
};
export default Alloptions;
