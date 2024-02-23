// import React from 'react';


// const Stepper = () => {

//   return (
//     <div>
//       <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
//       <h1 className='text-center md:text-6xl text-3xl font-bold fontjb text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-orange-500'>Excellence Record</h1>
//       <p className='text-black font-semibold p-4 md:mt-[20px] text-xs md:text-lg text-center'>In a short time we have become a Total <span className='text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-orange-500'>Solution</span> Provider and Technology Partner for Textile & other manufacturing companies.</p>
//       <section className="max-w-5xl mx-auto py-5">
//         <div>
//           <div className="flex flex-row">
//             <div className="hidden md:flex flex-col items-center">
//               <div className="w-32 py-5 border border-orange-500 rounded mr-4 uppercase flex flex-col items-center justify-center">
//                 <div className="text-3xl font-black text-black">Step 1</div>
//                 <div className="text-gray-500 text-sm">Idea</div>
//               </div>
//               <div className="h-full border-l-4 border-transparent">
//                 <div className="border-l-4 mr-4 h-full border-orange-500 border-dashed"></div>
//               </div>
//             </div>
//             <div className="flex-auto border rounded-r-full border-slate-600">
//               <div className="flex md:flex-row flex-col items-center">
//                 <div className="flex-auto">
//                   <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Step 1</span> - Idea</div>
//                   <div className="p-3 text-xl lg:text-3xl text-black font-bold">50+ Projects Done</div>
//                   <div className="px-3 pb-6 text-xs lg:text-base">We have special expertise in custom software development – Ever since our establishment, we are growing every day to meet the growing demands of our clients and surpass their expectations.</div>
//                 </div>
//                 {/* <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 1" className="object-scale-down" /></div> */}
//               </div>
//             </div>
//           </div>
//           <div className="flex items-start flex-row">
//             <div className="border-t-4 border-r-4 border-transparent">
//               <div className="w-16 ml-16 h-16 border-l-4 border-orange-500 border-dashed border-b-4 rounded-bl-full"></div>
//             </div>
//             <div className="border-t-4 border-transparent flex-auto">
//               <div className="h-16 border-b-4 border-orange-500 border-dashed"></div>
//             </div>
//             <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-orange-500 border-dashed border-t-4 rounded-tr-full"></div>
//           </div>
//           <div className="flex flex-row-reverse">
//             <div className="hidden md:flex flex-col items-center">
//               <div className="w-32 py-5 border border-orange-500 rounded ml-4 uppercase flex flex-col items-center justify-center">
//                 <div className="text-3xl font-black text-black">Step 2</div>
//                 <div className="text-gray-500 text-sm">Collaboration</div>
//               </div>
//               <div className="h-full border-r-4 border-transparent">
//                 <div className="border-l-4 ml-4 h-full border-orange-500 border-dashed"></div>
//               </div>
//             </div>
//             <div className="flex-auto border rounded-l-full border-slate-600 text-right">
//               <div className="flex md:flex-row flex-col items-center">
//                 <div className="flex-auto">
//                   <div className="md:hidden text-sm font-normal uppercase pt-3 pr-3 text-gray-500"><span className="font-black">Step 2</span> - Collaboration</div>
//                   <div className="p-3 lg:text-3xl text-xl text-black font-bold">50+ Happy Clients</div>
//                   <div className="px-3 pb-6 text-xs lg:text-base">Our Goal is 100% Customer Satisfaction and Customer Success.</div>
//                 </div>
//                 {/* <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 2" className="object-scale-down" /></div> */}
//               </div>
//             </div>
//           </div>
//           <div className="flex items-start flex-row-reverse">
//             <div className="border-t-4 border-l-4 border-transparent">
//               <div className="w-16 mr-16 h-16 border-r-4 border-orange-500 border-dashed border-b-4 rounded-br-full"></div>
//             </div>
//             <div className="border-t-4 border-transparent flex-auto">
//               <div className="h-16 border-b-4 border-orange-500 border-dashed"></div>
//             </div>
//             <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-orange-500 border-dashed border-t-4 rounded-tl-full"></div>
//           </div>
//           <div className="flex flex-row">
//             <div className="hidden md:flex flex-col items-center">
//               <div className="w-32 py-5 border border-orange-500 rounded mr-4 uppercase flex flex-col items-center justify-center">
//                 <div className="text-3xl font-black text-black">Step 3</div>
//                 <div className="text-gray-500 text-sm">Planification</div>
//               </div>
//               {/* <div className="h-full border-l-4 border-transparent">
//                 <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
//               </div> */}
//             </div>
//             <div className="flex-auto border rounded-r-full border-slate-600">
//               <div className="flex md:flex-row flex-col items-center">
//                 <div className="flex-auto">
//                   <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Step 3</span> - Planification</div>
//                   <div className="p-3 lg:text-3xl text-xl text-black font-bold">50+ Team Experts</div>
//                   <div className="px-3 pb-6 text-xs lg:text-base">The team is made up of highly-qualified, talented and innovative IT professionals each with their own area of expertise.</div>
//                 </div>
//                 {/* <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 3" className="object-scale-down" /></div> */}
//               </div>
//             </div>
//           </div>
//           {/* <div className="flex items-start flex-row">
//             <div className="border-t-4 border-r-4 border-transparent">
//               <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
//             </div>
//             <div className="border-t-4 border-transparent flex-auto">
//               <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
//             </div>
//             <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
//           </div>
//           <div className="flex flex-row-reverse">
//             <div className="hidden md:flex flex-col items-center">
//               <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
//                 <div className="text-3xl font-black text-gray-500">Step 4</div>
//                 <div className="text-gray-500 text-sm">Implementation</div>
//               </div>
//             </div>
//             <div className="flex-auto border rounded  border-gray-300">
//               <div className="flex md:flex-row flex-col items-center">
//                 <div className="flex-auto">
//                   <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Step 4</span> - Implementation</div>
//                   <div className="p-3 text-3xl text-gray-800 font">Execute, impletement your solution</div>
//                   <div className="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                 </div>
//                 <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 4" className="object-scale-down" /></div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </section>
//       <p className='text-black font-semibold pb-10 md:mt-[20px] text-xs md:text-lg text-center'>"Experience our outstanding track record of creating <span className='text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-orange-500'>impressive websites</span> that captivate audiences and achieve remarkable outcomes."</p>
//     </div>
//   );
// };

// export default Stepper;



// {/* <div className="min-h-screen">
//   <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
//   <h1 className='text-center md:text-6xl text-3xl font-bold fontjb text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-orange-500'>Excellence Record</h1>
//   <p className='text-black font-semibold p-4 md:mt-[20px] text-xs md:text-lg text-center'>In a short time we have become a Total <span className='text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-orange-500'>Solution</span> Provider and Technology Partner for Textile & other manufacturing companies.</p>
//   <div className="container pt-7 mx-auto w-full h-full">
//     <div className="relative wrap md:pt-10 pt-8 overflow-hidden p-5 md:p-10 md:h-full">
//       <div className="h-full w-px self-stretch md:left-1/2 absolute bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-90 dark:opacity-100"></div>

//       <div className="relative  mb-8 md:flex md:justify-between md:items-center flex justify-start items-center w-full right-timeline">
//         <div className="order-1 md:w-5/12"></div>
//         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl md:w-8 w-6 md:h-8 h-6 rounded-full">
//           <h1 className="mx-auto font-semibold md:text-lg text-sm text-gray-300">1</h1>
//         </div>
//         <span
//           className="absolute md:w-[500px] md:ml-[700px] ml-6 inset-0 -z-10 -translate-x-2 -translate-y-2 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <span
//           className="absolute md:w-[500px] md:ml-[700px] ml-6 inset-0 -z-20 -translate-x-4 -translate-y-4 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <div className="ease-out delay-150 md:hover:-translate-y-3 hover:-translate-y-3 hover:scale-110 hover:rotate-3 hover:bg-slate-800 hover:text-zinc-400 text-gray-900 duration-300 order-1 bg-orange-300 md:rounded-3xl rounded-lg shadow-2xl md:ring-4 ring-2 ring-black transition hover:shadow-sm shadow-orange-500/50 md:w-5/12 w-full md:p-6 p-4">
//           <h3 className="md:mb-3 mb-1 md:text-xl fontjb text-sm">50+ Projects Done</h3>
//           <p className="md:text-base fontjm text-xs text-justify font-medium leading-snug tracking-wide text-opacity-100">We have special expertise in custom software development – Ever since our establishment, we are growing every day to meet the growing demands of our clients and surpass their expectations.</p>
//         </div>
//       </div>

//       <div className="relative mb-8 md:flex md:justify-between md:items-center md:flex-row-reverse flex justify-start items-center w-full left-timeline">
//         <div className="order-1 md:w-5/12"></div>
//         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl md:w-8 w-6 md:h-8 h-6 rounded-full">
//           <h1 className="mx-auto text-gray-300 font-semibold md:text-lg text-sm">2</h1>
//         </div>
//         <span
//           className="absolute md:w-[500px] md:mr-[700px] ml-6 md:ml-0 inset-0 -z-10 -translate-x-2 -translate-y-2 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <span
//           className="absolute md:w-[500px] md:mr-[700px] ml-6 md:ml-0 inset-0 -z-20 -translate-x-4 -translate-y-4 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <div className="ease-out delay-150 md:hover:-translate-y-3 hover:-translate-y-3 hover:scale-110 hover:-rotate-3 hover:bg-orange-300 hover:text-gray-900 duration-300 order-1 text-zinc-400 bg-slate-800 md:rounded-3xl rounded-lg shadow-2xl transition hover:shadow-sm md:ring-4 ring-2 ring-black shadow-gray-500/40 md:w-5/12 w-full md:p-6 p-4">
//           <h3 className="md:mb-3 mb-1 font-bold fontjb md:text-xl text-sm">50+ Happy Clients</h3>
//           <p className="md:text-base fontjm text-xs text-justify font-medium leading-snug tracking-wide text-opacity-100">Our Goal is 100% Customer Satisfaction and Customer Success</p>
//         </div>
//       </div>

//       <div className="relative mb-8 md:flex md:justify-between md:items-center flex justify-start items-center w-full right-timeline">
//         <div className="order-1 md:w-5/12"></div>
//         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl md:w-8 md:h-8 w-6 h-6 rounded-full">
//           <h1 className="mx-auto font-semibold md:text-lg text-sm text-gray-300">3</h1>
//         </div>
//         <span
//           className="absolute md:w-[500px] md:ml-[700px] ml-6 inset-0 -z-10 -translate-x-2 -translate-y-2 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <span
//           className="absolute md:w-[500px] md:ml-[700px] ml-6 inset-0 -z-20 -translate-x-4 -translate-y-4 md:rounded-3xl rounded-lg bg-white md:ring-4 ring-2 ring-black"
//         ></span>
//         <div className="ease-out delay-150 md:hover:-translate-y-3 hover:-translate-y-3 hover:scale-110 hover:rotate-3 hover:bg-slate-800 hover:text-zinc-400 text-gray-900 duration-300 order-1 bg-orange-300 md:rounded-3xl rounded-lg shadow-2xl transition md:ring-4 ring-2 ring-black hover:shadow-sm shadow-orange-500/50 md:w-5/12 w-full md:p-6 p-4">
//           <h3 className="md:mb-3 mb-1 font-bold fontjb md:text-xl text-sm">50+ Team Experts</h3>
//           <p className="md:text-base fontjm text-xs text-justify font-medium leading-snug tracking-wide text-opacity-100">The team is made up of highly-qualified, talented and innovative IT professionals each with their own area of expertise.</p>
//         </div>
//       </div>

//     </div>
//   </div>
// </div> */}