'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const [speed, setSpeed] = useState(10);
  const headingRef = useRef(null);

  // Throttle function to avoid rapid calls on hover state change
  const throttle = (func, delay) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = setTimeout(() => (inThrottle = false), delay);
      }
    };
  };

  const handleMouseEnter = throttle(() => setSpeed(5), 200);
  const handleMouseLeave = throttle(() => setSpeed(10), 200);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            once: true, // Ensures the animation only plays once
          },
        }
      );
    }, headingRef);

    return () => animationContext.revert();
  }, []);

  return (
    <div className="flex flex-col items-center bg-black py-8 font-extrabold">
      <h1
        ref={headingRef}
        className="text-white text-3xl font-bold mb-4 text-center font-sans"
      >
        AS SEEN AT
      </h1>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount={speed}
        className="text-white font-extrabold text-2xl space-x-20 hover:text-gray-400 transition-colors duration-300"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        DELHI TIMES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MILLANGE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAJASTHAN SPC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RERC
      </marquee>
    </div>
  );
}

export default Marquee;
