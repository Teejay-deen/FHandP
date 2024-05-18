import React from 'react'

import "../../components/home/Featured/featured.css"
import Back from '../common/Back'
import FeaturedCard from '../home/Featured/FeaturedCard'


const Services = () => {
  return (
    <div>
        <section className='services mb'>
            <Back name="Services" title="Services-all services" cover='../images/list/p-4.png' />
            <div className="featured container">
                <FeaturedCard />
            </div>
        </section>
    </div>
  )
}

export default Services