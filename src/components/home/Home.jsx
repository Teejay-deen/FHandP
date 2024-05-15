import React from 'react'
import Hero from './Hero/Hero'
import Scammed from './scammed/Scammed'
import Featured from './Featured/Featured'

const Home = () => {
  return (
    <div>
        <Hero />
        <Scammed />
        <Featured />
    </div>
  )
}

export default Home