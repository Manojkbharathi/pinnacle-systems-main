import Image from "next/image";
import Laptop from "../Assets/laptop.png"

export const CareerComponent = () => {
    return (
        <div className="relative flex flex-col-reverse px-4 pt-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                <Image
                    src={Laptop}
                    className=" w-full h-auto lg:w-auto lg:h-50"
                    alt=""
                />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                <div className="mb-5 lg:pr-5 lg:max-w-lg lg:mb-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PINNACLE
                            </p>
                        </div>
                        <h1 className='md:text-4xl text-2xl fontjsb text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Showing current offers and Jobs available</h1>
                        <p className="text-xs mt-6 text-gray-700 md:text-lg">
                            "Your work is going to fill a large part of your life, and the only way to be truly
                            satisfied is to do what you believe is great work. And the only way to do great work
                            is to love what you do."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


//     return (
//         <div className="mb-16">
//             <div className="bg-gray-100">
//                 <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
//                     <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
//                         <div>
//                             <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//                                 PINNACLE
//                             </p>
//                         </div>
//                         <h1 className='text-center md:text-4xl text-2xl fontjsb text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Showing current offers and Jobs available</h1>
//                         <p className="text-xs mt-8 text-gray-700 md:text-lg">
//                             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                             accusantium doloremque rem aperiam, eaque ipsa quae.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative px-4 sm:px-0">
//                 <div className="absolute inset-0 bg-gray-100 h-1/2" />
//                 <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
//                     <div className="inline-block p-8 text-center">
//                         <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
//                             <svg
//                                 className="w-10 h-10 text-deep-purple-accent-400"
//                                 stroke="currentColor"
//                                 viewBox="0 0 52 52"
//                             >
//                                 <polygon
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     fill="none"
//                                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                                 />
//                             </svg>
//                         </div>
//                         <p className="font-bold tracking-wide text-gray-800">
//                             Make it better
//                         </p>
//                     </div>
//                     <div className="inline-block p-8 text-center">
//                         <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
//                             <svg
//                                 className="w-10 h-10 text-deep-purple-accent-400"
//                                 stroke="currentColor"
//                                 viewBox="0 0 52 52"
//                             >
//                                 <polygon
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     fill="none"
//                                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                                 />
//                             </svg>
//                         </div>
//                         <p className="font-bold tracking-wide text-gray-800">
//                             Do it faster
//                         </p>
//                     </div>
//                     <div className="inline-block p-8 text-center">
//                         <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
//                             <svg
//                                 className="w-10 h-10 text-deep-purple-accent-400"
//                                 stroke="currentColor"
//                                 viewBox="0 0 52 52"
//                             >
//                                 <polygon
//                                     strokeWidth="3"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     fill="none"
//                                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                                 />
//                             </svg>
//                         </div>
//                         <p className="font-bold tracking-wide text-gray-800">
//                             Working harder
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };