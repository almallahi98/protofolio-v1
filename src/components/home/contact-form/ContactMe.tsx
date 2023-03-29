import React from 'react'
import HeaderText from '../../genral/HeaderText'

function ContactMe() {
  return (
    <div>
        <HeaderText text='keep-in-tuch'/>
            <form className='mx-4'>
                <div className='mb-2'>
                    <label htmlFor='title'>title</label>
                    <input id='title' type={'text'}/>
                </div>
                <div className='mb-2'>
                <label htmlFor='email' className='w-40'>email</label>
                    <input id='email' type={'email'}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='message'>message</label>
                    <input id='message' type={'text'} className='w-80 h-40'/>
                </div>
                <div className='flex justify-center gap-8 mb-2'>
                <button type='submit' className='btn-send'>send</button>
                <button>clear</button>
                </div>
            </form>
    </div>
  )
}

export default ContactMe