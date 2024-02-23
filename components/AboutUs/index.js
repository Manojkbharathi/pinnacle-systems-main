import { RIGHT_ARROW_ICON } from "../Assets/icons";
import Image from "next/image";
import aboutimg from '../Assets/about/photo-1518081461904-9d8f136351c2.jpg'

const AboutUs = () => {

    return (
        <div className="relative flex flex-col items-center justify-center pt-20">
            <div className="relative">  <Image
                alt="Developer"
                src={aboutimg}
                className=" md:rounded-3xl rounded-lg pt-5 h-[75vh] w-[85vw] border-t-2 border-b-2  object-cover opacity-80 transition-opacity hover:opacity-100"
            />
                <h1 className='absolute top-[45%] left-[45%] text-[3rem] text-black pt-4 text-center  text-2xl text-white  font-semibold '>About Us</h1></div>
            <div className="">  <p className='text-black md:px-20  md:mt-[10px]  text-xs md:text-lg md:text-start text-justify  md:p-2 fontRoboto'>Established in 2018, we are a group of technology specialists who are passionate about fashion.  We specialize in enabling fashion manufacturing, sourcing and retailing companies to improve their lead times, costs and performance through technology.
                .</p></div>
            <div className=""> <p className='text-black font-medium md:px-20  md:mt-[10px] text-xs md:text-lg text-left  md:p-1'>With operations in India, we deliver end to end No 1 Cloud based ERP solutions for Apparels and Textiles Industries
            </p></div>
            <div className="flex "> <p className='text-black font-medium md:px-20  pb-6 md:mt-[10px] text-xs md:text-lg text-start   md:p-2 fontRoboto'>Our team of 50+ professionals includes the market leading qualified Industry experts, including Project leaders, Developers, Implementation executives, Strong Salesforce and managers
            </p>
                <hr className="my-4 h-px flex border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" /></div>

            <div className="flex flex-col md:flex-row md:w-[80%] w-full  pb-10 items-center justify-center text-center">
                <div className="bg-img w-1/2 h-[40vh] flex flex-col items-center justify-center mx-4 rounded-md  shadow-lg ">

                    <div className="hover:backdrop-blur-xl ">
                        <h1 className=' text-center md:text-xl leading-tight font-bold  md:p-1 p-4 text-black'>Our Vision

                        </h1>
                        <p className="p-2 fontRoboto  text-xl text-transparent hover:text-white"> Aids fashion companies in streamlining product development, Pioneering the future of supply chain efficiency. To create the biggest digitally enabled fashion supply chain platform of the world
                        </p>
                    </div></div>
                <div className="mbg-img w-1/2 h-[40vh] flex flex-col items-center justify-center mx-4 rounded-md  shadow-lg ">

                    <div className="hover:backdrop-blur-xl ">
                        <h1 className=' text-center md:text-xl leading-tight font-bold  md:p-1 p-4 text-black'>Our Mission
                        </h1>
                        <p className="p-2 fontRoboto  text-xl text-transparent hover:text-white"> We want to use innovation to transform fashion businesses to enable them to grow fast with industry-leading technology that's easy for anyone to use.

                        </p>
                    </div></div>

            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-24 text-center justify-center items-center pb-5">
                <div class="bg-blue-100 text-blue-800 text-lg font-medium rounded-full dark:bg-blue-900 dark:text-blue-300 h-36 w-36 flex-items-center px-2 p-2 pt-14">
                    Established
                    2018
                </div>
                <div class="bg-gray-100 text-gray-800 text-lg font-medium rounded-full dark:bg-gray-700 dark:text-gray-300 h-36 w-36 p-2 pt-14">Clients
                    90+
                </div>
                <div class="bg-red-100 text-red-800 text-lg font-medium rounded-full dark:bg-red-900 dark:text-red-300 h-36 w-36 p-2 pt-12">Projects  Completed
                    200+
                </div>
                <div class="bg-green-100 text-green-800 text-lg font-medium rounded-full dark:bg-green-900 dark:text-green-300 h-36 w-36 p-2 pt-14">Team  Members
                    50+
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
