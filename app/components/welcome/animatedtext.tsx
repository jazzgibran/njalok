'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuButton from '../menu/menuButton';

const AnimatedText = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className='w-full flex flex-col items-center justify-center'
      >
        <div>
          <hr />
          <p className="font-dm text-5xl mb-3 text-white text-center">Your daily dose of caffeine.</p>
          <hr />
        </div>
        <p className='font-serif mt-2'>Check our menu <a href="#menu-section" className="hover:text-gray-400 underline font-bold py-2 rounded ">here</a>!</p>
      </motion.div>
    </>
  );
};

export default AnimatedText;