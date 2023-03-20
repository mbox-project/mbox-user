import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/AdminPagesLayout/Layout";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import Button from "../../../components/Button";


import { Tabs } from 'antd';




const index = () => {
    const { isMerchant } = useSelector((state) => state.user);



    return (
        <>
            <Layout>

                <div className="flex justify-between">
                    <h2 className="text-2xl mt-2 inline">Add Product</h2>
                </div>

                <Tabs
                    style={{ backgroundColor: "white" }}
                    defaultActiveKey="1"
                    centered
                    items={[
                        {
                            label: `Product Information`,
                            key: 'tab_1',
                            children: React.createElement('div', '',
                                <section className="card flex flex-col py-2 space-2 rectCard">
                                    <div className="flex flex-col">
                                        <div className="mb-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Product Name
                                            </label>
                                            <input
                                                type="name"
                                                id="name"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
                                                placeholder="Product Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="mb-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Product Qty
                                            </label>
                                            <input
                                                type="number"
                                                id="qty"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
                                                placeholder="e.g 10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="mb-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Product Tags
                                            </label>
                                            <input
                                                type="number"
                                                id="qty"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
                                                placeholder="e.g Clothes, Shoes, Belt"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="mb-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Product Description
                                            </label>
                                            <textarea
                                                type="text"
                                                id="description"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5"
                                                placeholder="Write something about this product"
                                                rows='7'
                                                required
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </section>

                            )
                        },
                        {
                            label: `Product Picture`,
                            key: 'tab_2',
                            children: React.createElement('div', '',
                                <section className="card flex flex-col py-2 space-2 rectCard">
                                    < div className="flex flex-col" >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Gallery Images <span className="text-red-700">*</span>
                                                <br />
                                                <span className="text-red-600 pt-1 ">( Upload 4 image )</span>
                                            </label>

                                            <input
                                                type="file"
                                                id="images"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5 cursor-pointer"
                                                placeholder="Product Name"
                                                required
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Thumbnail Images <span className="text-red-700">*</span>
                                                <br />
                                                <span className="text-red-600 pt-1 ">( Upload image )</span>
                                            </label>

                                            <input
                                                type="file"
                                                id="images"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5 cursor-pointer"
                                                placeholder="Product Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </section>

                            )
                        },
                        {
                            label: `Product Variation`,
                            key: 'tab_3',
                            children: React.createElement('div', '',
                                <section className="card flex flex-col py-2 space-2 rectCard">
                                    < div className="flex flex-col" >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Available Colors
                                                <br />
                                                <span className="text-red-600 pt-1 ">( Select all that applies )</span>
                                            </label>

                                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm block w-full rounded-lg p-2.5">
                                                <option selected disabled>Select Colors</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Available Sizes
                                                <br />
                                                <span className="text-red-600 pt-1 ">( Select all that applies )</span>
                                            </label>

                                            <select className="bg-gray-10 border border-gray-300 text-gray-500 text-sm block w-full rounded-lg p-2.5">
                                                <option selected disabled>Select Sizes</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>
                            )
                        }, {
                            label: `Product Price`,
                            key: 'tab_4',
                            children: React.createElement('div', '',
                                <section className="card flex flex-col py-2 space-2 rectCard">
                                    < div className="flex flex-col" >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Unit Price
                                            </label>

                                            <input
                                                type="number"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5 cursor-pointer"
                                                placeholder="$0"
                                                required
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Discount
                                            </label>

                                            <input
                                                type="number"
                                                className="bg-gray-50 border text-gray-900 text-sm rounded-md block w-full p-2.5 cursor-pointer"
                                                placeholder="2%"
                                                required
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-md text-gray-500"
                                            >
                                                Quantity
                                            </label>

                                            <select className="bg-gray-10 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                                <option>1</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>
                            )
                        },
                    ]}
                />


                <Button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
                    Next
                </Button>

                <Button
                    className=" w-full my-4 rounded-md shadow-lg bg-white py-2  text-brightRed border border-orange-400 flex justify-center text-base poppins 
                                opacity-50 cursor-not-allowed ">
                    Preview Product
                </Button>


            </Layout>
        </>
    );
};

export default index;
