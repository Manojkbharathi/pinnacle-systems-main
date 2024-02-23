import React from 'react';
import Image from 'next/image';
import img from '../Assets/about/home2.jpg';


function NavLanding() {
    return (
        <nav className=' overflow-hidden'>


            <div className="relative">

                <Image src={img} className=" mr-1 cursor-pointer md:h-[100vh] h-[52vh] md:w-screen w-[100vw] " />

                <div className="absolute top-0 left-[2%] tpo-0 flex-col md:flex-row mx-auto p-3 lg:pb-85 ml-1 md:pt-[7rem] pt-[4rem] md:px-50 lg:px-85 md:text-white flex justify-between items-center pb-44 md:w-full ">

                    <div className='mb-2 w-full flex flex-col justify-center pl-5 align-center'>
                        <div>    <h2 className='md:text-2xl text-lg  md:w-full w-48 font-semibold md:pt-8 text-white pt-3 pb-8'>Digitaly transform and better solutions for your  fashion  business.</h2>
                            <p className='md:text-2xl text-xs  md:w-full w-48  text-lg  font-normal text-white pr-8' >
                                Modern software to streamline operation from design to production.
                                <br />Infrastructure. We offer you a one-stop-solution for your IT needs.
                            </p></div>
                        <div className='md:mt-24 mt-12 text-center mr-3'>  <h1 className='  text-black font-semibold md:text-xl text-xs  md:w-[25vw]   w-[90vw]  text-center pr-8 text-white '>Integrated cloud-based ERP Solution for Apparel and textile Industry </h1>
                            <hr className="my-3 h-px md:w-[25vw]   w-[90vw]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
                            <h3 className='text-black font-thin md:text-xl md:w-[25vw]   w-[90vw]  text-white  pr-8'>Flexible | scalable | affordable
                            </h3>
                        </div>
                    </div>
                    <div >
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavLanding;
