import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import baseURL from "../../config/api";
import { toastify } from "../../helpers";
import { getReports } from "../../store/endorseandreport/endorseandreport";
import { getVendor, reportBuyer } from "../../store/auth/vendorService";
import { LoadingOutlined } from "@ant-design/icons";

const BuyerReport = () => {
  const dispatch = useDispatch();
  const [endorse, setEndorse] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [loading, setLoading] = useState(false);
  const [storeN, setStoreN] = useState('')

  const [reportData, setData] = useState({
    fullname: "",
    comment: "",
    storeName: '',
    reportBusiness: false
  });

  const onChangeInput = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getVendor())
      .unwrap()
      .then((response) => {
        setStoreN(response?.data?.storeName);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        toastify.alertError("Could not get Profile data", 300);
      });
  }, [dispatch]);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      storeName: storeN,
    }));
  }, [storeN]);

  useEffect(() => {
    dispatch(getReports({ pageNumber, pageSize })).unwrap()
      .then((res) => {
        console.log(res);

        console.log(res.data?.items?.$values);
        setEndorse(res.data?.items?.$values || []);
      })
      .catch((error) => console.log(error));
  }, [dispatch, pageNumber, pageSize]);

  const handleEndorseForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}Report/buyer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${typeof window !== "undefined" ? sessionStorage.getItem("token") : null}`,
        },
        body: JSON.stringify(reportData),
      });
  
      if (response.ok) {
        const result = await response.json(); // Adjusted to parse JSON response
        if (result === "true") {
          toastify.alertSuccess("Report successful");
          dispatch(getReports({ pageNumber, pageSize })).unwrap()
            .then((res) => {
              console.log(res);
              console.log(res.data?.items?.$values);
              setEndorse(res.data?.items?.$values || []);
            })
            .catch((error) => console.log(error));
        } else {
          toastify.alertError(result.message || "An error occurred");
        }
      } else {
        const errorResult = await response.text();
        toastify.alertError(errorResult || "An error occurred");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toastify.alertError("Failed to fetch");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Layout>
        <div className="bg-white rounded-b-3xl">
          <section className="card !shadow-none rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row">
            <div className="mt-5">
              <h4 className="text-xl font-medium">Report A Vendor</h4>
            </div>
          </section>

          <section className="rounded-b-3xl">
            <form onSubmit={handleEndorseForm}>
              <div className="py-5 md:px-10 poppins rounded-sm">

                <div className="px-4 pt-3">
                  <Label
                    className="text-[#444444] font-medium text-sm"
                    htmlFor="fullname"
                    title="Buyer's Name"
                  />
                  <Input
                    name="fullname"
                    type="text"
                    placeholder="johndoe"
                    className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#9F9F9F] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    onChange={onChangeInput}
                    required
                  />
                </div>
                <div className="px-4 pt-3">
                  <Label
                    className="text-[#444444] font-medium text-sm"
                    htmlFor="buyerNumber"
                    title="Buyer's Phone number"
                  />
                  <Input
                    name="buyerNumber"
                    type="number"
                    placeholder="0812345"
                    className="w-full p-1 md:p-2 lg:py-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#9F9F9F] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    onChange={onChangeInput}
                    required
                  />
                </div>
                <div className="px-4 pt-3">
                  <Label
                    className="text-[#444444] font-medium text-sm"
                    htmlFor="comment"
                    title="Comment"
                  />
                  <textarea
                    name="comment"
                    type="text"
                    placeholder=""
                    onChange={onChangeInput}
                    className="w-full h-36 resize-none p-1 md:p-2 focus:outline-none pr-12 text-lg lg:text-sm font-poppins mt-2 border-[#9F9F9F] border-1 md:border-2 md:rounded-md shadow-sm rounded-none"
                    required
                  />
                </div>
                <div className="flex justify-end px-5">
                  <Button
                    type="submit"
                    className="w-24 my-4 rounded-md shadow-lg bg-[#F90808] py-2 text-white left-96 text-base poppins"
                  >
                    {loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : "Submit"}
                  </Button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="bg-white">
          <section className="card !shadow-none rectCard flex justify-between items-center text-[#F90808] text-lg border-b-2 mt-8">
            <div className="mt-5">
              <h4 className="text-xl font-medium">Reported Businesses</h4>
            </div>
            <form>
              <select
                id="sort"
                className="border border-[#F90808] text-sm rounded-md p-2.5 px-6 mt-5"
              >
                <option disabled selected>
                  Sort By
                </option>
                <option value="d">date</option>
                <option value="c">type</option>
              </select>
            </form>
          </section>

          <section className="flex flex-col px-5 py-5 space-y-5">
            <div className="flex justify-between py-2 text-[#9A9A9A] border-b-2">
              <div>Store Name</div>
              <div>Date & Time</div>
              <div>Comments</div>
            </div>

            {endorse?.map((endorsement, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>{endorsement?.storeName}</div>
                <div>{endorsement?.dateTime}</div>
                <div>{endorsement?.comment}</div>
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default BuyerReport;
