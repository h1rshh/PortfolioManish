import React from 'react'
import Tophead from './components/Towhead'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Testimonial from './components/Testimonial'
import Footers from './components/Footers'
import Cardone from './components/Cardone'
import Marquee from './components/Marquee'

const Page = () => {
  return (
    <>
      <Tophead />
      <Hero />
      <Marquee />
      <Cardone />
      <Solutions />
      <Testimonial />
      <Footers />
    </>
  )
}

export default Page;