import React from 'react';
import dynamic from 'next/dynamic';
import bg from '../../assets/welcomebg.jpg';
import Image from 'next/image';

import AboutButton from '../about/aboutButton';
import logo from '../../assets/logonjalok.png';

const AnimatedText = dynamic(() => import('./animatedtext'), {
  ssr: false
});

const WelcomeSection = () => {
 

  return (
    <section className="min-h-screen w-full flex flex-col justify-center overflow-hidden items-center">
      <div className='w-full -z-10 min-h-screen absolute bottom-0'>
        <Image alt='background' src={bg} className='opacity-40 w-full h-screen object-cover'>
        </Image>
      </div>
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-3 text-white absolute top-0 ">
      <a href='#about-section' >
      <Image alt='logo'src={logo} className='w-32'></Image>
      </a>
      
        <a href='#about-section' className="hover:text-gray-400 rounded" >About</a>
      </div>
      <div className="max-w-[70%] sm:max-w-4xl f">
        <AnimatedText />        
      </div>
      <p className="absolute bottom-0 font-cinzel font-bold text-lg text-white">COME <a href="#contact-section" className='hover:text-gray-400 underline py-2 rounded'>VISIT</a> US NOW</p>
    </section>
    
  );
};

export default WelcomeSection;