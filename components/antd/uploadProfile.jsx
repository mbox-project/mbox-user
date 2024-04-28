import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { BsFillCameraFill } from "react-icons/bs";
import { message, Upload } from "antd";
import axios from "axios";
const { Dragger } = Upload;
// https://www.mocky.io/v2/5cc8019d300000980a055e76

const UploadProfileImages = ({ setData }) => {
  const props = {
    name: "file",
    multiple: false,
    DocumentType: "",
    maxCount: 1,
    action: "/api/uploads",
    onChange(info) {
      const { status, response } = info.file;
      console.log(info);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setData(response);
        console.log(response);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    onRemove(info) {
      const public_id = info.response?.publicId;
      axios
        .patch("/api/delete", { id: public_id })
        .then(() => {
          console.log("removed", info);
          return true;
        })
        .catch(() => {
          return false;
        });
    },
    beforeUpload(file, fileList) {
      const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        fileList.every(
          (mono) => mono.type === "image/png" || mono.type === "image/jpeg"
        );
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error("Image must smaller than 5MB!");
      }
      return isJpgOrPng && isLt5M;
    },
  };
  return (
     
    <Dragger {...props} className=" max-w-[400px]">
     <div className="p-16 mt-5 mb-3 bg-gray-200 w-48 profilePics">
          <BsFillCameraFill size={60} className="text-white" />
        </div>
    </Dragger>
  );
};

export default UploadProfileImages;
