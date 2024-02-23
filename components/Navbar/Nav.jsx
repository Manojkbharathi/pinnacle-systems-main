import React, { useState } from 'react'
import Image from 'next/image'
import pin from '../Assets/pin.png'
import Link from 'next/link';


const Desktop = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex justify-center items-center antialiased text-gray-900 dark:bg-dark dark:text-light ">
            {/* Loading screen */}
            {/* <div className="fixed inset-0 z-50 items-center justify-center text-2xl font-semibold text-white bg-blue-600 hidden">
                Loading.....
            </div> */}

            {/* Sidebar */}
            <div
                className={`mob  fixed inset-y-0 z-50 flex sm:w-[60vw] md:w-[34vw] ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full '
                    } sidebar-transition`}
            >
                {/* Curvy shape */}

                {/* Sidebar content */}
                <div className="z-10  flex-col flex-1 ">
                    <div className="flex items-center justify-start pl-14 gap-6">

                    </div>
                    <nav className="flex flex-col flex-1 w-64 p-10 mt-4 gap-3 backdrop-blur-lg">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className='text-lg font-bold'>Home</span>
                        </Link>
                        <div className="relative">
                            <button
                                id="dropdownRightButton"
                                className="flex justify-center items-center text-lg font-bold"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                Products &<br /> Services
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div
                                    id="dropdownRight"
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 mt-2"
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRightButton">
                                        <li>
                                            <Link href="/erpServices" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                ERP Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/industrySolution" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Industry Solutions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/commonHardware" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Common Services
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link href="/about" className="flex items-center space-x-2">
                            <span className='text-lg font-bold'>About us</span>
                        </Link>
                        <Link href="/career" className="flex items-center space-x-2">
                            <span className='text-lg font-bold'>Career</span>
                        </Link>
                        <Link href="/contact" className="flex items-center space-x-2">
                            <span className='text-lg font-bold'>Contact Us</span>
                        </Link>
                    </nav>
                </div>
            </div>
            <main className="flex absolute">
                <button
                    onClick={toggleSidebar}
                    className="fixed p-2 bg-white/50 backdrop-filter backdrop-blur-md transition ease-in-out duration-500 rounded-lg right-3 top-5 z-50"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <span className="sr-only">Open menu</span>
                </button>

            </main>
            {/* <NavLanding /> */}
        </div>

    )
}

export default Desktop