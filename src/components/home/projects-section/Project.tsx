import React from 'react'

function Project(props: any) {
  return (
    <div className={`group m-2 bg-gray-prim rounded-md min-h-[150px] w-[100%] bg-cover bg-center 
    border-2 hover:border-green-prim`}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <a href={props.link}>
      <div className='relative h-[100%]'>
        <div className='absolute bottom-0 left-0 right-0
        bg-[rgba(79,79,79,.5)] rounded-b px-2 pb-1
        transition-all duration-1000 ease-in-out  
        group-hover:h-[100%]  group-hover:text-9xl 
        group-hover:py-[28%] 
        h-0
        '>
          <p className=' transition-opacity duration-1000 ease-in-out
           group-hover:opacity-100 opacity-0 group-hover:text-center text-semibold text-xl font-mono text-green-prim'>{props.text}</p>
        </div>
      </div></a>
    </div>
  )
}

export default Project