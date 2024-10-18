import React from 'react';

const Cardone = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] p-4 bg-gray-100">
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg shadow-lg p-6 max-w-[80%] w-full mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Want to earn exceptionally?</h1>
        <p className="mb-6 text-lg text-center">
          Join our coaching program and learn valuable insights and strategies from professionals.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-orange-500 font-semibold py-3 px-6 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
            Earn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardone;
