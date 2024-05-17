import React from 'react'
import './Location.css'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'

const Location = () => {
  return (
    <div>
      <section className="location padding background">
        <div className="container">
          <Heading title="Explore Cities" subtitle="Browse | Buy | Go" />

          <div className="content grid3 mtop">
            {location.map((items, index)=>{
              return(
                <div className="box" key={index}>
                  <img src={items.cover} alt="" />
                  <div className="overlay">
                    <h5>{items.name}</h5>
                    <p>
                      <label htmlFor="">{items.Villas}</label>
                      <label htmlFor="">{items.Offices}</label>
                      <label htmlFor="">{items. Apartments}</label>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location