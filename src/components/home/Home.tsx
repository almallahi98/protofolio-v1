import React from 'react'
import Traning from '../traning/Traning'
import ContactMe from './contact-form/ContactMe'
import Hero from './hero/Hero'
import ProjectsList from './projects-section/ProjectsList'
import SkillList from './skills/SkillList'

function Home() {
  return (
    <div className='bg-gray-prim '>

    
    <div className='bg-bg-gradient-prim pt-14 md:my-auto flex-col md:mx-10 shadow-2xl'>
      <Hero/>
      <SkillList/>
      <Traning/>
      <ProjectsList/>
      <ContactMe/>
    </div>
    </div>
  )
}

export default Home