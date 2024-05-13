'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('./menu'), {
    ssr: false
  });

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    
        <button className="hover:text-gray-400 underline py-2 rounded" onClick={toggleMenu}>here</button>
        
    </>
  );
};

export default MenuButton;