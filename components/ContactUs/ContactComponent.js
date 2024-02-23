import Image from "next/image";
import { ENVELOPE_ICON, PHONE_ICON } from "../Assets/icons";
import contact from "../Assets/contact/contact3.jpeg"

export const ContactComponent = () => {
    return (
        <div className="relative">
            <Image
                src={contact}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75 ">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 160"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl lg:mb-12 lg:mt-0 mt-5 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="mb-6 text-xl font-bold text-white sm:text-4xl">
                                Interested in our IT services or need advice? Then please get in touch and we’ll be glad to help.
                            </h2>
                            {/* <p className="max-w-xl mb-4 text-base md:text-lg text-black bg-white/60 backdrop-blur-lg opacity-80 rounded p-3 font-bold">
                                "In the business world, everyone is paid in two coins: cash and experience.
                                Take the experience first; the cash will come later."
                            </p> */}
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 pt-10">
                            <div className="bg-white rounded-md shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-left sm:mb-6 sm:text-2xl">
                                    Let's Talk about your Business
                                </h3>
                                <div className='md:flex md:flex-col md:items-start md:py-0 py-0 md:justify-center flex flex-col justify-center items-start'>
                                    <div className='md:text-left'>
                                        <h1 className='font-bold md:text-xl text-black'>Schedule for demo:</h1>
                                        <p className='md:mt-5 mt-2 text-xs text-black font-medium md:text-lg'><span className="text-orange-400">{ENVELOPE_ICON}</span> manoj@pinnaclesystems.co.in</p>
                                        <p className='text-xs text-black font-medium md:text-lg'><span className="text-orange-400">{PHONE_ICON}</span> +91 9994610733</p>
                                        <p className='md:mt-5 mt-2 text-xs text-black font-medium md:text-lg'><span className="text-orange-400">{ENVELOPE_ICON}</span> anbu.thondan@pinnaclesystems.co.in</p>
                                        <p className='text-xs text-black font-medium md:text-lg'><span className="text-orange-400">{PHONE_ICON}</span> +91 9042762263</p>
                                    </div>
                                    <div className='md:text-left lg:mt-8 mt-3'>
                                        <h1 className='font-bold md:text-xl text-black'>Career Enquiries:</h1>
                                        <p className='md:mt-5 mt-2 text-black font-medium text-xs md:text-lg'><span className="text-orange-400">{ENVELOPE_ICON}</span> manoj@pinnaclesystems.co.in</p>
                                        <p className='text-xs text-black font-medium md:text-lg'><span className="text-orange-400">{PHONE_ICON}</span> +91 9994610733</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};