import React from 'react'
import HeaderText from '../../genral/HeaderText'
import Project from './Project'


function ProjectsList() {
  return (
    <div className='p-6'>
        <HeaderText text='project'/>
        <div className='grid grid-cols-2 gap-3 mt-6'>
            <Project img='/data/Untitled-1.png' text='test' link='ss'/>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}

export default ProjectsList