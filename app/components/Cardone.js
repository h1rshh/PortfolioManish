import React from 'react';

const Cardone = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] p-4 bg-gray-100 font-sans">
      <div className="bg-gradient-to-r from-[#D2B48C] to-[#b69c70] text-white rounded-lg shadow-lg p-6 max-w-[80%] w-full mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Want to earn exceptionally?</h1>
        <p className="mb-6 text-lg text-center font-semibold">
        "Unlock Your Financial Freedom! Imagine earning upto <span className="font-extrabold underline">20k - 50k monthly</span> —a lifestyle filled with opportunities, dreams realized, and the comfort you deserve. Join our transformative course and step into a future where your income potential knows no bounds!"
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-[#c79847] font-semibold py-3 px-6 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
            Earn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardone;
