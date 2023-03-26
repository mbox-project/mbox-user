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

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" className="flex justify-between" href="https://www.antgroup.com">
                    <span>
                        View Item
                    </span>
                    <span className="inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" className="flex justify-between" href="https://www.antgroup.com">
                    <span>
                        Edit Item
                    </span>
                    <span className="inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </span>
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" className="flex justify-between" href="https://www.luohanacademy.com">
                    <span>
                        Export Item
                    </span>
                    <span className="inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </span>
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer" className="flex justify-between" href="https://www.luohanacademy.com">
                    <span clclassName="text-red-500">
                        Delete Item
                    </span>
                    <span className="inline">
                        <svg width="18px" height="18px" viewBox="0 0 24 20" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#F90808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
                            <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
                        </svg>
                    </span>
                </a>
            ),
        },
    ];

    return (
        <>
            <Layout>
                <div className="flex justify-between">
                    <h2 className="text-2xl mt-2 inline">Marketing</h2>
                    <div>
                        <button className="bg-orange-600 text-white ml-4 py-2 px-4 rounded shadow" onClick={showModal}>
                            <span className="pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Create New
                        </button>
                    </div>
                </div>


                <div>
                    <form>
                        <label for="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative mt-5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search sales here..." required />
                        </div>
                    </form>
                </div>



                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl font-bold leading-none">All Flash Sales</h4>
                        <div className="flex justify-between">
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>All Merchant</option>
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
                                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded "/>
                                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Flash Sales
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Start Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Ends On
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 d-flex align-center py-3">
                                            Options
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Inactive</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded"/>
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <h4>Easter Flash Sales</h4>
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            09.01.2022, 06:34 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Active</button>
                                        </td>
                                        <td>
                                            <div className="flex justify-center align-middle">
                                                <span className="inline   ml-2 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center m-5">
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
                    </div>
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
