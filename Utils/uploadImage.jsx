import React from "react";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { message, Upload } from "antd";
import axios from "axios";
const { Dragger } = Upload;
// https://www.mocky.io/v2/5cc8019d300000980a055e76

const UpdateProfileImages = ({ setData }) => {
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

        <div className="relative">
<div className=" absolute right-14 flex gap-5 ">
            <Upload {...props} className=" ">
                <span className="rounded-full flex justify-center items-center h-[30px] w-[30px] p-1 bg-blue-100 hover:cursor-pointer">
                    <BiEditAlt className="text-blue-400" />
                </span>
            </Upload>

            <span className="rounded-full h-[30px] flex justify-center items-center w-[30px] p-1 bg-red-50">
                <BiTrashAlt className="text-brightRed" />
            </span>
        </div>
        </div>
    );
};

export default UpdateProfileImages;
