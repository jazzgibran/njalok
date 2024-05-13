'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./about'), {
    ssr: false
  });

const AboutButton = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
        <button className="hover:text-gray-400 px-3 mx-3 py-2 rounded" onClick={toggleAbout}>About</button>
        {showAbout && <About />}
    </>
  );
};

export default AboutButton;