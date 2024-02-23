import Image from 'next/image';
import React from 'react';
import careerimg from '../Assets/career/career.png'
import react from '../Assets/career/react.jpg'
import sql from '../Assets/career/sql.jpg'
import node from '../Assets/career/node.jpg'
import { CareerComponent } from './CareerComponent';


const CareerCard = () => {

    return (
        <div>
            <div className="">
                <CareerComponent />
                {/* <div className="group relative block bg-black md:rounded-3xl rounded-lg">
                    <Image
                        alt="Developer"
                        src={careerimg}
                        className="absolute md:rounded-3xl rounded-lg h-full w-full border-t-2 border-b-2  object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <h1 className='text-center md:text-7xl text-3xl md:leading-snug font-bold text-white'>Learn, Growth and Success</h1>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className='text-zinc-50 fontjm p-4 md:mt-[20px] text-xs md:text-2xl text-center'>Work and be Yourself !</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <Image
                            src={react}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-gray-300 lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-5 bg-gray-300 lg:p-14 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PINNACLE SYSTEMS
                            </p>
                        </div>
                        <h5 className="mb-5 text-xl font-extrabold leading-none sm:text-4xl">
                            React JS Developer Senior & Junior
                        </h5>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Location: </span>
                            <span >Tirupur</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Type: </span>
                            <span >Full-Time</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Phone: </span>
                            <span >+91 9994610733</span>
                        </p>
                        <p className="text-gray-900 text-base lg:text-lg">
                            <span className="font-bold text-red-500">Note: </span>
                            <span >For Apply send your <span className='underline'>Resume</span> to <span className='font-bold'>manoj@pinnaclesystems.co.in</span></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="flex flex-col justify-center p-5 bg-gray-300 lg:p-10 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PINNACLE SYSTEMS
                            </p>
                        </div>
                        <h5 className="mb-5 text-xl font-extrabold leading-none sm:text-4xl">
                            Node JS Developer Senior
                        </h5>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Location: </span>
                            <span >Tirupur</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Type: </span>
                            <span >Full-Time</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Phone: </span>
                            <span >+91 9994610733</span>
                        </p>
                        <p className="text-gray-900 text-base lg:text-lg">
                            <span className="font-bold text-red-500">Note: </span>
                            <span >For Apply send your <span className='underline'>Resume</span> to <span className='font-bold'>manoj@pinnaclesystems.co.in</span></span>
                        </p>
                    </div>
                    <div className="relative lg:w-1/2">
                        <Image
                            src={node}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <Image
                            src={sql}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-gray-300 lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-5 bg-gray-300 lg:p-14 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PINNACLE SYSTEMS
                            </p>
                        </div>
                        <h5 className="mb-5 text-xl font-extrabold leading-none sm:text-4xl">
                            Database (SQL) Developer Senior / Junior
                        </h5>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Location: </span>
                            <span >Tirupur</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Type: </span>
                            <span >Full-Time</span>
                        </p>
                        <p className="mb-3 text-gray-900 text-base lg:text-lg">
                            <span className="font-bold">Phone: </span>
                            <span >+91 9994610733</span>
                        </p>
                        <p className="text-gray-900 text-base lg:text-lg">
                            <span className="font-bold text-red-500">Note: </span>
                            <span >For Apply send your <span className='underline'>Resume</span> to <span className='font-bold'>manoj@pinnaclesystems.co.in</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCard;
