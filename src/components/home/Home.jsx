import React from 'react'
import Hero from './Hero/Hero'
import Scammed from './scammed/Scammed'
import Featured from './Featured/Featured'
import Recent from './recent/Recent'
import Awards from './Awards/Awards'
import Location from './Location/Location'
import Team from './team/Team'
import Testimonial from './Testimonial/Testimonial'


const Home = () => {
  return (
    <div>
        <Hero />
        <Scammed />
        <Featured />
        <Recent />
        <Location />
        <Awards />
        <Testimonial />
        <Team />
    </div>
  )
}

export default Home