import React from "react";
import Layout from "../../../components/BuyersLayout/Layout";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";

const Index = () => {
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        <form className="">
          <section className="card flex flex-col py-2 space-2 rectCard">
            <div className="flex justify-between p-3">
              <h4 className="text-gray-500">Profile Picture</h4>
              <div className="flex space-x-2">
                <span className="rounded-full p-1 bg-blue-100">
                  <BiEditAlt className="text-blue-400" />
                </span>
                <span className="rounded-full p-1 bg-red-50">
                  <BiTrashAlt className="text-brightRed" />
                </span>
              </div>
            </div>
            <div className="p-16 mt-5 mb-3 bg-gray-200 w-48 profilePics">
              <BsFillCameraFill size={60} className="text-white" />
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-md text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
                  placeholder="Taylor Mason"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                  placeholder="Taylor Mason"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="whatsapp"
                  className="block mb-2 text-md text-gray-500"
                >
                  WhatsApp no
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                  placeholder="+234-813-4567-567"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="sex"
                  className="block mb-2 text-md text-gray-500"
                >
                  Sex
                </label>
                <select
                  id="sex"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                >
                  <option disabled selected>
                    select your gender
                  </option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="address"
                  className="block mb-2 text-md text-gray-500"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                  placeholder="No 5 idumota Lagos"
                />
              </div>
            </div>
          </section>

          {/* Bank Information */}
          <h2 className="card text-2xl border-b-2 mt-10 rectCard">
            Bank Information
          </h2>
          <section className="card flex flex-col py-2 space-2 rectCard">
            <div className="flex flex-col">
              <div className="mb-2">
                <label
                  htmlFor="bankname"
                  className="block mb-2 text-md text-gray-500"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankename"
                  className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                  placeholder="MBOX Bank"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="acctname"
                  className="block mb-2 text-md text-gray-500"
                >
                  Account Name
                </label>
                <input
                  type="text"
                  id="acctname"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                  placeholder="Taylor Mason"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="acctno"
                  className="block mb-2 text-md text-gray-500"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  id="acctno"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                  placeholder="0036789412"
                />
              </div>
              <div className="mb-6">
                <p>
                  Please ensure the{" "}
                  <span className="text-red-500">ACCOUNT NAME</span> correspond
                  with the name given above in the
                  <span className="text-red-500"> PERSONAL INFORMATION</span>
                </p>
              </div>
            </div>
          </section>
          <div className="flex justify-end mt-5 ">
            <button
              type="submit"
              className="text-lg p-3 bg-brightRed text-white rounded-md w-44"
            >
              Save
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Index;
