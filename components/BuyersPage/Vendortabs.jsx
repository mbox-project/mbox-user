import React, {useEffect} from "react";
import Label from "../Label";
import { useState } from "react";
import SearchSelect from "../combobox";
import { banks } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { convertToVendor } from "../../store/auth/vendorService";
import { toastify } from "../../helpers";
import { getProductCategories } from "../../store/product/productService";
import { LoadingOutlined } from "@ant-design/icons";

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
  const onSelectCategory = (e) => {
    setData((prevData) => ({
      ...prevData,
      catId: e.target.value
    }));
  };
  return (
    <form>
      <section
        className="card flex flex-col py-2 space-2"
        style={{ "border-radius": "0px" }}
      >
        <div className="flex flex-col">
        <div className="mb-10 mt-3">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm text-gray-500"
                >
                  Please choose a store category
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
        
        </div>
      </section>
      <div className="flex justify-end mt-5 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (
              !data.catId ||
              !data.email 
             
            ) {
              toastify.alertWarning('Fill all fields');
              return;
            }
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
    const { name, value } = e.target;
    if (name === 'storeName' && value.length > 30) {
      return; // Do not update state if exceeds 30 characters for store name
    } else if (name === 'storeDescription' && value.length > 100) {
      return; // Do not update state if exceeds 100 characters for store description
    }
    // Check if the value exceeds the character limit
    
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    
  };
  return (
    <form>
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
            <p className={ data?.storeName?.length === 30? " text-red-700" : " text-lime-800"}
              >Characters Remaining: {30 - (data?.storeName?.length || 0)}</p>
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
              <p className={ data?.storeDescription?.length === 100? " text-red-700" : " text-lime-800"}
              >Characters Remaining: {100 -( data?.storeDescription?.length || 0)}</p>
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
              placeholder="No 1. lekki lagos, Nigeria"
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
            if (
              !data.storeName ||
              !data.storeAbbrevation ||
              !data.storeDescription ||
              !data.storeAddress
            ) {
              toastify.alertWarning('Fill all fields');
              return;
            }
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
export const BankInformation = ({ data, setData, showModal }) => {
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
  };
  const handleSubmit = (e, data) => {
    e.preventDefault();
    setLoading(true)
    
    dispatch(convertToVendor(data))
       .unwrap()
       .then((res) => {
        if(res?.responseCode === 500){
          toastify.alertError("Could not convert to vendor", 300)
          return;
        }
        showModal();
        setLoading(false)
        }
    )
    .catch((error) =>{
      toastify.alertError("Could not convert to vendor", 300)
       console.log(error)
       setLoading(false)
      });
     
  };
  
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, data)} className="">
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
                setSelected={handleSearchSelectChange} 
              />
            </div>
          
            <div className="mb-2 px-12 pt-3">
              <Label
                htmlFor="acctname"
                className="text-[#C1C1C1]  text-xs"
                title="Account Name"
              />
              <input
              name="accountName"
                type="text"
                id="acctname"
                value={data?.accountName}
                onChange={handleChange}
                className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                placeholder="Taylor Mason"
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
           {
            loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : ' Become a vendor'
           }
          </button>
        </div>
      </form>
     
    </>
  );
};
