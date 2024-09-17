import React from "react";
import Label from "../Label";
import { useState, useEffect } from "react";
import SearchSelect from "../combobox";
import { banks } from "../data";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import UploadProfileImages from "../antd/uploadProfile";
import { toastify } from "../../helpers";
import { LoadingOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import UpdateProfileImages, { props } from "../../Utils/uploadImage";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  getUserProfile,
  ResetUserPassword,
  UpdateUserProfile,
} from "../../store/users/userService";

export const PersonalDetails = ({ data, setData, setActiveKey }) => {
  const dispatch = useDispatch();
  const [pass, setPass] = useState({
    oldPassowrd: "",
    newPassowrd: "",
    confirmPassword: "",
  });
  const [passLoad, setPassLoad] = useState(false);

  const [res, setRes] = useState("");

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      profilePicture: res,
    }));
  }, [res, setData]);
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPass((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const changePassword = () => {
    setPassLoad(true);
    dispatch(ResetUserPassword(pass))
      .unwrap()
      .then(() => {
        message.success("Password changed");
        setPassLoad(false);
      })
      .catch(() => {
        message.error("password change failed");
        setPassLoad(false);
      });
  };

  return (
    <form>
      <section
        className="card flex flex-col py-2 !px-7"
        style={{ borderRadius: "0px" }}
      >
        <div className="flex justify-between p-3">
          <h4 className="text-gray-500">Profile Image</h4>
          <UpdateProfileImages setData={setRes} />
        </div>
        <div className="p-2 flex justify-center items-center h-48 mt-5 mb-3 bg-gray-200 w-48 profilePics">
          {data?.profilePicture ? (
            <Image
              src={data?.profilePicture}
              alt="Profile Image" // Adding alt attribute
              height={300}
              width={300}
              className=" rounded-full"
            />
          ) : (
            <BsFillCameraFill size={60} className="text-white" />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <div className="mb-2 mt-4">
            <label htmlFor="name" className="block mb-2 text-md text-gray-500">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
              placeHolder="Taylor Mason"
              value={data?.fullname || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-md text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Taylor Mason"
              value={data?.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <Label
              className="text-[#444444] font-medium text-sm"
              htmlFor="buyerNumber"
              title="WhatsApp no"
            />
            <PhoneInput
              country={"ng"}
              onlyCountries={["ng"]}
              containerClass="!w-full !h-full "
              inputClass="phone-input-input !w-full !border-2 !border-[#9F9F9F] !md:rounded-md !h-[43px]"
              className=" "
              value={data.phoneNumber}
              onChange={(value) =>
                setData((prevState) => ({
                  ...prevState,
                  phoneNumber: value,
                }))
              }
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-md text-gray-500">
              Sex
            </label>
            <select
              id="gender"
              value={data.gender}
              onChange={handleInputChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5 hover:cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-md text-gray-500">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Taylor Mason"
              value={data?.address || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          {/************PASSWORD CHANGE********/}
          <div className="mb-2">
            <label
              htmlFor="oldPassowrd"
              className="block mb-2 text-md text-gray-500"
            >
              Old Password
            </label>
            <input
              type="text"
              id="oldPassowrd"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Old Password"
              value={pass.oldPassowrd}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="newPassowrd"
              className="block mb-2 text-md text-gray-500"
            >
              New Password
            </label>
            <input
              type="text"
              id="newPassowrd"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Old Password"
              value={pass.newPassowrd}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-md text-gray-500"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmPassword"
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="New Password"
              value={pass.confirmPassword}
              onChange={handlePasswordChange}
              required
            />
            <div className=" w-full flex justify-end p-3">
              <span
                className=" font-medium text-sm underline text-red-500 cursor-pointer"
                onClick={changePassword}
              >
                Change Password
              </span>
              <LoadingOutlined
                style={{ fontSize: 20 }}
                spin
                className={`${passLoad ? "" : " hidden"}`}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end mt-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveKey("2");
          }}
          className="text-lg p-3 bg-brightRed text-white rounded-md w-44"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export const BankInformation = ({ data, setData }) => {
  const dispatch = useDispatch();
  const [bankName, setBankName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(data);
  };

  // Function to handle SearchSelect change
  const handleSearchSelectChange = (selectedBank) => {
    setBankName(selectedBank);
    setData((prev) => ({
      ...prev,
      bankName: selectedBank.name, // Assuming 'name' is the property containing the bank name
    }));
    console.log(bankName);
  };
  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    dispatch(UpdateUserProfile(data))
      .unwrap()
      .then((action) => {
        toastify.alertSuccess("Updated profile successfully");
        dispatch(getUserProfile());
        setLoading(false);
      })
      .catch((error) => {
        toastify.alertError(error, 3000);
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, data)} className="">
        <h2 className="card text-2xl border-b-2 mt-10 rectCard">
          Bank Information
        </h2>
        <section className="card flex flex-col py-2 space-2 rectCard">
          <div className="flex flex-col">
            <div className=" px-12 pt-3">
              <Label
                className="text-[#C1C1C1]  text-xs"
                htmlFor="text"
                title="Account Number"
              />
              <input
                name="accountNumber"
                type="number"
                placeholder="1357 0245 6456 9981"
                className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] border-1 bg-white md:border-2  md:rounded-md shadow-sm rounded-none"
                onChange={handleChange}
                required
                value={data?.accountNumber}
              />
            </div>
            <div className="px-12 pt-3">
              <Label
                className="text-[#C1C1C1]  text-xs"
                htmlFor="text"
                title="Bank Name"
              />
              <SearchSelect
                data={banks}
                selected={data?.bankName || bankName}
                setSelected={handleSearchSelectChange} // Pass the handleSearchSelectChange function
              />
            </div>

            <div className="mb-2 px-12 pt-3">
              <Label
                htmlFor="acctname"
                // className="block mb-2 text-md text-gray-500"
                className="text-[#C1C1C1]  text-xs"
                title="Account Name"
              />
              <input
                type="text"
                id="acctname"
                name="accountName"
                onChange={handleChange}
                className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                placeholder="Taylor Mason"
                value={data?.accountName}
              />
            </div>

            <div className="mb-6 mx-auto text-center">
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
            {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </>
  );
};
