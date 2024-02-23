import React from 'react';
import Image from 'next/image';
import common from '../Assets/common/common.jpg'
import asset from '../Assets/common/asset.jpg'
import crm from '../Assets/common/crm.png'
import fual from '../Assets/common/fual.jpg'
import furniture from '../Assets/common/furniture.jpg'
import hostel from '../Assets/common/hostel.jpg'
import insurance from '../Assets/common/insurance.jpg'
import yarn from '../Assets/common/yarn.jpg'
import hardware from '../Assets/common/hardware.jpg'


const CommonAndHaedwareCard = () => {
    return (
        <div className="min-h-screen">
            <div className="p-5 lg:pt-24 pt-20 transition-all duration-300 filter grayscale hover:grayscale-0">
                <div className="group relative block bg-black md:rounded-3xl rounded-lg">
                    <Image
                        alt="Developer"
                        src={common}
                        className="absolute md:rounded-3xl rounded-lg h-full w-full border-t-2 border-b-2 object-cover opacity-70 transition-opacity group-hover:opacity-80"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-44">
                        <h1 className='text-center md:text-7xl text-3xl md:leading-snug font-bold text-zinc-100 group-hover:text-zinc-50'>Common<br className='md:hidden block' /> Services</h1>
                    </div>
                </div>
            </div>
            <hr className="md:my-10 my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />

            <div id='ins' className='flex items-start justify-start md:p-3 md:mr-96'>
                <article className="flex bg-white rounded-r-2xl transition hover:shadow-xl border border-gray-300">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    </div>
                    <div className="hidden md:block md:basis-56 basis-16">
                        <Image
                            alt="Guitar"
                            src={hostel}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-l border-gray-900/10 md:p-6 p-2 sm:border-l-transparent sm:p-6">
                            <h3 className="md:text-lg text-sm uppercase fontjsb text-black">
                                THE HOSTEL MANAGEMENT WITH GATE PASS SYSTEM
                            </h3>
                            <p className="md:mt-2 pr-5 text-xs md:text-base/relaxed text-black fontjm">
                                Simplify hostel management with our comprehensive solution integrated with a gate
                                pass system, enhancing security and streamlining operations for a seamless living
                                experience. Elevate your hostel management with our all-in-one solution, incorporating
                                a gate pass system for enhanced security and efficient day-to-day operations.
                            </p>
                        </div>
                        <div className="sm:flex sm:items-end sm:justify-end">
                        </div>
                    </div>
                </article>
            </div>
            <div id='fuel' className='flex items-center justify-center pt-10 md:p-3 md:ml-96'>
                <article className="flex bg-white rounded-l-2xl transition hover:shadow-xl border border-gray-300">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    </div>
                    <div className="hidden md:block  md:basis-56 basis-16">
                        <Image
                            alt="Guitar"
                            src={insurance}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-l border-gray-900/10 md:p-6 p-2 sm:border-l-transparent sm:p-6">
                            <h3 className="fontjsb md:text-lg text-sm uppercase text-black">
                                THE VEHICLE MAINTENANCE/INSURANCE MANAGEMENT SYSTEM
                            </h3>
                            <p className="md:mt-2 pr-5 text-xs md:text-base/relaxed text-black fontjm">
                                Efficiently manage vehicle maintenance and insurance with our integrated system,
                                ensuring smooth operations and comprehensive coverage for your fleet. Simplify vehicle
                                maintenance and insurance management with our comprehensive system, ensuring smooth operations,
                                timely maintenance, and seamless insurance processes.
                            </p>
                        </div>
                        <div className="sm:flex sm:items-end sm:justify-end">
                        </div>
                    </div>
                </article>
            </div>
            <div className='flex items-start justify-start pt-10 md:p-3 md:mr-96'>
                <article className="flex bg-white rounded-r-2xl transition hover:shadow-xl border border-gray-300">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    </div>
                    <div className="hidden md:block md:basis-56 basis-16">
                        <Image
                            alt="Guitar"
                            src={fual}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-l border-gray-900/10 md:p-6 p-2 sm:border-l-transparent sm:p-6">
                            <h3 className="fontjsb md:text-lg text-sm uppercase text-black">
                                THE FUEL TOKEN SOLUTION
                            </h3>
                            <p className="md:mt-2 pr-5 text-xs md:text-base/relaxed text-black fontjm">
                                Revolutionize fuel management with our innovative Fuel Token Solution, providing a
                                secure and convenient way to track and control fuel usage for enhanced efficiency.
                                Effortlessly manage fuel transactions with our innovative Fuel Token Solution,
                                offering secure and convenient digital fuel payment options for streamlined operations.
                            </p>
                        </div>
                        <div className="sm:flex sm:items-end sm:justify-end">
                        </div>
                    </div>
                </article>
            </div>
            <div className='flex items-center justify-center pt-10 md:p-3 md:ml-96'>
                <article className="flex bg-white rounded-l-2xl transition hover:shadow-xl border border-gray-300">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    </div>
                    <div className="hidden md:block  md:basis-56 basis-16">
                        <Image
                            alt="Guitar"
                            src={crm}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-l border-gray-900/10 md:p-6 p-2 sm:border-l-transparent sm:p-6">
                            <h3 className="md:text-lg text-sm fontjsb uppercase text-black">
                                CRM FOR SERVICE
                            </h3>
                            <p className="md:mt-2 pr-5 text-xs md:text-base/relaxed text-black fontjm">
                                Unlock the full potential of your customer relationships with our robust CRM
                                (Customer Relationship Management) solution, streamlining interactions, boosting
                                customer satisfaction, and driving business success. Optimize your service operations
                                with our powerful CRM (Customer Relationship Management) solution, enabling efficient
                                customer management, streamlined workflows, and enhanced service delivery.
                            </p>
                        </div>
                        <div className="sm:flex sm:items-end sm:justify-end">
                        </div>
                    </div>
                </article>
            </div>

            <hr id='asset' className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />

            <div className='md:flex md:flex-row md:items-center md:justify-center flex flex-col justify-center items-center md:p-14 p-3 gap-10'>
                <div className="w-full lg:h-[600px] group relative block bg-black">
                    <Image
                        alt="Developer"
                        src={yarn}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-lg fontjsb text-white sm:text-2xl">YARN/FABRIC TRADING MANAGEMENT SOLUTION</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm md:text-base fontjm text-white">
                                    Streamline your yarn/fabric trading with our efficient management solution,
                                    simplifying processes and enhancing profitability for your business. Elevate your
                                    yarn and fabric trading with our specialized management solution, enabling seamless
                                    transactions, improved inventory control, and enhanced profitability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:h-[600px] group relative block bg-black">
                    <Image
                        alt="Developer"
                        src={furniture}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-lg fontjsb text-white sm:text-2xl">FURNITURE MANAGEMENT SOLUTION</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm md:text-base fontjm text-white">
                                    Effortlessly manage your furniture operations with our comprehensive Furniture
                                    Management Solution, optimizing inventory, streamlining processes, and delivering
                                    exceptional customer experiences. Simplify furniture management with our user-friendly
                                    solution, empowering you to efficiently track inventory, streamline processes, and provide
                                    exceptional customer service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:h-[600px] group relative block bg-black">
                    <Image
                        alt="Developer"
                        src={asset}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-lg fontjsb text-white sm:text-2xl">ASSET MANAGEMENT SOLUTION</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm md:text-base fontjm text-white">
                                    Take control of your assets with our comprehensive Asset Management Solution,
                                    enabling you to efficiently track, optimize, and maximize the value of your
                                    investments. Streamline your asset management with our user-friendly solution,
                                    empowering you to effectively track, organize, and optimize your valuable resources
                                    for optimal business performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr id='hard' className="md:my-10 my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <div className="p-5 transition-all duration-300 filter grayscale hover:grayscale-0">
                <div className="group relative block bg-black md:rounded-3xl rounded-lg">
                    <Image
                        alt="Developer"
                        src={hardware}
                        className="absolute md:rounded-3xl rounded-lg h-full w-full border-t-2 border-b-2 object-cover opacity-70 transition-opacity group-hover:opacity-80"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-44">
                        <h1 className='text-center md:text-7xl text-3xl md:leading-snug font-bold text-zinc-100 group-hover:text-zinc-50'>Hardware<br className='md:hidden block' /> Services</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonAndHaedwareCard;
