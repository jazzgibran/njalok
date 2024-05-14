import React from 'react';
interface MenuCardProps {
  title: string;
  price: string;
  onClick: () => void;
  description: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, price, description, onClick }) => {
  return (
    <button
      className="hover:scale-110 transition-all bg-white relative flex justify-between w-full lg:w-full px-4 py-3 mx-auto text-gray-900 rounded-lg shadow-lg overflow-hidden"
      onClick={onClick}
    >
        <div className='flex flex-col pr-5'>
        <h4 className="text-xl md:text-2xl lg:text-3xl mb-1 text-left">{title}</h4>
        <p className='text-xs sm:text-sm text-left text-gray-500'>Click for details</p>
        </div>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold">{price}</span>
    </button>
  );
};

export default MenuCard;