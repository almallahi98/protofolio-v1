import React from 'react'
import HeaderText from '../genral/HeaderText'
import Course from './Course'

function Traning(props: any) {
    return (
        <div className='p-6'>
            <HeaderText text='TRAINING COURSE' />
            <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2'>
            <Course
                imgalt='dd'
                img='https://avatars.githubusercontent.com/u/92674658?s=200&v=4'
                text='fullstack javascript developer'
                from='tuwaiq academy'
                link='https://drive.google.com/file/d/1HkRrzZ0FWx1vSwV-laBxM8moUXYz-uEQ/view?usp=share_link'
                linktext='link' />

            <Course
                imgalt='dd'
                img='https://futureskills.mcit.gov.sa/sites/default/files/inline-images/%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84%20%D9%83%D8%AD%D9%84%D9%8A.png'
                text='Computer Hacking Forensics Investigator'
                from='futures kills'
                link='https://drive.google.com/file/d/1Qd9in4isnNOmzgSi2y32QR0pP5bntUp3/view?usp=share_link'
                linktext='link' />
            </div>

        </div>
    )
}

export default Traning