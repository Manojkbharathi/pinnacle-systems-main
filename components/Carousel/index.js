import Image from 'next/image';
import re from '../Assets/re1.jpeg'
import img1 from '../Assets/assets-img1.jpeg'
import us from '../Assets/common/wh.jpg'

const Slider = () => {

  return (
    <div className='flex flex-col items-center w-screen'>
      <hr className="my-10 h-px flex border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
      <div className='h-auto flex flex-col md:flex-row w-full items-center justify-center gap-4'>    <Image src={img1} className=" relative ml-9 rounded-lg " width={460} height={400} style={{ float: "left" }} />
        <div className='container md:w-1/4 w-full items-stretch mx-4 p-4 rounded-md text-adjust shadow-lg h-full'> <h1 className='text-center	 fontjb md:text-3xl text-xl md:leading-relaxed leading-tight  text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900'>What we <span className='text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-500'>Do</span></h1>

          <p className="text-[1rem] font-extralight p-2 md:w-full w-full" >Pinnacle system provides modern, cloud-based and easy-to-use software solutions for Apparels & Textiles Industries. We specialise in enabling fashion manufacturing, sourcing and retailing companies to improve their lead times, costs and performance through technology
            .</p>


        </div></div>

      <hr className="my-10 h-px flex border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />

      {
        <div className='flex flex-col max-w-[100vw]mx-auto bg-white rounded-xl shadow-md overflow-hidden  items-center justify-center'>
          <h1 className='text-xl md:text-3xl leading-tight text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900 pb-8'>
            Why business <span className='text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-500'>choose us</span>
          </h1>
          <div className='text-black flex text-xs md:text-lg text-center md:text-left pl-8'>



            <br />

            <div className='ml-2 grid grid-cols-2'>
              <div className='text-black  text-xs  md:text-lg text-center md:text-left'>
                <div className='container w-3/4 items-stretch mx-4 rounded-md  shadow-lg'>
                  <h1 className=' text-center md:text-xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900'>Top ERP System Tailored for You</h1>
                  <p className="mb-2 p-2   text-justify text-[1rem] font-extralight  ">Considered as one of the top ERP systems globally, is built on the latest ERP technology.
                    It offers an extensive array of comprehensive modules,
                    each specifically designed to handle distinct aspects of your business, be it inventory management,
                    sales & purchase, finance, human resources, customer relationship management, or supply chain management.
                  </p>
                </div>
              </div>
              <div className='text-black   text-xs  md:text-lg text-center md:text-left'>
                <div className='container w-3/4  items-stretch mx-4 rounded-md  shadow-lg'>
                  <h1 className=' text-center md:text-xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-500'>Robust Security and Compliance</h1>
                  <p className="mb-2 p-2   text-justify text-[1rem] font-extralight  ">Our cloud-based ERP for small business and large enterprises is designed with top-tier security measures to safeguard your business's critical data.
                    The system ensures that your data is secure, private, and compliant with the latest regulations.</p>
                </div>
              </div>
              <div className='text-black  md:mt-8 text-xs  md:text-lg text-center md:text-left'>
                <div className='container w-3/4  items-stretch mx-4 rounded-md  shadow-lg'>
                  <h1 className=' text-center md:text-xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-500'>Redefining ERP with  Latest Version</h1>
                  <p className="mb-2 p-2   text-justify text-[1rem] font-extralight  ">Get ahead of your competition with our new ERP system, which offers a host of benefits of cloud ERP.
                    The latest version of Pinnace comes with enhanced features,
                    offering an intuitive, user-friendly interface and greater customization options.</p>
                </div>
              </div>
              <div className='text-black md:mt-8 text-xs  md:text-lg text-center md:text-left'>
                <div className='container w-3/4  items-stretch mx-4  rounded-md  shadow-lg'>
                  <h1 className=' text-center md:text-xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900'>Ease of Use and Accessibility</h1>
                  <p className="mb-2 p-2   text-justify text-[1rem] font-extralight  ">
                    Pinnacle ERP is not only the best ERP system but also a web-based ERP system.
                    It provides a user-friendly interface and requires minimal training,
                    allowing users to navigate and utilize the system effectively. Since it is
                    web-based, you can access the platform from any device that has internet connectivity.
                  </p>
                </div>
              </div>

            </div>
            {/* <div><Image src={us} className=" relative top-[10rem] rounded-lg " width={460} height={100} style={{ float: "right" }} /></div> */}
          </div>
        </div>
      }
      <hr className="my-10 h-px flex border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />

    </div>


  );
};

export default Slider;
