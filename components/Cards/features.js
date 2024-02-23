import Image from 'next/image';
import re from '../Assets/re1.jpeg'
import img2 from '../Assets/assets-img2.jpeg'
const features = () => {

  return (
    <div className='w-screen'>
      <hr className="my-10 h-px flex border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
      <Image src={img2} className=" relative ml-9 rounded-lg " width={460} height={400} style={{ float: "right" }} />
      <h1 className='text-center	 fontjb md:text-6xl text-3xl md:leading-relaxed leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900'>What we <span className='text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-500'>Do</span></h1>      <div className='text-black p-1 md:mt-0.5 text-xs font-semibold md:text-lg text-center'>
        <p className='text-black p-1 md:mt-4 text-xs font-semibold md:text-lg text-center'>Pinnacle system provides modern, cloud-based and easy-to-use software solutions for<br /> Apparels & Textiles Industries,. We specialise inenabling fashion manufacturing, sourcing and<br /> retailing companies to improve their lead times, costs and performance through technology.</p>

      </div>

    </div>


  );
};

export default features;
