import React from 'react'

function Course(props:any) {
  return (
    <div className='inline-flex bg-gray-prim p-4 hover:bg-[#222222] border-2 border-gray-300 border-opacity-0 hover:border-2 hover:border-green-prim  rounded shadow-lg'>
            <img src={props.img} alt={props.imgalt}
            className='max-h-[100px] max-w-[100px] border-gray-prim
             hover:border-gray-prim rounded-full border-2 shadow-2xl
             bg-white'
            />
            <div className=' ml-4 my-auto'>
            
            <p className='text-gray-300 capitalize font-mono'>
                {props.text}
                <a href={props.link} className='text-green-prim font-mono underline ml-1' 
                // eslint-disable-next-line
                target={'_blank'} rel='noreferrer'>{props.linktext}</a>
            </p>
            
            <p className='text-gray-300 capitalize font-mono font-semibold'>from: {props.from}</p>
            
            </div>
        </div>
  )
}

export default Course