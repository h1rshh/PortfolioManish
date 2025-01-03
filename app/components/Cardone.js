'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cardone = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered animation for the entire card component
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%', // Trigger animation when card is near the viewport
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="flex justify-center items-center bg-gray-100 font-sans pt-4 md:pt-10">
      <div className="bg-gradient-to-r from-[#D2B48C] to-[#b69c70] text-white rounded-lg shadow-lg py-4 px-4 sm:px-6 md:py-4 md:px-8 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] w-full mx-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">Want to earn exceptionally?</h1>
        <p className="mb-4 text-base md:text-lg text-center font-semibold">
          "Unlock Your Financial Freedom! Imagine earning up to <span className="font-extrabold underline">20k - 50k monthly</span> —a lifestyle filled with opportunities, dreams realized, and the comfort you deserve. Join our transformative course and step into a future where your income potential knows no bounds!"
        </p>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchidQCxDP_d2F0AG3Xvo07aqXQGIHxDkXbcGpeUG4p_DUA_w/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#c79847] font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
              Earn Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cardone;
