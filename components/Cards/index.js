import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erp from '../Assets/card/erp.png'
import pay from '../Assets/card/pay.png'
import hard from '../Assets/card/hard.png'
import soft from '../Assets/card/soft.png'
import iot from '../Assets/card/iot.png'
import NavLanding from "../Navbar/NavLanding";

const Card = () => {
    return (
        <div className="">
            <NavLanding />
            <h1 className='text-center  md:text-6xl text-3xl font-bold text-transparent fontjb bg-clip-text bg-gradient-to-br from-blue-500 via-blue-900 to-blue-500'>Our Services</h1>
            <p className='text-black font-semibold p-4 md:mt-[20px] text-xs md:text-lg text-center'>"Delivering tailored websites and <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-900 to-blue-500'>software solutions</span> for your industry, empowering businesses with seamless digital transformation"</p>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:pt-[50px]">
                <div className='relative p-4 md:p-0 md:border md:border-gray-200 rounded-t-lg'>
                    <span
                        className="absolute hidden md:block inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-600"
                    ></span>
                    <div className="flex flex-col justify-center items-center h-60 rounded-lg bg-white shadow-xl shadow-blue-500/20 transition hover:shadow-sm md:max-w-xl md:flex-row">
                        <Image
                            className="w-24 p-3 md:p-9 rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                            src={erp}
                            alt="logo"
                        />
                        <div className="flex flex-col justify-start pt-0 p-3 md:p-5">
                            <h5 className="mb-2 fontjm md:text-xl text-sm font-medium text-black">
                                ERP for Textile Industries
                            </h5>
                            <p className="mb-2 md:text-base text-xs text-black text-justify">
                                An ERP (Enterprise Resource Planning) system tailored for textile industries streamlines
                                and optimizes various operations, from supply chain management to production planning and
                                inventory control.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative p-4 md:p-0 pt-0 md:border md:border-gray-200 rounded-t-lg'>
                    <span
                        className="absolute hidden md:block inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-600"
                    ></span>
                    <div className="flex flex-col justify-center items-center h-60 rounded-lg bg-white shadow-xl shadow-blue-500/20 transition hover:shadow-sm md:max-w-xl md:flex-row">
                        <Image
                            className="w-24 p-3 md:p-9 rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                            src={pay}
                            alt="logo"
                        />
                        <div className="flex flex-col justify-start pt-0 p-3 md:p-5">
                            <h5 className="mb-2 fontjm md:text-xl text-sm font-medium text-black">
                                Payroll & Financial Management
                            </h5>
                            <p className="mb-2 md:text-base text-xs text-black text-justify">
                                Payroll and financial management are indeed crucial aspects of an ERP system for any industry.
                                Effective payroll and financial management can help maintain accurate records, ensure compliance
                                with regulations, optimize costs, and provide insights into the financial health of the organization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:pt-[22px]">
                <div className='relative p-4 md:p-0 md:border md:border-gray-200 rounded-t-lg'>
                    <span
                        className="absolute hidden md:block inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-600"
                    ></span>
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <div className="flex flex-col justify-center items-center h-60 rounded-lg bg-white shadow-xl shadow-blue-500/20 transition hover:shadow-sm md:max-w-xl md:flex-row">
                            <Image
                                className="w-24 p-3 md:p-9 rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                                src={iot}
                                alt="logo"
                            />
                            <div className="flex flex-col justify-start pt-0 p-3 md:p-5">
                                <h5 className="mb-2 fontjm md:text-xl text-sm font-medium text-black">
                                    Cloud & IOT Solution Provider
                                </h5>
                                <p className="mb-2 md:text-base text-xs text-black text-justify">
                                    Certainly, cloud and IoT (Internet of Things) solutions are increasingly important for various industries, including textiles.
                                    These technologies can offer enhanced efficiency, real-time monitoring, data analytics, and scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:pt-[22px]">
                <div className='relative p-4 md:p-0 md:border md:border-gray-200 rounded-t-lg'>
                    <span
                        className="absolute hidden md:block inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-600"
                    ></span>
                    <div className="flex flex-col justify-center items-center h-60 rounded-lg bg-white shadow-xl shadow-blue-500/20 transition hover:shadow-sm md:max-w-xl md:flex-row">
                        <Image
                            className="w-24 p-3 md:p-9 rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                            src={soft}
                            alt="logo"
                        />
                        <div className="flex flex-col justify-start pt-0 p-3 md:p-5">
                            <h5 className="mb-2 fontjm md:text-xl text-sm font-medium text-black">
                                Customized Software Solutions
                            </h5>
                            <p className="mb-2 md:text-base text-xs text-black text-justify">
                                Customized software solutions refer to software applications or systems
                                that are developed to meet specific requirements of an individual, organization,
                                or business.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative p-4 md:p-0 pt-0 md:border md:border-gray-200 rounded-t-lg'>
                    <span
                        className="absolute hidden md:block inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-600"
                    ></span>
                    <div className="flex flex-col justify-center items-center h-60 rounded-lg bg-white shadow-xl shadow-blue-500/20 transition hover:shadow-sm md:max-w-xl md:flex-row">
                        <Image
                            className="w-24 p-3 md:p-9 rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                            // src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-hardware-technology-ecommerce-flaticons-lineal-color-flat-icons.png"
                            src={hard}
                            alt="logo"
                        />
                        <div className="flex flex-col justify-start pt-0 p-3 md:p-5">
                            <h5 className="mb-2 fontjm md:text-xl text-sm font-medium text-black">
                                Computer Hardware Solutions
                            </h5>
                            <p className="mb-2 md:text-base text-xs text-black text-justify">
                                Running a business that offers computer hardware solutions, annual maintenance,
                                and sales is a comprehensive endeavor that involves various aspects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Card;
