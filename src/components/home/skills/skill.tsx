import React from 'react'

function Skill(props:any) {
  return (
    <div className='flex flex-col items-center'>
        <img src={props.img} alt={props.text} 
          className='p-2 rounded 
        bg-[#4f4f4f] hover:bg-[#222222] max-h-[100px]
          max-w-[100px] min-h-[100px] min-w-[100px]'/>
        {/* <p className='text-center text-slate-200 text-lg'>{props.text}</p> */}
    </div>
  )
}

export default Skill