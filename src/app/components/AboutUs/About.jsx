import React from 'react';
import './About.css'; // Ensure this CSS file is created and imported
import '../SignInUp/Sign.css';

const About = () => {
  return (
    <section id='About' className='max-h-fit'>
    <h1 className='fade-in-up text-center pt-0 text-4xl sm:text-5xl lg:text-6xl mt-0 text-transparent bg-clip-text bg-gradient-to-br from-[#13163F] to-[#67E331] font-extrabold'>
        About us
    </h1>
    <div className='md:hidden flex'>
             <div className='flex flex-col  md:grid md:grid-cols-2 gap-4 items-center text-white bg-gradient-to-br from-[#13163F] to-[#67E331] px-4 py-16 m-4 rounded-lg'>
                <p className='text-lg py-2 '>This project takes 2D images to new dimensions, converting them into detailed 6D models that capture both spatial and temporal nuances. By integrating image dehazing techniques, it enhances clarity and precision, especially in medical imaging, where accurate visualizations of bones, tissues, and organs are critical for diagnosis and treatment planning. Beyond healthcare, this approach unlocks potential in fields like engineering, archaeology, and robotics, offering richer, multidimensional insights into complex structures. The combination of 6D reconstruction and dehazing ensures more precise, actionable data for decision-making across diverse real-world applications.</p>
        </div>
    </div>
    <div className='md:flex w-full hidden'>
    <div className="flex flex-wrap md:justify-between justify-center  my-8 p-4 bg-gray-100  space-x-8 gap-12 w-full ">   
      <div className="relative fade-in-right md:flex-1  rounded-full w-80 h-80 bg-white shadow-md border border-gray-300 ">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#13163F] to-[#67E331] text-white flex items-center justify-center rounded-full shadow-md">
          Input
        </div>
        <div className='circle-section text-center mx-20 mt-16'>
         <p className='font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero voluptatem quaerat iusto, incidunt, enim quod vero nesciunt aliquam voluptatum adipisci obcaecati eaque eveniet suscipit eius. Veritatis id blanditiis consequuntur!</p>
        </div>
      </div>

      <div className="relative md:flex-1 fade-in-right rounded-full w-80 h-80 bg-white shadow-md border border-gray-300 ">
      <div className='circle-section text-center mx-20 mt-16'>
         <p className='font-semibold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero voluptatem quaerat iusto, incidunt, enim quod vero nesciunt aliquam voluptatum adipisci obcaecati eaque eveniet suscipit eius. Veritatis id blanditiis consequuntur !</p>
        </div>
        <div className="absolute -bottom-1/4  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#13163F] to-[#67E331] text-white flex items-center justify-center rounded-full shadow-md">
        Processing
        </div>
      </div>

      <div className="relative fade-in-right md:flex-1 grid-rows-2 rounded-full w-80 h-80 bg-white shadow-md border border-gray-300 ">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#13163F] to-[#67E331] text-white flex items-center justify-center rounded-full shadow-md">
          Output
        </div>
        <div className='circle-section text-center mx-20 mt-16'>
         <p className='font-semibold text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum officiis saepe maxime beatae quia facilis obcaecati expedita ducimus doloribus excepturi fuga, voluptas veritatis natus eaque suscipit earum harum! Dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero voluptatem quaerat iusto, incidunt, enim quod vero nesciunt aliquam voluptatum adipisci obcaecati eaque eveniet suscipit eius. Veritatis id blanditiis consequuntur!</p>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default About;
