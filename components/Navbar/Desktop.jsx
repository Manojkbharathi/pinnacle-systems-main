import React, { useState } from 'react';
import Image from 'next/image';
import pin from '../Assets/pin.png';

import Link from 'next/link';
import Nav from './Nav'

import { useRouter } from 'next/router';
const Desktop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" flex flex-col     dark:bg-transparent ">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 z-50 w-full bg-white h-auto">
                <div className="container mx-auto flex items-center justify-between ">
                    <Link href="/" >
                        <Image src={pin} style={{ borderRadius: 15 }} className=" h-16 w-auto cursor-pointer" />
                    </Link>
                    <div className="hidden lg:flex space-x-4 ">
                        {/* Add more menu items as needed */}
                        <Link href="/" className={router.pathname == "/" ? "active text-[1rem]" : "nav-link font-thin text-[1rem]"}>
                            <h1>Home</h1>
                        </Link>
                        <Link href="/about" className={router.pathname == "/about" ? "active  text-[1rem]" : "nav-link font-thin text-[1rem]"}>
                            <h1> About us</h1>
                        </Link>
                        <Link href="/team" className={router.pathname == "/team" ? "active  text-[1rem]" : "nav-link font-thin text-[1rem]"}>
                            <h1> Team</h1>
                        </Link>
                        <div className="relative">
                            <button
                                id="dropdownRightButton"
                                className="flex justify-center items-center text-[1rem]"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                <h1 className='font-thin text-[1rem]'>Products&Services</h1>
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {isOpen && (
                                <div
                                    id="dropdownRight"
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-xl shadow w-44 dark:bg-gray-700 absolute mt-2"
                                >
                                    <ul
                                        className="p-6 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownRightButton"
                                    >
                                        <li>
                                            <Link
                                                href="/erpServices"

                                                className={router.pathname == "/erpServices" ? "active  text-[1rem]" : "nav-link font-thin block[1rem]x-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"}
                                            >
                                                <h1 className='p-1'>ERP Services</h1>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/industrySolution"
                                                className={router.pathname == "/industrySolution" ? "active  text-[1rem]" : "nav-link font-thin block[1rem]x-4 mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"}
                                            >
                                                <h1 className='p-1'>Industry Solutions</h1>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/commonHardware"
                                                className={router.pathname == "/commonHardware" ? "active  text-[1rem]" : "nav-link font-thin block[1rem]x-4 mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"}
                                            >
                                                <h1 className='p-1'>Common Services</h1>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link href="/career" className={router.pathname == "/career" ? "active  text-lg" : "nav-link font-thin text-[1rem]"}>
                            <h1>Career</h1>
                        </Link>
                        <Link href="/contact" className={router.pathname == "/contact" ? "active  text-lg" : "nav-link font-thin text-[1rem]"}>
                            <h1>Contact Us</h1>
                        </Link>
                    </div>
                    <div className="lg:hidden">

                        <Nav />
                    </div>
                </div>
            </nav>
            {/* Page content */}

        </div>
    );
};

export default Desktop;
