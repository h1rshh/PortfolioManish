'use client';
import React, { useState } from 'react';

const Marquee = () => {
  const [speed, setSpeed] = useState(10); // Reduced initial speed

  return (
    <>
      <div className="flex flex-col items-center bg-black py-8 font-extrabold">
        <h1 className="text-white text-3xl font-bold mb-4 text-center font-sans">AS SEEN AT</h1>
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount={speed} // Dynamic speed
          className="text-white font-extrabold text-2xl space-x-20 hover:text-gray-400 transition-colors duration-300" // Hover color effect
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          onMouseEnter={() => setSpeed(5)}  // Slow down on hover
          onMouseLeave={() => setSpeed(10)} // Return to original speed when hover ends
        >
          DELHI TIMES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MILLANGE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAJASTHAN SPC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RERC
        </marquee>
      </div>
    </>
  );
}

export default Marquee;
