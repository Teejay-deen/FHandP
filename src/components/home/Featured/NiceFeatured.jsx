import React from 'react'
import { niceFeatured } from '../../data/Data'

const NiceFeatured = () => {
  return (
         <div>
        <div className="content flex5 mtop1">
            {niceFeatured.map((items, index)=>(
                <div className="box1" key={index}>
                    <img className='niceFeatureImg' src={items.cover} alt="" />
                    <h4>{items.name}</h4>
                    <label>{items.total}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NiceFeatured