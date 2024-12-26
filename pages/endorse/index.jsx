import React, { useState, useEffect } from "react";
import Layout from "../../components/PagesLayout/Layout";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import baseURL from "../../config/api";
import { toastify } from "../../helpers";
import { endorseVendor, getEndorsements } from "../../store/endorseandreport/endorseandreport";
import { LoadingOutlined } from "@ant-design/icons";
import CustomAlertModal from "../../Utils/CustomAlertModal";

const endorse = () => {
  const dispatch = useDispatch();
  const [endorse, setEndorse] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [loading, setLoading] = useState(false);

  const [endorseData, setData] = useState({
    storeName: "",
    comment: "",
    endorse: 1,
  });

  const onChangeInput = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getEndorsements({ pageNumber, pageSize }))
      .unwrap()
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

    dispatch(endorseVendor(endorseData)).unwrap()
    .then(()=>{
      CustomAlertModal.show(
        "success",
        "Endorsement",
        "You have successfully endorsed this merchant"
      )
      // Update endorsements after successful endorsement
      dispatch(getEndorsements({ pageNumber, pageSize }))
        .unwrap()
        .then((res) => {
          console.log(res);
          setEndorse(res.data?.items?.$values || []);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    })
    .catch((err)=>{
      setLoading(false);
      CustomAlertModal.show("error", "Endorsement failed", err.message);
    })

   
  };

  return (
    <>
      <Layout>
        <section className="card rectCard flex justify-between items-center !bg-[#FAFAFA] text-lg border-b-2 mt-8 md:flex-row ">
          <div className="mt-5">
            <h4 className="text-xl font-medium">Endorse a Store</h4>
          </div>
        </section>

        <section className="!bg-[#FAFAFA]">
          <form onSubmit={handleEndorseForm}>
            <div className="py-5 rounded-sm poppins">
              <div className="px-4 pt-3 ">
                <Label
                  className="text-[#C1C1C1]  text-sm"
                  htmlFor="text"
                  title="Store Name"
                />
                <Input
                  name="storeName"
                  type="text"
                  placeHolder="Giveon's Crib"
                  className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 md:border-2  md:rounded-md shadow-sm rounded-none"
                  //value={storeName}
                  onChange={onChangeInput}
                  required
                />
              </div>
              <div className="px-4 pt-3 ">
                <Label
                  className="text-[#C1C1C1]  text-sm"
                  htmlFor="text"
                  title="Comment (Optional)"
                />
                <textarea
                  name="comment"
                  type="text"
                  placeHolder=""
                  onChange={onChangeInput}
                  className="w-full p-1 md:p-2 lg:py-12  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 md:border-2  md:rounded-md shadow-sm rounded-none"
                  required
                />
              </div>
              <div className="flex justify-end px-5">
                <Button
                  type="submit"
                  className="w-24 py-2 my-4 text-base text-white rounded-md shadow-lg bg-brightRed left-96 poppins"
                >
                  {loading ? (
                    <LoadingOutlined style={{ fontSize: 24 }} spin />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </section>

        <div>
          <section className="card rectCard flex justify-between items-center text-[#26A17B] !bg-[#FAFAFA] text-lg border-b-2 mt-8">
            <div className="mt-5">
              <h4 className="text-xl font-medium">Endorsed Businesses</h4>
            </div>
            <form>
              <select
                id="sort"
                className="border border-[#26A17B] text-sm rounded-md p-2.5 px-6 mt-5"
              >
                <option disabled selected>
                  Sort By
                </option>
                <option value="d">date</option>
                <option value="c">type</option>
              </select>
            </form>
          </section>

          <section className="flex flex-col bg-[#FAFAFA] px-5 py-5 space-y-5">
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
        <CustomAlertModal />
      </Layout>
    </>
  );
};
export default endorse;
