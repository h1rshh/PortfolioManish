'use client'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis' // Import Lenis
import Towhead from './components/Towhead'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Testimonial from './components/Testimonial'
import Footers from './components/Footers'
import Cardone from './components/Cardone'
import Marquee from './components/Marquee'

const Page = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      duration: 1.5, // Adjust the scroll duration for a smoother effect
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Optional easing function
    });

    // Request animation frame for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up the Lenis instance when the component unmounts
    };
  }, []);

  return (
    <>
      <div>
        <Towhead />
        <section id='hero'>
          <Hero />
        </section>
        <Marquee />
        <Cardone />
        <section id='solution'>
          <Solutions />
        </section>
        <section id='testimonial'>
          <Testimonial />
        </section>
        <section id='footer'>
          <Footers />
        </section>
      </div>
    </>
  )
}

export default Page;
