import React from "react";
import { RWebShare } from "react-web-share";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaRegCopy } from "react-icons/fa6";
import { toastify } from "../../helpers";
import { copyToClipboard } from "../../Utils/copyToClipboard";

const Edit = ({ data, tag }) => {
  const router = useRouter();
  const passId = () => {
    router.push(`/editInvoice/${data}`)
  }

  const handleCopy = async () => {
    await copyToClipboard(`${tag}`);
    toastify.alertSuccess("Invoice link copied", 300)
  };
  
  return (
    <div className="flex gap-5   justify-end py10 pr20 ">

      <button className="poppins transition duration-500 flex items-center p-3 gap-2 rounded-lg border hover:bg-brightPurple hover:text-white text-[#491546] border-brightPurple" onClick={passId}>
        <AiOutlineEdit className="" /> Edit
      </button>

      <button
        className="poppins transition duration-500 border flex items-center p-3 gap-2 bg-brightPurple text-white rounded-lg hover:bg-white hover:text-[#491546] hover:border-brightPurple"
        onClick={handleCopy}
      >
        <FaRegCopy className="" />
        Copy Tag
      </button>
    </div>
  );
};
export default Edit;
