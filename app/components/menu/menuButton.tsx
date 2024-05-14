'use client'
import React, { useState } from 'react';
import MenuCard from './MenuCard';
import menuItems from "./menuItems.json"
import Modal from "../modal"

import { motion } from 'framer-motion';

const MenuButton = () => {
  const [switchMenu, setSwitchMenu] = useState("kopi");
  const kopiItems = menuItems.kopi;
  const nonKopiItems = menuItems.nonkopi;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ description: '', title: '' });

  const handleCardClick = (description: string, title: string) => {
    setModalContent({ description, title});
    setIsModalOpen(true);
    console.log("CLICKED")
  };

  const toggleSwitchMenu = ({ menu }: { menu: string }) => {
    setSwitchMenu(menu);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className=' py-6 md:py-0 bg-black flex mx-auto items-center flex-col gap-2'>
      <div className=''>
        <h2 className="text-4xl lg:text-6xl text-center md:mt-10 block font-semibold">Our Menu</h2>
        <div className='flex justify-center mt-3 gap-3'>
          <button
            className={`cursor-pointer lg:text-xl hover:bg-gray-800 hover:text-gray-200 ${switchMenu === "kopi" ? "animate-pulse underline" : ""} transition-all text-white px-4 py-2 rounded`}
            onClick={() => toggleSwitchMenu({ menu: "kopi" })}>Kopi</button>
          <button
            className={`cursor-pointer lg:text-xl hover:bg-gray-800 hover:text-gray-200 ${switchMenu === "nonkopi" ? "animate-pulse underline" : ""} transition-all text-white px-4 py-2 rounded`}
            onClick={() => toggleSwitchMenu({ menu: "nonkopi" })}>Non-Kopi</button>
        </div>
      </div>
      <div className='w-11/12 flex flex-col'>
        {switchMenu === "nonkopi" && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl lg:text-4xl font-semibold mb-4 text-center md:text-left">Non-Kopi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {nonKopiItems.map(item => (
                <MenuCard
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                onClick={() => handleCardClick(item.description, item.title)}
              />
              ))}
            </div>
          </motion.div>
        )}
        {switchMenu === "kopi" && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
            className='px-6'
          >
            <h3 className="text-2xl lg:text-4xl font-semibold text-center md:text-left mb-4">Kopi</h3>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {kopiItems.map(item => (
                 <MenuCard
                 key={item.title}
                 title={item.title}
                 price={item.price}
                 description={item.description}
                 onClick={() => handleCardClick(item.description, item.title)}
               />
              ))}
            </div>
          </motion.div>
        )}
      </div>
      {isModalOpen == true  && (
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl mb-1">{modalContent.title}</h4>
      <p className="">{modalContent.description}</p>
    </Modal>
    )
    }
      
    </motion.div>
  );
}
export default MenuButton;
