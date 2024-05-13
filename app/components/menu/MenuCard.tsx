import React from 'react';
interface MenuCardProps {
  title: string;
  price: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, price }) => {
  return (
    <div
      className="bg-white relative flex justify-between w-11/12 lg:w-full p-4 mx-auto text-gray-900 rounded-lg shadow-lg overflow-hidden"
    >
        <div className='flex flex-col pr-5'>
        <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <span className="text-lg font-bold">{price}</span>
      
    </div>
  );
};

export default MenuCard;