import React, { Fragment, useRef, useState } from 'react'
import { Menu, Dialog, Transition } from '@headlessui/react'
import Layout from "../../../components/AdminPagesLayout/Layout";

import { Dropdown, Space } from 'antd';
import { Button, Modal } from 'antd';


const index = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <Layout>
                <div className="flex justify-between">
                    <h2 className="text-2xl mt-2 inline">Customers</h2>

                </div>


                <div>
                    <form>
                        <label for="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative mt-5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search staff here..." required />
                        </div>
                    </form>
                </div>



                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl font-bold leading-none">All Customers</h4>
                        <div className="flex justify-between">
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>All Customers</option>
                            </select>
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>Sort By</option>
                            </select>
                            <button className="inline-flex justify-center px-1 py-1 text-sm font-medium text-gray-700 ">
                                <svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="17.5" r="1.5" />
                                    <circle cx="12" cy="12" r="1.5" />
                                    <circle cx="12" cy="6.5" r="1.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flow-root px-2">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-900">
                                <thead className="text-xs text-gray-400">
                                    <tr className="border-b-2" >
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded " />
                                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Names
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Wallet Balance
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Inactive</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Adebayo Valmidar</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            $2,300.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-end" >
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#444444] bg-[#F2F2F2] rounded-full">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="eye"><path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
                                                        c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
                                                        s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
                                                        c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
                                                        c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path><path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
                                                        c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
                                                    </svg>
                                                </button>
                                                <button className="py-2 px-2 h-8 text-sm focus:outline-none leading-none text-[#F90808] bg-[#FFF3F6] rounded-full ml-[25px]">
                                                    <svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                                                        <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>

                <div className="flex justify-end m-5">
                    <nav aria-label="Page navigation" className="bg-gray-50 rounded p-3">
                        <ul className="inline-flex space-x-2">
                            <li>
                                <button
                                    className="flex font-semibold items-center justify-center h-8 text-[#491546] transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-100 bg-white px-2 border-2 border-[#491546]">Previous</button>
                            </li>
                            <li><button className="w-8 h-8 font-semibold text-gray-700 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button></li>
                            <li><button className="w-8 h-8 font-semibold text-gray-700 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button></li>
                            <li><button className="w-8 h-8 font-semibold text-white transition-colors duration-150 bg-[#491546] border border-r-0 border-[#491546] rounded-full shawdow-lg focus:shadow-outline">3</button></li>
                            <li><button className="w-8 h-8 font-semibold text-gray-700 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">4</button></li>
                            <li><button className="w-8 h-8 font-semibold text-gray-700 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">5</button></li>

                            <li>
                                <button
                                    className="flex font-semibold items-center h-8 justify-center text-[#491546] transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-100 bg-white px-2 border-2 border-[#491546]">Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>


                <>

                    <Modal title="Add a New Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="bg-lightPink ">
                            <p className=" py-3 font-poppins text-xs text-[#ADAAA9]">
                                please ensure you enter the following informations carefully and accurately
                            </p>
                        </div>
                        <div className="bg-white">
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Category Name</label>
                                <input type="text" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="" />
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Sub-Categories</label>
                                <select name="" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Slug</label>
                                <input type="text" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="" />
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Description</label>
                                <textarea rows="7" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="">
                                </textarea>
                            </div>
                            <div className="    flex pt-2">
                                <button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">Save</button>
                            </div>
                        </div>
                    </Modal>
                </>

            </Layout>
        </>
    );
};

export default index;
