import React from "react";
import Label from "../Label";
import { useState, useEffect } from "react";
import SearchSelect from "../combobox";
import { banks } from "../data";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateVendor } from "../../store/auth/vendorService";
import UploadProfileImages from "../antd/uploadProfile";
import { getProductCategories } from "../../store/product/productService";
import { toastify } from "../../helpers";

export const PersonalDetails = ({ data, setData, setActiveKey }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories())
      .unwrap()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("effect");
  }, []);
  const { categories } = useSelector((state) => state.product);
  const [res, setRes] = useState();
  const onSelectCategory = (e) => {
    setData((prevData) => {
     const proUpdate = {
      ...prevData,
      categoryId: e.target.value,
      imageUrl: res?.imageUrl
     }
     return {...proUpdate}
    });
  };
  return (
    <form>
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
        <UploadProfileImages setData={setRes}/>
        <div className="flex flex-col">
        <div className="mb-2 mt-4">
            <label htmlFor="name" className="block mb-2 text-md text-gray-500">
              Full Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
              placeholder="Taylor Mason"
              value={data?.fullName}
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
              value={data?.email}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="category"
              className="block mb-2 text-md text-gray-500"
            >
              Category
            </label>
            <select
                  name="category"
                  id="category"
                  value={data?.catId}
                  onChange={onSelectCategory}
                  placeholder="select category"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  {categories.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
          </div>
        </div>
      </section>
      <div className="flex justify-end mt-5 ">
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

export const StoreInformation = ({ data, setData, setActiveKey }) => {
  const handleChange = (e) => {
    setData((prev) => {
      const update = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return { ...update };
    });
    console.log(data);
  };
  return (
    <form>
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
              name="storeName"
              value={data?.storeName}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Taylor Mason"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="storeAbbrevation"
              className="block mb-2 text-md text-gray-500"
            >
              Store Abbrevation
            </label>
            <input
              type="text"
              id="storeAbbrevation"
              name="storeAbbrevation"
              value={data?.storeAbbrevation}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
              placeholder="Taylor Mason"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-md text-gray-500">
              Store Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="storeDescription"
              value={data?.storeDescription}
              onChange={handleChange}
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
              id="storeAddress"
              name="storeAddress"
              className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
              placeholder="+234-813-4567-567"
              value={data?.storeAddress}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </section>
      <div className="flex justify-end mt-5 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveKey("3");
          }}
          className="text-lg p-3 bg-brightRed text-white rounded-md w-44"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export const BankInformation = ({ data, setData, setActiveKey }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.isLoading);
  const [bankName, setBankName] = useState({});
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
  };
  const handleSubmit = (e, data) => {
    e.preventDefault();
    dispatch(updateVendor(data))
    .unwrap()
      .then((action) => {
        toastify.alertSuccess("Updated profile successfully ");
        console.log(action);
      })
      .catch((error) => toastify.alertError(error, 3000));
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
                placeHolder="1357 0245 6456 9981"
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
            {/* <div className="mb-2">
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
            </div> */}
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
              />
            </div>
            {/* <div className="mb-2">
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
            </div> */}
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
            Save
          </button>
        </div>
      </form>
    </>
  );
};
