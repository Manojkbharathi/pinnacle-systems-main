import React from 'react';
import Image from 'next/image';
import erpimg from '../Assets/textile/erpimg.png'
import business from '../Assets/textile/business.jpg'
import cutting from '../Assets/textile/cutting.jpg'
import embroidery from '../Assets/textile/embroidery.jpg'
import garments from '../Assets/textile/garments.jpeg'
import knitting from '../Assets/textile/knitting.jpg'
import payroll from '../Assets/textile/payroll.jpg'
import printing from '../Assets/textile/printing.jpg'
import Spinning from '../Assets/textile/Spinning.jpg'
import { DOWN_ARROW_ICON } from '@/components/Assets/icons';
import { AdditionalCards } from './AdditionalCards';
import { GarmentsDetails } from './GarmentsDetails';

const ProductCard = () => {
    return (
        <div className="min-h-screen">
            <div className="p-5 lg:pt-24 pt-20">
                <div className="group relative block bg-black md:rounded-3xl rounded-lg">
                    <Image
                        alt="Developer"
                        src={erpimg}
                        className="absolute md:rounded-3xl rounded-lg h-full w-full border-t-2 border-b-2  object-cover opacity-75 transition-opacity group-hover:opacity-100"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <h1 className='text-center md:text-6xl text-3xl md:leading-snug fontjsb text-white'>Customized ERP Solution<br /> for Textile industry</h1>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className='text-white p-4 md:mt-[20px] text-xs md:text-xl text-center'>A Complete ERP Solution for all business Verticals of Textile Industry providing total solutions for</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-black text-center text-3xl h-20 pt-10 animate-bounce'>{DOWN_ARROW_ICON}</div>
            <section>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <Image
                                alt="Party"
                                src={payroll}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-24 md:border-2 border border-dashed border-blue-500 rounded-lg md:p-10 p-3">
                            <h2 className="text-base fontjsb text-black sm:text-4xl">THE PAYROLL MANAGEMENT SOLUTION</h2>
                            <p className="md:mt-4 mt-1 md:text-base text-xs text-black fontjm">
                                Simplify your payroll management with our comprehensive software solution, ensuring
                                accurate calculations and streamlined processes. Effortlessly handle payroll management
                                with our intuitive software solution, automating calculations and ensuring smooth
                                operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='spin'>
                <div
                    className="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                        <div
                            className="lg:py-24 lg:order-2 order-1 border-dashed border border-orange-400 rounded-lg md:border-2 md:p-10 p-4"
                        >
                            <h2 className="text-base fontjsb text-black sm:text-4xl">THE SPINNING MANAGEMENT SOLUTION</h2>
                            <p className="md:mt-4 mt-1 md:text-base text-xs fontjm text-black">
                                Revolutionize your spinning management with our comprehensive software solution,
                                streamlining operations and optimizing efficiency. Transform the way you manage spinning
                                operations with our user-friendly software solution, simplifying processes and boosting productivity.
                            </p>

                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg lg:h-full sm:h-80 ">
                            <Image
                                alt="Party"
                                src={Spinning}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id='knit'>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <Image
                                alt="Party"
                                src={knitting}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-24 md:border-2 border border-dashed border-amber-500 rounded-lg md:p-10 p-3">
                            <h2 className="text-base sm:text-4xl fontjsb text-black">THE KNITTING MANAGEMENT SOLUTION</h2>
                            <p className="md:mt-4 mt-1 md:text-base fontjm text-xs text-black">
                                Upgrade your knitting management with our intuitive software solution, empowering you to streamline
                                operations and maximize efficiency. Elevate your knitting management with our easy-to-use software solution,
                                making operations smoother and increasing productivity.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <hr className="md:my-0 my-0 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <section id='garm'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <GarmentsDetails />
                </div>
                <AdditionalCards />
            </section>
            <hr className="md:my-10 my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <div className='md:flex md:flex-row md:items-center md:justify-center flex flex-col items-center justify-center md:p-16 p-3 gap-12'>
                <article className="group">
                    <Image
                        alt="Lava"
                        src={business}
                        className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                    />

                    <div className="md:p-5 p-2">
                        <h3 className="md:text-lg text-sm fontjm text-text-black">
                            THE PROCESSING MANAGEMENT SOLUTION
                        </h3>
                        <p
                            className="md:mt-2 mt-1 md:text-base text-xs text-black fontjm"
                        >
                            Simplify and streamline your processing management with our efficient software solution,
                            optimizing workflows and improving productivity. Effortlessly manage your processing
                            operations with our user-friendly software solution, enhancing efficiency and maximizing
                            output.
                        </p>
                    </div>
                </article>
                <article className="group">
                    <Image
                        alt="Lava"
                        src={cutting}
                        className="w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                    />

                    <div className="md:p-5 p-2">
                        <h3 className="md:text-lg text-sm fontjm text-text-black">
                            THE CUTTING MANAGEMENT SOLUTION
                        </h3>
                        <p
                            className="md:mt-2 mt-1 md:text-base text-xs text-black fontjm"
                        >
                            Enhance your cutting management with our intuitive software solution, optimizing
                            processes and maximizing precision for superior results. Master cutting management
                            effortlessly with our user-friendly software solution, enabling precise and efficient
                            operations for exceptional outcomes.
                        </p>
                    </div>
                </article>
            </div>
            <div className='md:flex md:flex-row md:items-center md:justify-center flex flex-col justify-center items-center p-3 md:p-16 md:pt-0 md:pb-5 gap-10'>
                <article className="group">
                    <Image
                        alt="Lava"
                        src={printing}
                        className="w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                    />

                    <div className="md:p-5 p-2">
                        <h3 className="md:text-lg text-sm fontjm text-black">
                            THE PRINTING MANAGEMENT SOLUTION
                        </h3>
                        <p
                            className="md:mt-2 mt-1 md:text-base text-xs text-black fontjm"
                        >
                            Streamline your printing management with our efficient software solution,
                            simplifying processes and ensuring high-quality results. Simplify your printing
                            operations with our user-friendly software solution, enabling seamless management and
                            delivering exceptional print quality.
                        </p>
                    </div>
                </article>
                <article className="group">
                    <Image
                        alt="Lava"
                        src={embroidery}
                        className="w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                    />

                    <div className="md:p-5 p-2">
                        <h3 className="md:text-lg text-sm fontjm text-black">
                            THE EMBROIDERY MANAGEMENT SOLUTION
                        </h3>
                        <p
                            className="md:mt-2 mt-1 md:text-base text-xs text-black fontjm"
                        >
                            Take your embroidery management to new heights with our advanced software solution,
                            simplifying workflows and achieving exquisite results. Elevate your embroidery management
                            with our user-friendly software solution, empowering you to efficiently create stunning
                            designs with precision and ease.
                        </p>
                    </div>
                </article>
            </div>



        </div>
    );
};

export default ProductCard;
