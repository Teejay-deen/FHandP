import React from 'react'
import Hero from './Hero/Hero'
import Scammed from './scammed/Scammed'
import Featured from './Featured/Featured'
import Recent from './recent/Recent'
import Awards from './Awards/Awards'

const Home = () => {
  return (
    <div>
        <Hero />
        <Scammed />
        <Featured />
        <Recent />
        <Awards />
    </div>
  )
}

export default Home