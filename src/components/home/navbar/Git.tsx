import React from 'react'
import Github from '../../../assetes/git-svgrepo-com.svg'

function Git() {
  return (
    // eslint-disable-next-line
    <a href='https://github.com/almallahi98' target={'_blank'} rel='noreferrer'>
    <div className="flex justify-center">
    <div className='flex items-center'>
    <img src={Github} alt='github' className="w-8 h8" />
    <p className="capitalize ml-1 font-semibold">github</p>
    </div>
  </div>
  </a>
  )
}

export default Git