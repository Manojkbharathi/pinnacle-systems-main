import React from 'react';
import Image from 'next/image';
import other from '../Assets/other/other.jpg'
import discrette from '../Assets/other/discrette.jpg'
import constrection from '../Assets/other/constrection.jpg'
import farmer from '../Assets/other/farmer.jpg'
import fireworks from '../Assets/other/fireworks.jpg'
import flour from '../Assets/other/flour.jpg'
import freight from '../Assets/other/freight.jpg'
import human from '../Assets/other/human.jpg'
import matches from '../Assets/other/matches.jpg'
import microfinance from '../Assets/other/microfinance.jpg'
import paper from '../Assets/other/paper.jpg'
import portal from '../Assets/other/portal.jpg'


const ProductListCard = () => {
    return (
        <div className="min-h-screen">
            <div className="md:p-5 p-4 lg:pt-24 pt-20 transition-all duration-300 filter grayscale hover:grayscale-0">
                <div className="group relative block bg-black md:rounded-3xl rounded-lg">
                    <Image
                        alt="Developer"
                        src={other}
                        className="absolute md:rounded-3xl rounded-lg h-full w-full border-t-2 border-b-2 object-cover opacity-70 transition-opacity group-hover:opacity-80"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-44">
                        <h1 className='text-center md:text-6xl text-3xl md:leading-snug fontjsb text-zinc-100 group-hover:text-zinc-50'>Customized Other<br /> Services and Solutions</h1>
                    </div>
                </div>
            </div>
            <hr className="md:my-10 my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <div className='md:flex md:flex-row md:justify-center md:items-center flex flex-col justify-center items-center md:gap-10'>
                <div className="flex flex-col justify-center">
                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="md:min-w-[340px] flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <Image src={discrette}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 group-hover:opacity-40 transition-all duration-400"
                                    alt="" />

                                <div
                                    className="absolute z-10 md:border-4 border-2 border-dashed border-primary border-blue-900 md:w-[580px] md:h-[350px] w-[300px] h-[180px] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                    <p className='text-gray-900 text-sm md:text-xl md:pt-20 md:p-10 p-3 pt-0 fontjm text-justify'>
                                        In the context of computers and laptops, discrete manufacturing would involve
                                        assembling components like processors, memory modules, hard drives, displays,
                                        keyboards, and other hardware components to create the final product.
                                        The assembly process involves combining these individual parts in a systematic
                                        manner to produce a functional device.
                                    </p>
                                </div>

                            </div>
                            <h1 className="block text-black text-center fontjm hover:text-primary transition-colors duration-150 text-base md:text-xl">
                                DISCRETE MANUFACTURING - DM</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center pt-3 md:pt-0">
                    <div className="relative md:m-3 flex flex-wrap mx-auto justify-center">
                        <div className="md:min-w-[340px] flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <Image src={flour}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 group-hover:opacity-30 transition-all duration-400"
                                    alt="" />

                                <div
                                    className="absolute z-10 md:border-4 border-2 border-dashed border-primary border-amber-600 md:w-[580px] md:h-[350px] w-[300px] h-[180px] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                    <p className='text-black fontjm text-sm md:text-xl md:pt-28 md:p-10 p-3 pt-10 text-justify'>
                                        This could involve discussions with flour mill owners or managers to identify
                                        pain points, inefficiencies, and areas that could benefit from automation and
                                        digitization.
                                    </p>
                                </div>

                            </div>
                            <h1 className="block text-black fontjm text-center hover:text-primary transition-colors duration-150 text-base md:text-xl">
                                FLOUR MILL MANAGEMENT - FM</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='md:flex md:flex-row md:justify-center md:items-center flex flex-col justify-center items-center md:gap-10'>
                <div className="md:pt-14 md:p-0 p-3 flex flex-col justify-center">
                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="md:min-w-[340px] flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <Image src={freight}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 group-hover:opacity-30 transition-all duration-400"
                                    alt="" />

                                <div
                                    className="absolute z-10 md:border-4 border-dashed border-2 border-primary border-red-500 md:w-[600px] md:h-[350px] w-[300px] h-[180px] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                    <p className='text-black fontjm text-sm md:text-xl md:pt-28 md:p-10 p-3 pt-5 text-justify'>
                                        Integrating a freight forwarding business with a software company can bring
                                        numerous advantages, as technology plays a crucial role in optimizing processes,
                                        improving efficiency, and enhancing customer experience in the logistics industry.
                                    </p>
                                </div>

                            </div>
                            <h1 className="block text-black fontjm text-center hover:text-primary transition-colors duration-150 text-base md:text-xl">
                                FREIGHT FORWARDING BUSINESS - FF</h1>
                        </div>
                    </div>
                </div>
                <div className="md:pt-14 flex flex-col justify-center">
                    <div className="relative md:m-3 flex flex-wrap mx-auto justify-center">
                        <div className="md:min-w-[340px] flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <Image src={farmer}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 group-hover:opacity-30 transition-all duration-400"
                                    alt="" />

                                <div
                                    className="absolute z-10 border-dashed md:border-4 border-2 border-primary border-lime-500 md:w-[580px] md:h-[350px] w-[300px] h-[180px] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                    <p className='text-black fontjm text-sm md:text-xl md:pt-28 md:p-10 p-3 pt-5 text-justify'>
                                        A software company could develop digital platforms or apps that allow
                                        farmers and agribusinesses to manage their contract farming agreements
                                        efficiently. These platforms could provide tools for creating contracts,
                                        specifying terms, monitoring progress, and generating reports.
                                    </p>
                                </div>

                            </div>
                            <h1 className="block text-black fontjm text-center hover:text-primary transition-colors duration-150 text-base md:text-xl">
                                CONTRACT FARMING - CF</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <section id='micro' className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 md:pt-10 items-center justify-center flex-col">
                    <Image src={microfinance} className="relative z-10 lg:w-auto md:w-3/6 md:mb-5 object-cover object-center rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-r from-lime-900 to-yellow-800 md:mt-[380px] md:mb-80 md:p-96 p-36 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">MICRO FINANACE - MF</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base text-xs md:fontjm md:pr-[500px] text-zinc-100">
                            Empower financial inclusion with our Microfinance (MF) solution, enabling access to
                            small-scale financial services for individuals and businesses. Unlock financial opportunities
                            with our Microfinance (MF) solution, providing accessible and tailored financial services
                            for individuals and small businesses.
                        </p>
                    </div>
                </div>
            </section>
            <section id='con' className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={constrection} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-r from-sky-800 to-amber-400 md:mt-64 md:mb-[180px] md:p-96 p-36 mt-8 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">CONSTRUCTION MANAGEMENT - CM</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base text-xs md:fontjm md:pr-[500px] text-zinc-100">
                            Efficiently oversee construction projects with our comprehensive Construction Management (CM)
                            solution, ensuring seamless coordination and successful project delivery. Simplify construction
                            project management with our user-friendly Construction Management (CM) solution, optimizing
                            processes and ensuring project success.
                        </p>
                    </div>
                </div>
            </section>
            <section id='match' className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={matches} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 md:mb-5 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-tr from-blue-700 via-orange-600 to-purple-800 md:mt-32 md:mb-5 md:p-96 p-36 mt-4 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">MATCHES MANUFACTURERS - MM</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base md:fontjm text-xs md:pr-[500px] text-zinc-100">
                            Illuminate your matches manufacturing process with our specialized Matches Manufacturers (MM)
                            solution, optimizing production and ensuring quality outcomes. Elevate your matches manufacturing
                            with our tailored Matches Manufacturers (MM) solution, streamlining operations and delivering
                            superior quality products.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={paper} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 md:mb-5 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-tr from-yellow-900 to-gray-700 md:mt-80 md:mb-60 md:p-96 p-36 mt-4 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">PAPER MILL MANAGAMENT - PM</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base md:fontjm text-xs md:pr-[500px] text-zinc-100">
                            Simplify your paper mill operations with our comprehensive Paper Mill Management (PM)
                            solution, optimizing workflows and maximizing efficiency. Effortlessly manage your paper mill
                            operations with our user-friendly Paper Mill Management (PM) solution, ensuring smooth
                            processes and enhanced productivity.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={fireworks} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 md:mb-5 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-tr from-red-800 to-amber-600 md:mt-52 md:mb-28 md:p-96 p-36 mt-10 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">FIREWORKS MANUFACTURING - FWM</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base md:fontjm text-xs md:pr-[500px] text-zinc-100">
                            Elevate your fireworks manufacturing with our tailored Fireworks Manufacturing (FWM) solution,
                            streamlining operations and delivering dazzling, memorable shows. Experience explosive success
                            in fireworks manufacturing with our cutting-edge Fireworks Manufacturing (FWM) solution,
                            optimizing production processes and creating awe-inspiring spectacles.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={portal} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 md:mb-5 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-t from-gray-700 to-slate-100 md:mt-96 mt-2 md:mb-80 md:p-96 p-36 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">SUPPLIER PORTAL - SPR</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base md:fontjm text-xs md:pr-[500px] text-zinc-100">
                            Streamline your supplier management with our efficient Supplier Portal (SPR), facilitating
                            seamless communication and enhancing supply chain operations. Simplify supplier management with our user-friendly
                            Supplier Portal (SPR), connecting businesses for smooth collaboration and efficient supply chain processes.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font mb-10">
                <div className="relative container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <Image src={human} className="relative z-10 lg:w-auto md:p-4 md:w-3/6 md:mb-5 object-cover object-center md:rounded-3xl rounded" alt="hero" />
                    <div className='absolute md:w-full bg-white bg-gradient-to-tr from-gray-500 to-red-600 md:mt-60 md:mb-28 md:p-96 p-36 mt-10 md:rounded-xl rounded'></div>
                    <div className="relative text-left md:ml-8 p-3 md:p-0">
                        <h1 className="md:title-font sm:text-4xl text-base md:mb-4 mb-1 fontjm text-zinc-100">HUMAN CAPITAL MANAGEMENT - HCM</h1>
                        <p className="mb-8 md:leading-relaxed md:text-base md:fontjm text-xs md:pr-[500px] text-zinc-100">
                            Optimize your workforce with our comprehensive Human Capital Management (HCM) solution,
                            empowering you to effectively manage and nurture your talent. Unlock the full potential of
                            your workforce with our tailored Human Capital Management (HCM) solution, enabling seamless
                            management of personnel and fostering employee growth.
                        </p>
                    </div>
                </div>
            </section>


            {/* <div class="grid grid-flow-col grid-rows-1 p-36 pb-10 pt-10 grid-cols-3 gap-10">
                <div class="transform scale-150 -rotate-0 pt-32">
                    <h1 className='mt-2 font-bold'>MICRO FINANACE - MF</h1>
                    <p className='text-xs leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                    <img className='rounded-lg mt-2' src="https://www.bridgeindia.org.uk/wp-content/uploads/2020/03/microfinance-1.jpg" />
                </div>
                <div class="col-start-3 transform scale-100 rotate-0 translate-x-20 translate-y-0 bg-indigo-500 rounded-lg p-3">
                    <img className='rounded-lg' src="https://constructionexec.com/assets/site_18/images/article/102120123931.jpg?width=1280" />
                    <h1 className='mt-2 font-bold'>CONSTRUCTION MANAGEMENT - CM</h1>
                    <p className='text-base leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                </div>
                <div class="transform scale-150 translate-y-0 pt-6">
                    <img className='rounded-lg' src="https://i.etsystatic.com/24692794/r/il/1fac94/3313053721/il_fullxfull.3313053721_cbg9.jpg" />
                    <h1 className='mt-2 font-bold'>MATCHES MANUFACTURERS - MM</h1>
                    <p className='text-xs leading-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                </div>
                <div class="transform translate-y-0 translate-x-20 bg-purple-600 rounded-lg p-3">
                    <h1 className='mt-2 font-bold'>PAPER MILL MANAGAMENT - PM</h1>
                    <p className='text-base leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                    <img className='rounded-lg mt-2' src="https://www.alfalaval.com/globalassets/images/industries/pulp-and-paper/paper-production/paper-bleaching-plant-640x360.jpg" />
                </div>
                <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 bg-zinc-100 rounded-lg p-3 text-gray-800">
                    <img className='rounded-lg' src="https://compote.slate.com/images/acfed4c3-d3f4-443d-992f-57000d1546c8.jpg" alt="" loading="lazy" />
                    <h1 className='mt-2 font-bold'>FIREWORKS MANUFACTURING - FWM</h1>
                    <p className='text-md leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                </div>
            </div>

            <div class="grid grid-flow-col grid-rows-1 p-36 pt-0 pb-24 grid-cols-3 gap-10">
                <div class="transform scale-150 -rotate-0 pt-28">
                    <img className='rounded-lg' src="https://www.sncf.com/sites/default/files/styles/media_crop_4_3/public/2018-10/rawpixel-651365-unsplash.jpg?h=fb934b09&itok=2KhBwlDH" alt="" loading="lazy" />
                    <h1 className='mt-2 font-bold'>SUPPLIER PORTAL - SPR</h1>
                    <p className='text-xs leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                </div>
                <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-3 bg-zinc-100 rounded-lg p-3 text-gray-800">
                    <h1 className='mt-2 font-bold'>HUMAN CAPITAL MANAGEMENT - HCM</h1>
                    <p className='text-base leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?</p>
                    <img className='rounded-lg mt-2' src="https://blog-oss.investree.id/wp-content/uploads/2021/11/Gambar-Utama-Netblogtips.com_.jpg" alt="" loading="lazy" />
                </div>
            </div> */}
        </div>
    );
};

export default ProductListCard;
