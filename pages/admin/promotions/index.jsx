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
                    <h2 className="text-2xl mt-2 inline">Promotions</h2>
                </div>


                <div>
                    <form>
                        <label for="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative mt-5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Promotions here..." required />
                        </div>
                    </form>
                </div>



                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl font-bold leading-none">All Promotion requests</h4>
                        <div className="flex justify-between">
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>All Request</option>
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
                                            Store Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Promotion Request
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Request Type
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
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
                                            Giveons Crib
                                        </th>
                                        <td className="px-6 py-4">
                                            Category Listing
                                        </td>
                                        <td className="px-6 py-4">
                                            Landing Page
                                        </td>
                                        <td className="px-6 py-4">
                                            <div class="relative inline-block text-left" data-headlessui-state="">
                                                <div>
                                                    <button class="inline-flex justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><svg fill="#444444" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17.5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end m-5">
                            <p className="text-brightRed-700" >Show More </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default index;
