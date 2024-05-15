import React from 'react'
import "./featured.css"
import Heading from '../../common/Heading'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <div>
        <section className='featured background'>
            <div className="container">
                <Heading title=" Featured Property Types" subtitle="Find All Type of Property." />
                
                <FeaturedCard />
            </div>
        </section>
    </div>
  )
}

export default Featured