import React from "react";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { message, Upload } from "antd";
import axios from "axios";
const { Dragger } = Upload;
// https://www.mocky.io/v2/5cc8019d300000980a055e76

const UpdateProfileImages = ({ setData }) => {
    const props = {
        name: "images",
        multiple: false,
        DocumentType: "",
        maxCount: 1,
        action: "https://marketbox-api.onrender.com/api/Product/upload-gallery-images",
        onChange(info) {
            const { status, response } = info.file;
            console.log(info);
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
                setData(response.data.$values?.[0].imageUrl);
                console.log(response.data.$values?.[0].imageUrl);
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
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

        <div className="relative">
            <div className=" absolute right-14 flex gap-5 ">
                <div className=" mr-5">
                <Upload {...props} className=" absolute">
                    <div className="rounded-full flex justify-center items-center h-[30px] w-[30px] p-1 bg-blue-100 hover:cursor-pointer ">
                        <BiEditAlt className="text-blue-400" />
                    </div>
                </Upload>
                </div>

                <span className="rounded-full h-[30px] flex justify-center items-center w-[30px] p-1 bg-red-50">
                    <BiTrashAlt className="text-brightRed" />
                </span>
            </div>
        </div>
    );
};

export default UpdateProfileImages;
