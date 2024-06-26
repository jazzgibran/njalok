import React from 'react';
import Image from 'next/image';
import pict from "../../assets/angga.png"

const AboutSection = () => {
  return (
    <div id='about-section' className="min-h-screen bg-black text-center relative">
      <video autoPlay muted loop className="absolute mx-auto left-0 right-0 opacity-30 md:w-10/12 h-full object-cover">
        <source src="/videos/aboutbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-9/12 py-10 mx-auto min-h-screen flex flex-col justify-center items-center z-10 relative">
        <div className='max-w-4xl'>
          <h1 className="font-dm text-md lg:text-3xl mb-4">Get to Know N&apos;jalok Kopi</h1>
          <h1 className="font-serif text-sm lg:text-lg mb-8">N&apos;jalok Kopi
          <span> isn&apos;t just a cafe; it&apos;s a culmination of passion, dedication, and a love for great coffee and community. Founded in 2020 by Angga, our journey began with a simple idea: to create a space where people could come together, enjoy exceptional coffee, and forge meaningful connections.
            </span>  
            </h1>
          <p className="font-serif text-sm lg:text-lg mb-8">Our cafe is committed to community engagement, sustainability, and delivering high-quality products.</p>
          <div className="">
              <Image src={pict} alt="Founder" className="mx-auto w-24 lg:w-32 rounded-full mb-2" />
              <h3 className="font-serif lg:text-xl">Angga Syfa Kurniawan</h3>
              <p className="text-gray-400">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;