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
                    <h2 className="text-2xl mt-2 inline">Discounts</h2>
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
                            <input type="search" id="default-search" className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search discounts here..." required />
                        </div>
                    </form>
                </div>



                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl font-bold leading-none">All Discount</h4>
                        <div className="flex justify-between">
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>All Discount</option>
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
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Discount(%)
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
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex justify-start">
                                                <img src="https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg" class="object-contain h-10 w-10" />
                                                <span>
                                                    Sneakers VII Shorts
                                                    <span className="text-gray-300 block">A week Ago</span>
                                                </span>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Mens Fashion
                                        </td>
                                        <td className="px-6 py-4">
                                            40
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

                    <Modal title="Banner Details" open={isModalOpen} footer={null}>
                        <div className="bg-lightPink ">
                            <p className=" py-3 font-poppins text-xs text-[#ADAAA9]">
                                please ensure you enter the following informations carefully and accurately
                            </p>
                        </div>
                        <div className="bg-white">
                            <div className=" rounded bg-gray-200 p-3">
                                <img className="rounded" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide.ed255bc1.png&w=3840&q=75" alt="" />
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Duration:</label>
                                <select name="" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Starts On:</label>
                                <input type="date" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="" />
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Ends On:</label>
                                <input type="date" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="" />
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Type:</label>
                                <select name="" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="pt-1">
                                <label className="text-gray-700 text-xs" for="text">Comment</label>
                                <textarea rows="7" placeholder='Type your report(s) here' className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="">
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
