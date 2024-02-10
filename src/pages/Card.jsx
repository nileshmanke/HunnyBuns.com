import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Card = () => {
  const imgSrc = 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg'; // Example image URL
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500); // Trigger content display after 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden relative rotating-loading">
      <div className="relative group">
        <img className="w-full h-32 sm:h-40 object-cover transition duration-700 transform-gpu scale-100 group-hover:scale-110" src={imgSrc} alt="Delicious Cake" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>
      <div className="p-4">
        <h2 className="text-base sm:text-xl font-semibold">Chocolate Chiffon Cake</h2>
        <div className={`mt-2 text-black ${showContent ? 'animate-slide-up' : ''}`}>
          {showContent && (
            <p className='text-xs sm:text-base'>
              A delicious cake is a mouthwatering treat with rich flavors and a moist, tender texture.
            </p>
          )}
        </div>
        <div className="mt-4">
          <button className="px-2 sm:px-4 py-1 sm:py-2 bg-green-500 font-semibold text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center animate-pulse">
            <FaWhatsapp className="mr-2 text-base sm:text-2xl" />
            <p className='text-xs sm:text-2xl'>Order Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
