import React from 'react';
import Image from 'next/image';
import img from '../Assets/1.png';


function NavLanding() {
    return (
        <nav className='relative overflow-hidden'>
            <section className=''>
                <div className=" ">


                    <div className="flex-col md:flex-row mx-auto p-3 lg:pb-85 ml-1 pt-[7rem] md:px-50 lg:px-85 text-white flex justify-between items-center pb-44 md:w-full">

                        <div className='mb-20 w-full flex flex-col justify-center pl-5 align-center'>
                            <div>    <h2 className='text-2xl text-black font-normal pt-8 pb-8'>Digitaly transform and better solutions for your  fashion  business.</h2>
                                <p className='text-lg  font-normal text-black pr-8' >
                                    Modern software to streamline operation from design to production.
                                    <br />Infrastructure. We offer you a one-stop-solution for your IT needs.
                                </p></div>
                            <div className='mt-24 text-center mr-3'>  <h1 className='  text-black font-semibold text-xl  md:w-[25vw]   w-[90vw]    text-blue-800 text-center pr-8'>Integrated cloud-based ERP Solution for Apparel and textile Industry </h1>
                                <hr className="my-3 h-px md:w-[25vw]   w-[90vw]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
                                <h3 className='text-black font-thin text-xl md:w-[25vw]   w-[90vw]  text-blue-800 pr-8'>Flexible | scalable | affordable
                                </h3>
                            </div>
                        </div>
                        <div >
                            <Image src={img} className="bg-white mr-1 cursor-pointer h-full" />
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavLanding;
