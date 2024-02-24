import { RIGHT_ARROW_ICON } from "../Assets/icons";
import Image from "next/image";
import team from '../Assets/team/ASS_1169.jpg'
import ceo from '../Assets/team/ASS_1117-.jpg'
import sales from '../Assets/team/sales2.jpg'
import head from '../Assets/team/ASS_1065 copy-.jpg'
import picture from '../Assets/about/Picture1.png'
const Team = () => {

    return (
        <div className="  fontRoboto flex flex-col items-center justify-between pt-20 h-auto ">

            <h1 className='text-2xl text-black p-4 text-center  text-2xl  font-semibold'>Our Team</h1>
            <div className="overflow-hidden">  <p className='text-black md:px-20 p-5 md:mt-[20px] fontRoboto  md:text-lg text-lg md:text-center text-justify '>Pinnacle is led by a team of specialists who are passionate about fashion vertical, with one goal helping the apparel retail world to discover, develop and deliver products at digital speed. It connects different stakeholders on a single digital platform and allows fashion companies to be agile and quick.</p></div>
            <div className="md:flex gap-5">  <>
                <label htmlFor="slider" />
                <div className="wrapper">
                    <div className="top-icons">
                        <i className="fas fa-long-arrow-alt-left" />
                        <i className="fas fa-ellipsis-v" />
                        <i className="far fa-heart" />
                    </div>
                    <div className="profile">
                        <Image src={ceo} className="thumbnail" alt="" />


                        <div className="check">
                            <i className="fas fa-check" />
                        </div>
                        <h1 className="name underline">Manoj P, CEO</h1>

                        <p className='description'>
                            An entrepreneur with over 20 years of experience in helping fashion companies implement technology solutions in their organizations. An out of the box thinker, Manoj is also recognized as a thought leader in the fashion industry.
                        </p>

                    </div>

                </div>

            </>

                <>
                    <label htmlFor="slider" />
                    <div className="wrapper">
                        <div className="top-icons">
                            <i className="fas fa-long-arrow-alt-left" />
                            <i className="fas fa-ellipsis-v" />
                            <i className="far fa-heart" />
                        </div>
                        <div className="profile">
                            <Image
                                src={sales}
                                alt=""
                                className="thumbnail"
                            />

                            <div className="check">
                                <i className="fas fa-check" />
                            </div>
                            <h3 className=" text-2xl font-semibold name underline">Anbu, Head Sales</h3>

                            <p className='description'>
                                A highly skilled IT professional with 22+years of work experience in selling world class enterprise software solution for the industries across varied Apparel & Textiles Business segments.  Anbu’s contribution to the company development is the maximum which could be verified in the market of  India & Bangladesh.
                            </p>

                        </div>

                    </div>

                </> <>
                    <label htmlFor="slider" />
                    <div className="wrapper">
                        <div className="top-icons">
                            <i className="fas fa-long-arrow-alt-left" />
                            <i className="fas fa-ellipsis-v" />
                            <i className="far fa-heart" />
                        </div>
                        <div className="profile">

                            <Image
                                src={head}
                                className="thumbnail" alt=""
                            />
                            <div className="check">
                                <i className="fas fa-check" />
                            </div>
                            <h3 className="name underline">Satheesh Kumar, Project Head</h3>
                            <p className='description'>
                                Satheesh heads the development at Pinnacle ERP. With over 12+ years of experience in product, architecture and full-stack development, he worked on multiple technology platforms related to application development and mobile apps. He has exposure to cutting-edge technologies & has worked with more no of clients to resolve their apprehensions and build confidence towards the products.


                            </p>

                        </div>

                    </div>

                </>
            </div>
            <div className="wrapper2">
                <div className="top-icons">
                    <i className="fas fa-long-arrow-alt-left" />
                    <i className="fas fa-ellipsis-v" />
                    <i className="far fa-heart" />
                </div>
                <div className="profile flex  flex-col items-center p-2">

                    <Image
                        src={picture}
                        className="thumbnail" alt=""
                    />
                    <div className="check">
                        <i className="fas fa-check" />
                    </div>
                    <h3 className="text-2xl font-semibold name text-center">Client Experience</h3>
                    <p className='description text-center'>

                        Our customer-centric approach calls for smooth transition - right from understanding their requirements, developing the solutions, on time and the entirely reliable after support

                    </p>

                </div>

            </div>
            <div className="relative">  <Image
                alt="Developer"
                src={team}
                className=" md:rounded-3xl rounded-lg pt-5 md:h-[75vh] md:w-[85vw] border-t-2 border-b-2  object-cover md:opacity-50 md:transition-opacity md:hover:opacity-100"
            />
                <h1 className='absolute top-[4%] left-[45%] text-[3rem] text-black pt-4 text-center  md:text-3xl text-xl text-green-800  font-semibold '>Our Crew</h1></div>


            <div className="overflow-hidden">  <p className='text-black font-medium md:px-20 p-4 pb-6 md:mt-[10px] text-sm md:text-lg  text-start   md:p-2 fontRoboto '>
                Team of Pinnacle Software developers, Implementation team, Testing Team, Marketing & Sales professionals, and Back office Team.

            </p></div>
        </div >
    );
};

export default Team;
