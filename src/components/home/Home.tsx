import React from 'react'
import Hero from './hero/Hero'
import SkillList from './skills/SkillList'

function Home() {
  return (
    <div className='bg-bg-gradient-prim pt-14'>
      <Hero/>
      <SkillList/>
      
    </div>
  )
}

export default Home