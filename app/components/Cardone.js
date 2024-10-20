import React from 'react';

const Cardone = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 font-sans pt-4 md:pt-10">
      <div className="bg-gradient-to-r from-[#D2B48C] to-[#b69c70] text-white rounded-lg shadow-lg py-4 px-4 sm:px-6 md:py-4 md:px-8 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] w-full mx-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">Want to earn exceptionally?</h1>
        <p className="mb-4 text-base md:text-lg text-center font-semibold">
          "Unlock Your Financial Freedom! Imagine earning up to <span className="font-extrabold underline">20k - 50k monthly</span> —a lifestyle filled with opportunities, dreams realized, and the comfort you deserve. Join our transformative course and step into a future where your income potential knows no bounds!"
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-[#c79847] font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
            Earn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardone;
