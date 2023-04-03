import React, { FormEvent, useRef } from 'react'
import HeaderText from '../../genral/HeaderText'

function ContactMe() {
    const message = useRef<HTMLTextAreaElement>(null)
    const email=useRef<HTMLInputElement>(null);
    const title= useRef<HTMLInputElement>(null);
    const submitHandler=(e:FormEvent)=>{
        e.preventDefault();
        console.log(message.current?.value);
        console.log(email.current?.value);
        console.log(title.current?.value);
        
        
        
    }
  return (
    <div className='p-6 bg-[#4f4f4f]'>
        <HeaderText text='keep-in-tuch'/>
        <div className='flex justify-center'>
            <form className='px-8 md:w-2/3 md:px-0' onSubmit={(e)=>{submitHandler(e)}}>
                <div className='mb-2 flex flex-col'>
                    <label htmlFor='title'>title</label>
                    <input id='title' ref={title} type={'text'}/>
                </div>
                <div className='mb-2 flex flex-col'>
                <label htmlFor='email' className=''>email</label>
                    <input id='email' ref={email} type={'email'}/>
                </div>
                <div className='mb-2 flex flex-col'>
                    <label htmlFor='message'>message</label>
                    <textarea id='message' ref={message} className='w-full h-40'/>
                </div>
                <div className='flex justify-center gap-8 mb-2'>
                <button type='submit' className='btn-send'>send</button>
                <button className='btn-clear'>clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactMe