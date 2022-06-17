import React from 'react'
import Image from "next/image"
import logo from "../../public/buyersImg/logo.svg"
import arrow from "../../public/buyersImg/arrow.svg"
import bell from "../../public/buyersImg/bell.svg"
import profile from "../../public/buyersImg/profile.svg"



export const Navbar = ({showbar}) => {
    
    return (
        <div className="customNavbar mx-auto relative w-full font-sans">
            <nav className="p-2 mx-auto shadow-md hover:shadow-lg">
                {/* flex Container */}
                <div className="flex items-center justify-between px-10 md:px-14 md:space-x-10">
                    <svg className="flex mt-2 items-center cursor-pointer md:hidden" fill="#491546" viewBox="0 0 100 80" width="40" height="40"
                        onClick={showbar}>
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                    <Image src={logo} className="h-2" alt="logo" />
                    <form className="hidden relative space-x-2 md:flex md:flex-1 md:items-center">
                        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                        <input className="focus:ring-2 focus:ring-brightRed-500 focus:outline-none appearance-none 
                                w-full text-md leading-6 text-slate-900 placeholder-slate-400 py-2 rounded-md
                                pl-10 ring-1 ring-slate-200" type="text" placeholder="What are you looking for ?... " />
                        <button className="p-2 px-6 text-white bg-brightRed rounded-lg baseline"> Search </button>
                    </form>
                    <div className="flex items-center space-x-6">
                        <button className="text-sm p-2 text-brightRed bg-white rounded-lg 
                                 border-solid border-2 border-red-500  md:px-6 md:p-2 hover:bg-red-500 hover:text-white">
                            <span>Pay Invoice</span>
                            <Image src={arrow} width={10} height={10} alt="arrow" />
                        </button>
                        <div className="hidden  md:block md:mt-2">
                            <Image src={bell} width={32} height={32} alt="bell" />
                        </div>
                        <div className="mt-2">
                            <Image src={profile} width={32} height={32} alt="pics" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

