import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, DatePicker, Space } from "antd";
import moment from "moment";
import Input from "../Input";
import Label from "../Label";
import { toastify } from "../../helpers";
import { LoadingOutlined } from "@ant-design/icons";
import { categoryRequest } from "../../store/PromoteStore/promoteStoreService";
import { getUserById, getUserProfile } from "../../store/users/userService";

const CategoryListingModal = ({ open, setOpen }) => {
  const vendorId = useSelector((state) => state.auth.user.userId);
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    vendorId: vendorId,
    duration: 0,
    startDate: "",
    endDate: "",
    totalPrice: 0,
    discountPercent: 0,
  });

 

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequest({
      ...request,
      [name]:
        name === "duration" ||
        name === "totalPrice" ||
        name === "discountPercent"
          ? parseFloat(value)
          : value,
    });
  };

  const handleDateChange = (name) => (date, dateString) => {
    setRequest({
      ...request,
      [name]: moment(date).toISOString(),
    });
  };

  const postBannerRequest = () => {
    setLoading(true);
    dispatch(categoryRequest(request))
      .unwrap()
      .then(() => {
        toastify.alertSuccess("Banner request succesful");
        setLoading(false);
        setOpen(false)
      })
      .catch(() => {
        toastify.alertError("Banner request failed");
        setLoading(false);
        setOpen(false)
      });
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      className="!p-0"
    >
      <div className="border rounded-md shadow-lg">
        <div className="bg-brightRed ">
          <p className=" py-4 px-4 text-white font-poppins text-xl">
            Category listing request form
          </p>
        </div>
        <div className="bg-lightPink ">
          <p className=" py-3 px-4 font-poppins text-xs text-[#F16A2D]">
            Boost your visibility with category listing! Simply fill out the
            form and our customer care team will get back to you shortly. Only
            $1 per day.
          </p>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className=" px-4 pt-4">
            <Label
              className="text-[#444444] font-medium md:text-base text-sm"
              htmlFor="days"
              title="Number of days"
            />
            <Input
              name="duration"
              type="number"
              placeHolder="4"
              onChange={handleInputChange}
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] bg-[#FAFAFA] border-1  md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>
          <div className=" px-4 pt-2">
            <Label
              className="text-[#444444] font-medium md:text-base text-sm"
              htmlFor="starts"
              title="Starts on:"
            />
            <DatePicker
              name="startDate"
              onChange={handleDateChange("startDate")}
              required
              className="block !py-2 mt-2 !bg-transparent !border-1 border-[#9F9F9F] text-brightRed hover:border-brightRed focus:border-brightRed"
            />
          </div>
          <div className=" px-4 pt-2">
            <Label
              className="text-[#444444] font-medium md:text-base text-sm"
              htmlFor="ends"
              title="Ends on:"
            />
            <DatePicker
              name="endDate"
              onChange={handleDateChange("endDate")}
              required
              className="block !py-2 mt-2 !bg-transparent !border-1 border-[#9F9F9F] text-brightRed hover:border-brightRed focus:border-brightRed"
            />
          </div>
          <div className=" px-4 pt-3">
            <Label
              className="text-[#444444] font-medium md:text-base text-sm"
              htmlFor="price"
              title="Total price:"
            />
            <Input
              name="totalPrice"
              type="text"
              placeHolder="N1"
              onChange={handleInputChange}
              className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins  mt-2 border-[#9F9F9F] border-1 bg-[#FAFAFA] md:border-2  md:rounded-md shadow-sm rounded-none"
              required
            />
          </div>

          <p className=" font-poppins font-semibold text-sm text-[#717171] px-4 pt-4 ">
            Select Payment Option
          </p>
          <div className="flex justify-between pt-4 px-[5%]">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="px-5 text-xs poppins pt-1 text-semibold">
                MBOX-Wallet -$3,050
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="w-full flex gap-2 my-4 rounded-md shadow-lg bg-[#034694] p-[0.5rem] text-[#FAFAFA] text-base poppins"
                type="submit"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.224 12.7952C16.224 13.0528 16.0151 13.2619 15.7573 13.2619H12.7783V16.2411C12.7783 16.4989 12.5692 16.7078 12.3116 16.7078C12.054 16.7078 11.8449 16.4989 11.8449 16.2411V13.2619H8.86529C8.60767 13.2619 8.3986 13.0528 8.3986 12.7952C8.3986 12.5376 8.60767 12.3285 8.86529 12.3285H11.8449V9.34929C11.8449 9.09167 12.054 8.8826 12.3116 8.8826C12.5692 8.8826 12.7783 9.09167 12.7783 9.34929V12.3287H15.7573C16.0151 12.3285 16.224 12.5376 16.224 12.7952V12.7952ZM20.2447 12.7952C20.2447 14.914 19.4194 16.9063 17.9211 18.4045C16.3745 19.9511 14.3431 20.7244 12.3118 20.7244C10.2805 20.7244 8.2491 19.9512 6.70249 18.4045C5.20421 16.9062 4.37891 14.9139 4.37891 12.7952C4.37891 10.676 5.20421 8.68411 6.70249 7.18588C8.20076 5.68761 10.1931 4.8623 12.3118 4.8623C14.4305 4.8623 16.4229 5.68761 17.9211 7.18588C19.4194 8.68397 20.2447 10.6761 20.2447 12.7952ZM19.3113 12.7952C19.3113 10.9255 18.5833 9.16752 17.2611 7.84538C15.9392 6.52324 14.1813 5.79522 12.3113 5.79522C10.4414 5.79522 8.68365 6.52324 7.36151 7.84538C6.03937 9.16752 5.31135 10.9253 5.31135 12.7952C5.31135 14.6649 6.03937 16.4229 7.36151 17.745C10.0909 20.4739 14.5317 20.4742 17.2607 17.745C18.5828 16.4227 19.3108 14.6651 19.3108 12.7952H19.3113Z"
                    fill="#FAFAFA"
                    stroke="#FAFAFA"
                    stroke-width="0.793103"
                  />
                </svg>
                Fund Wallet
              </button>
            </div>
          </div>

          <button
            className="w-full my-4 rounded-md shadow-lg bg-brightRed py-[0.5rem] text-white text-base poppins"
            onClick={postBannerRequest}
          >
            {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default CategoryListingModal;
