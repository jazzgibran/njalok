import React from 'react';
import MenuCard from './MenuCard'; // Import the MenuCard component

const MenuSection = () => {
  // Example data for the menu cards
  const menuItems = [
    {
      title: 'Espresso',
      description: 'kopi',
      price: 'Rp 6k-15k',
    },
    {
      title: 'Kopsu Hazelnut',
      description: 'kopi',
      price: 'Rp 13k',
    },
    {
      title: 'Kopsu Aren',
      description: 'kopi',
      price: 'Rp 12k',
    },
    {
      title: 'Teh Lemon',
      description: 'nonkopi',
      price: 'Rp 7k',
    },
    {
      title: 'Teh (es/panas)',
      description: 'nonkopi',
      price: 'Rp 5k',
    },
    {
      title: 'Pisang Susu',
      description: 'nonkopi',
      price: 'Rp 10k',
    },
    // Add more items as needed
  ];

  // Filter items based on description
  const kopiItems = menuItems.filter(item => item.description === 'kopi');
  const nonKopiItems = menuItems.filter(item => item.description === 'nonkopi');

  return (
    <div id='menu-section' className="w-full font-serif bg-black rounded-t-xl" >
      <div className="w-9/12 min-h-screen mx-auto flex flex-col justify-center items-center">
        <div className="max-w-4xl py-6">
          <h2 className="text-3xl font-semibold mb-6">Our Menu</h2>
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Kopi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kopiItems.map(item => (
                <MenuCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Non-Kopi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonKopiItems.map(item => (
                <MenuCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;