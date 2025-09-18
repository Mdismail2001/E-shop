import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="/src/assets/Banner-min.jpg"
        alt="Banner"
      />

      {/* Text Content */}
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-start pl-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Bid on Unique items <br /> From Around the World
        </h1>
        <p className="mt-4 max-w-lg text-lg">
          Futuristic car headlight glowing with striking blue and red halos,
          showcasing power and style in the dark
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
