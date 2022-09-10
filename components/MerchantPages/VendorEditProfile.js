import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";

const VendorEditProfile = () => {
  return (
    <>
      <form className="">
        <section
          className="card flex flex-col py-2 space-2"
          style={{ "border-radius": "0px" }}
        >
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
                Name
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
                required
              />
            </div>
          </div>
        </section>
        {/* Store Information */}
        <h2 className="card text-2xl border-b-2 mt-10 rectCard">
          Store Information
        </h2>
        <section className="card rectCard flex flex-col py-2 space-2">
          <div className="flex flex-col">
            <div className="mb-2">
              <label
                htmlFor="storename"
                className="block mb-2 text-md text-gray-500"
              >
                Store Name
              </label>
              <input
                type="text"
                id="storename"
                className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                placeholder="Taylor Mason"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-md text-gray-500"
              >
                Store Description
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm 
                  text-gray-900 bg-gray-50 rounded-md border border-gray-300"
                placeholder="Takeaway Enterprice Dot Epitomic Ventures"
              ></textarea>
            </div>
            <div className="mb-2">
              <label
                htmlFor="storeAddress"
                className="block mb-2 text-md text-gray-500"
              >
                Store Address
              </label>
              <input
                type="text"
                id="whatsapp"
                className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                placeholder="+234-813-4567-567"
                required
              />
            </div>
            <div className="mb-6">
              <p>
                You have reported 4 buyers so far, would you like to review
                decisions?
              </p>
              <span className="text-red-500">CLICK HERE</span>
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
    </>
  );
};

export default VendorEditProfile;
