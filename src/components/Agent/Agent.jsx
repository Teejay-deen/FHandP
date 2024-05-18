import React from 'react'
import Team from '../home/team/Team'
import '../home/team/Team.css'
import Back from '../common/Back'


const Agent = () => {
  return (
    <div>
        <section className='agent mb '>
            <Back name='Agents' title='Our Agents'  cover='../images/banner3.jpg' />
            <div className="">
                <Team />
            </div>
        </section>
    </div>
  )
}

export default Agent