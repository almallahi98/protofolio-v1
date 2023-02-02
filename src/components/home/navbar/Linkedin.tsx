import React from 'react'
import LinkedinIcon from '../../../assetes/linkedin-svgrepo-com.svg'
function Linkedin() {
  return (
    <div className="flex justify-center ">
              <div className='flex items-center'>
              <img src={LinkedinIcon} alt='linkedin' className="w-7 h-7" />
              <p className="uppercase ml-1 font-semibold">linledin</p>
              </div>
            </div>
  )
}

export default Linkedin