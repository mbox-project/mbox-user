import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import axios from "axios";
const { Dragger } = Upload;
// https://www.mocky.io/v2/5cc8019d300000980a055e76

const UploadImages = ({ setData }) => {
  const props = {
    name: "file",
    multiple: true,
    DocumentType: "",
    maxCount: 4,
    action: "/api/uploads",
    onChange(info) {
      const { status, response } = info.file;
      console.log(info);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setData((prev) => [...prev, response]);
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
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="text-brightRed text-xs mb-2">(Upload 4 images)</p>
    </Dragger>
  );
};

export default UploadImages;
