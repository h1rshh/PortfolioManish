'use client'
import React, { useEffect } from 'react'
import Towhead from './components/Towhead'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Testimonial from './components/Testimonial'
import Footers from './components/Footers'
import Cardone from './components/Cardone'
import Marquee from './components/Marquee'

const Page = () => {

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
