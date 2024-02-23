import Image from 'next/image';
import garments from '../Assets/textile/garment.jpg'


export const GarmentsDetails = () => {
    return (
        <div className="relative flex flex-col-reverse py-5 lg:pt-0 lg:flex-col lg:pb-0 border lg:border-none border-dashed border-red-400 rounded-lg">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    alt="Party"
                    src={garments}
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-0 lg:my-40 lg:max-w-lg lg:pr-5">
                    <h2 className="lg:mb-5 mb-1 text-base fontjsb text-black sm:text-4xl sm:leading-none">
                        THE GARMENTS MANAGEMENT SOLUTION
                    </h2>
                    <p className="pr-5 mb-5 md:text-base text-xs text-black fontjm">
                        Make managing garments a breeze with our straightforward software solution, helping you
                        organize and optimize operations effectively. Take control of your garments management
                        effortlessly with our intuitive software solution, enabling you to streamline tasks and achieve greater productivity.
                    </p>
                </div>
            </div>
        </div>
    );
};