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
                    <h2 className="text-2xl mt-2 inline">Newsletter</h2>
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
                            <input type="search" id="default-search" className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search newsletter here..." required />
                        </div>
                    </form>
                </div>



                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl leading-none">Create Newsletter</h4>
                    </div>
                    <div className="flow-root px-2">
                        <form className="p-5" >
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600  md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Emails (users)
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <select name="" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600  md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Email Subscribers
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <select name="" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Newsletter Subject
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input type="text" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="" />
                                </div>
                            </div>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600  md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Newsletter Content
                                    </label>
                                </div>
                                <div className="md:w-2/3">

                                    <textarea rows="10" className="w-full p-1 md:p-2 lg:py-2  focus:outline-none pr-12 text-lg lg:text-xs  font-poppins  mt-1 border-[#9F9F9F] bg-white border-1  md:border-2  md:rounded-md shadow-sm rounded-none" name="amount" required="" value="">
                                    </textarea>
                                </div>
                            </div>


                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                </div>
                                <div className="md:w-1/3 pr-2 ">
                                    <button className="w-full my-4 rounded-md shadow-lg bg-white py-2  text-brightRed border border-orange-400 flex justify-center text-base poppins " type="button">
                                        Save as Draft
                                    </button>
                                </div>
                                <div className="md:w-1/3">
                                    <button className=" w-full my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins" type="button">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>




                <div className="w-full mt-8 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-200">
                        <h4 className="text-xl font-bold leading-none">All Newsletter</h4>
                        <div className="flex justify-between">
                            <select className="bg-gray-10 border mr-[40px] border-gray-300 text-gray-500 text-sm rounded-lg block w-50 p-2.5">
                                <option selected>Sort By</option>
                            </select>
                        </div>
                    </div>
                    <div className="flow-root px-2">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-900">
                                <thead className="text-xs text-gray-400">
                                    <tr className="border-b-2" >
                                        <th scope="col" className="px-6 py-3">
                                            Subject
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date & Time
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Subscriber
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-5">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Mbox-user Newsletter
                                        </th>
                                        <td className="px-6 py-4">
                                            09.01.2022,  06:34AM
                                        </td>
                                        <td className="px-6 py-4">
                                            23
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </Layout>
        </>
    );
};

export default index;
